<template>
  <div class="h-full">
    <navbar />
    <div class="hero section p-40 m-8" id="main1a">
      <div class="hero-text">
        <h2 class="font-sans md:font-sans text-5xl font-extrabold">
          We're trying to make <br />
          <span class="wbd">web development</span> not
          <span class="sc">suck</span> anymore
        </h2>
        <p class="p-8 font-sans md:font-sans">
          We give our users open source cloud solutions that are easy, fast, and
          reasonably priced. No extra crap.
        </p>
        <div class="p-16">
          <betaaccess />
        </div>
      </div>
      <div class="hero-img">
        <!-- Lord have mercy on my soul -->
        <chaos />
      </div>
    </div>
    <div class="section pa-2 p-40 m-8">
      <div class="hero-text">
        <div v-html="$feathericons['lock'].toSvg()"></div>
        <h2 class="font-sans md:font-sans text-5xl font-extrabold">
          Safe and secure
        </h2>
        <p class="p-8 font-sans md:font-sans">
          All of our data is served over HTTPS (Why not? It's free.) and secured
          using SAS (Secure Access Signatures) so you can choose who gets to see
          what and when.
        </p>
      </div>
    </div>
    <div class="section pa-2 p-40 m-8">
      <div class="hero-text">
        <h2 class="font-sans md:font-sans text-5xl font-extrabold font-center">
          The hardest parts of the web, made simple.
        </h2>
        <div class="grid-wrapper">
          <div class="grid-item item-1">
            <div v-html="$feathericons['fast-forward'].toSvg()"></div>
            <h2 class="font-sans md:font-sans text-3xl">
              Store assets on a speedy CDN
            </h2>
            <p>
              Parakeet is designed to upload and forget it. No worrying about
              stressful security, confusing CDNs, or complicated DNS settings.
              Just upload, copy the link, and paste the link into your app.
            </p>
          </div>
          <div class="grid-item item-2">
            <div v-html="$feathericons['database'].toSvg()"></div>
            <h2 class="font-sans md:font-sans text-3xl">
              Extensible and Scalable
            </h2>
            <p>
              Parakeet is built with everyone in mind - from small web makers to
              large enterprises. Parakeet can handle millions of requests per
              minute, deflect DDoS attacks, and speed up your app, all without
              your or your users having to worry.
            </p>
          </div>
          <div class="grid-item item-3">
            <div v-html="$feathericons['moon'].toSvg()"></div>
            <h2 class="font-sans md:font-sans text-3xl">Private and Secure</h2>
            <p>
              We burn all of our logs every 30 days, and we
              <strong>never</strong> transfer, trade, or sell data to anyone. We
              are not in the business of data. Our logs are protected by the top
              level of SSL encryption. We believe that Privacy is a fundamental
              human right.
            </p>
          </div>
          <div class="grid-item item-4">
            <div v-html="$feathericons['globe'].toSvg()"></div>
            <h2 class="font-sans md:font-sans text-3xl">
              Environmentally Friendly
            </h2>
            <p>
              Climate change probably isn't something you want to think about
              while browsing the web. That's why we've carefully chosen our
              cloud providers, so that you don't have to.
            </p>
          </div>
        </div>
      </div>
    </div>
    <ftr />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Betaaccess from '~/components/betaaccess.vue'
import Chaos from '~/components/chaos.vue'
import navbar from '~/components/navbar.vue'

export default Vue.extend({
  components: { navbar, Chaos, Betaaccess },
})
</script>
<style>
:root {
  --color1: rgba(128, 255, 0, 1);
  --color2: rgba(52, 171, 235, 1);
  --purple: rgba(112, 38, 185, 1);
  --red: rgba(255, 0, 0, 1);
  --heightFull: 100vh;
  --widthFull: 100vw;
}
::selection {
  background: rgba(52, 171, 235, 0.6);
}
a {
  color: var(--purple);
}
html,
body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
}
.hero {
  width: var(--heightFull);
  height: var(--widthFull);
  display: flex;
  flex-direction: row;
}
.h-full {
  scroll-snap-type: y mandatory;
  height: 100vh;
  overflow: auto;
  scroll-snap-type: y mandatory;
}
.section {
  scroll-snap-align: center;
  height: 100vh;
}
.section-footer {
  scroll-snap-align: center;
}
.wbd {
  color: var(--purple);
}
.sc {
  color: var(--red);
}
.pa-2 {
  background: rgb(255, 255, 255);
  width: 100vh;
  height: 100vh;
}
.button {
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
}
.gets {
  background: var(--color2);
  color: rgb(255, 255, 255);
}
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
</style>
