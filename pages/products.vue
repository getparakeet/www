<template>
  <div class="collision products p-40">
    <navbar />
    <div class="options">
      <hr />
      <div class="opt option-1">
        <h2 class="text-4xl">Free</h2>
        <ul>
          <li>❌ No Custom Domain/Vanity URL for CDN</li>
          <li>
            ❌ 10,000 Requests/month max<a
              href="#requestmax-modal"
              class="modal-opener"
              >*</a
            >
          </li>
          <li>❌ Low Priority</li>
          <li><span class="dash">-</span> 24-hour e-mail Support</li>
          <li><span class="dash">-</span> 800 MB file limit</li>
          <li>✔️ HTTPS</li>
        </ul>
        <div class="pricing price1">Free forever</div>
      </div>
      <hr />
      <div class="opt option-2">
        <h2 class="text-4xl">Premium</h2>
        <ul>
          <li><span class="dash">-</span> Custom Subdomain for CDN</li>
          <li><span class="dash">-</span> Medium Priority</li>
          <li><span class="dash">-</span> 12-hour e-mail Support</li>
          <li><span class="dash">-</span> 2 GB file limit</li>
          <li>✔️ No rate limiting</li>
          <li>✔️ HTTPS</li>
        </ul>
        <div class="pricing price2">$10.00<span>/month</span></div>
      </div>
      <hr />
      <div class="opt option-3">
        <h2 class="text-4xl">Pro</h2>
        <ul>
          <li>
            ✔️ Proxied Domain
            <a href="#proxy-limitations">(see limitations)</a>
          </li>
          <li>✔️ Max Priority</li>
          <li>✔️ 15-minute chat support</li>
          <li>✔️ 10 GB file limit</li>
          <li>✔️ No rate limiting</li>
          <li>✔️ HTTPS</li>
        </ul>
        <div class="pricing price3">$15.00<span>/month</span></div>
      </div>
      <hr />
    </div>
    <div class="modal" id="requestmax-modal">
      <div class="modal-text">
        <h2 class="text-4xl">Rate Limiting for free tier</h2>
        <p>
          If your website and/or storage gets over 10,000 (ten thousand) views for 2
          months consecutive, we will pause any views that surpass 10,000 until
          (a): the next month, or (b): you upgrade to Premium, Pro, or
          Enterprise. We will not pause any views for 1 month.
        </p>
        <a href="#">
          <div class="close-btn">Ok</div>
        </a>
      </div>
    </div>
    <div class="modal" id="proxy-limitations">
      <div class="modal-text">
        <h2 class="text-4xl">Proxying Limitations</h2>
        <p>
          Some domains are not supported
          <a
            href="https://docs.parakeet.dev/proxy/blocklisted-domains"
            target="_blank"
            >(see full list)</a
          >
          and speed may be slightly limited at times of load. We also have every
          right to remove any domain for any reason.
        </p>
        <a href="#">
          <div class="close-btn">Ok</div>
        </a>
      </div>
    </div>
    <div class="center">
      <betaaccess />
    </div>
    <ftr />
  </div>
</template>

<script>
import Betaaccess from '~/components/betaaccess.vue'
import ftr from '~/components/ftr.vue'
import navbar from '~/components/navbar.vue'
export default {
  components: { ftr, navbar, Betaaccess },
}
</script>

<style>
:root {
  --color1: rgba(128, 255, 0, 1);
  --color2: rgba(52, 171, 235, 1);
  --purple: rgba(112, 38, 185, 1);
  --red: rgba(255, 0, 0, 1);
  --orange: rgb(245, 149, 57);
  --heightFull: 100vh;
  --widthFull: 100vw;
}
::selection {
  background: rgba(52, 171, 235, 0.6);
}
span {
  color: rgb(0, 0, 0);
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
hr {
  margin-top: 1rem;
  margin-bottom: 1rem;
  border: 2px solid var(--color2);
}
.center {
  text-align: center;
}
.collision {
  height: 100vh;
  display: grid;
}
.dash {
  color: var(--orange);
  font-weight: bold;
  font-size: 3em;
  padding: none;
  margin: none;
  margin-top: none;
  margin-bottom: none;
  display: inline-block;
  line-height: 10px;
}
.pricing {
  position: absolute;
  font-size: 3em;
  color: var(--orange);
}
.opt {
  padding: 15px;
}
.price1 {
  bottom: 72%;
  right: 7%;
}
.price2 {
  bottom: 45%;
  right: 7%;
}
.price3 {
  bottom: 19%;
  right: 7%;
}
.modal-opener {
  color: var(--color2);
  font-size: 100;
}
.modal {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: rgb(77, 77, 77);
  transition: all 0.4s;
  color: rgb(255, 255, 255);
}
.modal-text {
  margin-right: 450px;
  margin-left: 450px;
}
.modal:target {
  visibility: visible;
  opacity: 1;
}

.modal__content {
  border-radius: 4px;
  position: relative;
  width: 500px;
  max-width: 90%;
  background: #fff;
  padding: 1em 2em;
}
.modal__close {
  position: absolute;
  top: 10px;
  right: 10px;
  color: #585858;
  text-decoration: none;
}
.close-btn {
  background: var(--color2);
  position: absolute;
  border-radius: 15px;
  padding: 15px;
  width: 3%;
  left: 35%;
}
</style>
