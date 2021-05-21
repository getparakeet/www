<template>
  <div class="beta-access">
    <h2>Sign up for beta access</h2>
    <form action="https://formspree.io/f/xnqlprkj" method="POST">
      <label>
        Your email:
        <input
          type="email"
          name="_replyto"
          class="email"
          placeholder="you@probablygmail.com"
          required
        />
      </label>
      <input type="text" name="_gotcha" placeholder="lol gPranked" hidden />
      <button type="submit" class="submit">Submit</button>
    </form>
    <small
      >You will be redirected to our partener,
      <a href="https://formspree.io">Formspree,</a> who handles forms for
      us</small
    >
  </div>
</template>

<script lang="ts">
export default {}
</script>

<style>
.email {
  background: transparent;
  width: 15em;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 5000px;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  box-shadow: 4px 4px 60px rgba(0, 0, 0, 0.2);
  color: rgb(0, 0, 0);
  font-family: sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 4px 4px 60px 8px rgba(0, 0, 0, 0.2);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}
.email:focus {
  border: none;
}
.submit {
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
