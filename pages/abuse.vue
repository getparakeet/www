<template>
  <div class="abuse-page">
    <h1 class="text-5xl text-center">
      We take abuse of our services <strong>very</strong> seriously.
    </h1>
    <h2 class="text-4xl text-center">Thank you for reporting abuse.</h2>
    <div class="spacer"></div>
    <div class="npsf text-center">
      <form method="POST" action="https://formspree.io/f/xrgrpwvk">
        <label>
          Your email:
          <input
            type="email"
            name="_replyto"
            class="email"
            required
            spellcheck="false"
          />
        </label>
        <br />
        <label>
          What kind of abuse are you reporting?
          <select name="typeofa" required spellcheck="false">
            <option disabled>Type of abuse</option>
            <option>Scammers using our services</option>
            <option>Hate or Discrimination</option>
            <option>Pornographic content</option>
            <option>Other</option>
          </select>
        </label>
        <div class="spacer"></div>
        <label>
          What domains/subdomains are being used?<br />
          <textarea
            name="domainlist"
            class="domainlist"
            placeholder="One domain per line, e.g.:
example.parakeet.cloud
example.parakeet-cdn.co"
            rows="13"
            cols="56"
            required
            spellcheck="false"
          ></textarea>
        </label>
        <div class="spacer"></div>
        <label>
          Anything else to add?<br />
          <textarea
            name="morenotes"
            class="domainlist"
            placeholder="Notes"
            rows="13"
            cols="56"
            required
            spellcheck="false"
          ></textarea>
        </label>
        <input type="text" name="_gotcha" placeholder="lol gPranked" hidden />
        <!-- Honeypot   ^   |   It's worth removing the hidden lol     ^    -->
        <div class="spacer"></div>
        <button class="submit">Submit</button>
        <div class="spacer"></div>
        <small
          >You will be redirected to our partener,
          <a href="https://formspree.io">Formspree,</a> who handles forms for
          us</small
        >
      </form>
    </div>
  </div>
</template>

<script>
export default {}
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
.npsf {
  display: inline;
}
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
  outline: none;
  box-shadow: 30px 30px 80px rgba(0, 0, 0, 0.2);
}
.type {
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
.type:focus {
  border: none;
  outline: none;
  box-shadow: 30px 30px 80px rgba(0, 0, 0, 0.2);
}
.domainlist {
  background: transparent;
  width: 15em;
  padding: 1em;
  margin-bottom: 2em;
  border: none;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 1px solid rgba(255, 255, 255, 0.3);
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
.domainlist:focus {
  border: none;
  outline: none;
  box-shadow: 30px 30px 80px rgba(0, 0, 0, 0.2);
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
.spacer {
  padding: 15px;
}
</style>
