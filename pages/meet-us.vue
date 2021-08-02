<template>
  <div class="us">
      <navbar />
      <div class="list">
          <img src="../assets/me.jpeg" alt="Levi Richardson" class="lrichardson" />
          <div class="lrichardson-details">
              <h3 class="lrichardson-name">Levi Richardson</h3>
              <p>
                  Levi is a hobbyist developer who created Parakeet.
                  <br />You can find him at <a href="https://litbelb.com">litbelb.com</a>.
              </p>
          </div>
      </div>
      <div class="join-us">
          <h3 class="joinus-large-text">Join us!</h3>
          <div class="button">
              <a href="https://tally.so/r/meejxm">
                Work with us
              </a>
          </div>
      </div>
      <ftr />
  </div>
</template>

<script>
import navbar from '~/components/navbar.vue'
export default {
  components: { navbar },

}
</script>

<style>
.list {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}
.lrichardson {
    width: 75px;
    height: 75px;
    border-radius: 50%;
}
.lrichardson-name {
    font-size: 2.5rem;
}
.join-us {
    position: absolute;
    top: 62%;
    right: 50%;
}
.joinus-large-text {
    font-size: 2.5rem;
}
.button {
  background: rgba(52, 171, 235, 1);
  padding: 15px;
  border: none;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
</style>