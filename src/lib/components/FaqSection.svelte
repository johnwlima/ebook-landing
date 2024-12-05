<script>
  import { FaqItem, Button } from "$components";
  import twitterIcon from "$assets/icons/twitter.webp";
</script>

<section class="landing-page-section">
  <h2 class="mb-l">Frequently asked questions</h2>
  <div class="faq-conteiner">
    <FaqItem />
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
