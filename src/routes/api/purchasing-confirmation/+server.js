import { json } from "@sveltejs/kit";
import { Resend } from "resend";
import { Stripe } from "stripe";
import {
  RESEND_API_KEY,
  STRIPE_WEBHOOK_SECRET,
  STRIPE_API_KEY,
} from "$env/static/private";

const resend = new Resend(RESEND_API_KEY);

const stripe = new Stripe(STRIPE_API_KEY, { apiVersion: "2022-11-15" });

const PDF_GUIDE_URL =
  "https://narrify-public.s3.eu-central-1.amazonaws.com/sample.pdf";

export async function POST({ request }) {
  const body = await request.text(); 
  const signature = request.headers.get("stripe-signature") || "";

  try {
    const stripeEvent = stripe.webhooks.constructEvent(
      body,
      signature,
      STRIPE_WEBHOOK_SECRET
    );

    const customerEmail = stripeEvent.data.object.customer_details.email;
    const customerName = stripeEvent.data.object.customer_details.name;

    const response = await fetch(PDF_GUIDE_URL);
    const pdfBuffer = await response.arrayBuffer();
    const base64Pdf = Buffer.from(pdfBuffer).toString("base64");

    const message = {
      from: "John Lim <onboarding@resend.dev>",
      to: customerEmail,
      subject: "Your Purchase Confirmation - Complete Spain Relocation Guide",
      html: `
        <h1>Thank You for Your Purchase!</h1>
        <p>Dear ${customerName},</p>
        <p>We appreciate your purchase of the <strong>Complete Spain Relocation Guide</strong>. We're confident that this ebook will provide you with valuable information for your move.</p>
        <p><strong>What happens next?</strong></p>
        <ul>
          <li>You will find your ebook attached to this email. Please download and save it for future reference.</li>
          <li>A separate purchase confirmation has been sent to your email as well.</li>
          <li>If you have any questions or need further assistance, don't hesitate to reach out to us at jwesley1210@gmail.com.</li>
        </ul>
        <p>Thank you once again for choosing our guide. We wish you the best of luck on your journey to Spain!</p>
        <p>Best regards,<br/>The Skys Team</p>
      `,
      attachments: [
        {
          content: base64Pdf,
          filename: "Complete_Spain_Relocation_Guide.pdf",
          type: "application/pdf",
          disposition: "attachment",
        },
      ],
    };

    const emailResponse = await resend.emails.send(message);
    console.log("Email sent successfully:", emailResponse);
    return json({ response: "Email sent" });
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return json(
      { error: "Webhook signature verification failed" },
      { status: 400 }
    );
  }
}
