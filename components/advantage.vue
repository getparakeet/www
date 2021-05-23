<template>
  <div class="grid-wrapper">
    <div class="grid-item item-1">
      <div v-html="$feathericons['fast-forward'].toSvg()"></div>
      <h2 class="font-sans md:font-sans text-3xl">
        Store assets on a speedy CDN
      </h2>
      <p>
        Parakeet is designed to upload and forget it. No worrying about
        stressful security, confusing CDNs, or complicated DNS settings. Just
        upload, copy the link, and paste the link into your app.
      </p>
    </div>
    <div class="grid-item item-2">
      <div v-html="$feathericons['database'].toSvg()"></div>
      <h2 class="font-sans md:font-sans text-3xl">Extensible and Scalable</h2>
      <p>
        Parakeet is built with everyone in mind - from small web makers to large
        enterprises. Parakeet can handle millions of requests per minute,
        deflect DDoS attacks, and speed up your app, all without your or your
        users having to worry.
      </p>
    </div>
    <div class="grid-item item-3">
      <div v-html="$feathericons['moon'].toSvg()"></div>
      <h2 class="font-sans md:font-sans text-3xl">Private and Secure</h2>
      <p>
        We burn all of our logs every 30 days, and we
        <strong>never</strong> transfer, trade, or sell data to anyone. We are
        not in the business of data. Our logs are protected by the top level of
        SSL encryption. We believe that Privacy is a fundamental human right.
      </p>
    </div>
    <div class="grid-item item-4">
      <div v-html="$feathericons['globe'].toSvg()"></div>
      <h2 class="font-sans md:font-sans text-3xl">Environmentally Friendly</h2>
      <p>
        Climate change probably isn't something you want to think about while
        browsing the web. That's why we've carefully chosen our cloud providers,
        so that you don't have to.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>
