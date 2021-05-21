<template>
  <nav>
    <div class="nav-items">
      <a href="/">
        <img src="/assets/parakeetlogo.png" alt="Parakeet Logo" class="blgo" />
      </a>
      <a href="/meet-us" class="nav-item">
        <p>Meet Us</p>
      </a>
      <a href="/products" class="nav-item">
        <p>Products</p>
      </a>
      <a href="https://blog.getparakeet.dev" class="nav-item">
        <p>Blog</p>
      </a>
      <div class="login-options">
        <a href="https://dashboard.getparakeet.dev/in/login">
          <div
            v-html="$feathericons['log-in'].toSvg()"
            class="icon in login"
            aria-label="log in button"
          ></div>
        </a>
        <a href="/getbeta">
          <div class="button gets login">Apply to the Beta</div>
        </a>
      </div>
    </div>
  </nav>
</template>
<style>
nav {
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  opacity: 0.5;
  background: rgb(255, 255, 255);
}
.blgo {
  border-radius: 50%;
}
.nav-item {
  float: left;
  padding: 15px;
}
.login {
  float: right;
  padding: 15px;
}
.login-options {
  padding: 15px;
  padding-right: 30px;
  color: rgb(255, 255, 255);
}
.button {
  padding: 10px;
  border-radius: 5px;
}
.in {
  color: rgb(0, 0, 0);
}
.gets {
  background: rgba(52, 171, 235, 1);
  color: rgb(255, 255, 255);
}
a {
  text-decoration: none;
  color: #20123a;
}
a:visited {
  text-decoration: none;
  color: #20123a;
}
</style>
