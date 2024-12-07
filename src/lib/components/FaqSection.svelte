<script>
  import { FaqItem, Button } from "$components";
  import twitterIcon from "$assets/icons/twitter.webp";

  const faqs = [
    {
      question: "What visas are available for moving to Spain?",
      answer:
        "There are various visas available for moving to Spain, including student visas, work visas, and family reunification visas. Each type of visa has specific requirements and application processes.",
    },
    {
      question: "How can I find accommodation in Spain?",
      answer:
        "You can find accommodation in Spain through various means such as online rental platforms, real estate agents, and local classifieds. It's important to research neighborhoods and consider factors like proximity to work or school.",
    },
    {
      question: "What is the healthcare system like in Spain?",
      answer:
        "Spain has a high-quality healthcare system that is available to residents and expats. Public healthcare is generally free or low-cost for residents, but many expats also opt for private health insurance to access private healthcare services.",
    },
    {
      question: "How do I integrate into the local culture in Spain?",
      answer:
        "Integrating into the local culture involves learning the language, participating in community events, and respecting local customs and traditions. Engaging with locals and immersing yourself in cultural activities can greatly enhance your experience.",
    },
    {
      question: "What are the education options for children in Spain?",
      answer:
        "Education in Spain is compulsory for children between the ages of 6 and 16. There are public, private, and international schools available. Public schools follow the Spanish curriculum, while international schools may offer curricula from other countries.",
    },
    {
      question: "How can I find a job in Spain?",
      answer:
        "Finding a job in Spain involves researching the job market, networking, and utilizing online job portals. Tailoring your resume to the Spanish job market and preparing for interviews can improve your chances of securing employment.",
    },
    {
      question: "What are the best ways to travel around Spain?",
      answer:
        "Traveling around Spain can be done through various means such as trains, buses, and domestic flights. Spain has a well-developed public transportation system, and renting a car can also be a convenient way to explore more remote areas.",
    },
  ];

  let questionCurrentlyExpanded = $state(-1);

  function onclick(index) {
    if (questionCurrentlyExpanded === index) {
      questionCurrentlyExpanded === -1;
    } else {
      questionCurrentlyExpanded = index;
    }
  }
</script>

<section class="landing-page-section">
  <h2 class="mb-l">Frequently asked questions</h2>
  <div class="faq-conteiner">
    {#each faqs as faq, index}
      <FaqItem
        {faq}
        isExpanded={index === questionCurrentlyExpanded}
        onclick={() => onclick(index)}
      />
    {/each}
  </div>
  <div class="additional-info">
    <Button class="mt-s">BUY NOW</Button>
    <p class="mt-m">Any other questions?</p>
    <a href="https://x.com">
      <p>
        Hit me up on twitter <img
          src={twitterIcon}
          class="twitter-icon"
          alt=""
        />
      </p>
    </a>
  </div>
</section>

<style>
  h2 {
    text-align: center;
  }

  .additional-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: grey;
  }

  .twitter-icon {
    width: 16px;
    height: 16px;
  }

  .additional-info a {
    text-decoration: underline;
  }
</style>
