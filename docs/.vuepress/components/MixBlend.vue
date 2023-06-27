<template>
  <div class="mix-blend-container">
    <img
      src="https://i.ibb.co/fMBvhbQ/tumblr-87a40d4b30b4c8e8ebf12a82eb71f8f0-44246dc6-500.webp"
      alt=""
    />
    <div class="text">
      <div class="title">vue3 easy</div>
      <div class="title">data table</div>
    </div>
  </div>
      <!-- <div class="description">A customizable and easy-to-use data table component made with Vue.js 3.x</div> -->
  <header class="hero show">
    <p class="actions">
      <a
        href="/vue3-easy-data-table-doc/getting-started.html"
        class="action-button primary"
        aria-label="Get Started"
      >
        Get Started </a
      ><a
        href="/vue3-easy-data-table-doc/introduction.html"
        class="action-button secondary"
        aria-label="Introduction"
      >
        Introduction
      </a>
    </p>
  </header>
</template>

<style scoped>
.hero.show {
  display: block;
}
.mix-blend-container {
  height: 220px;
  overflow: hidden;
  position: relative;
}
.mix-blend-container img {
  width: 100%;
  object-fit: cover;
}
.mix-blend-container .text {
  position: absolute;
  background-color: white;
  mix-blend-mode: lighten;
  text-align: center;
  inset: 0;
}
.mix-blend-container .title {
  height: 110px;
  line-height: 110px;
  font-size: 90px;
  font-weight: 900;
}
.mix-blend-container .description {
  font-size: 27px;
  width: 60%;
  margin: auto;
  font-weight: 700;
}

@media only screen and (max-width: 500px) {
  .mix-blend-container {
    height: 160px;
  }
  .mix-blend-container .title {
    font-size: 47px;
    height: 65px;
  }
}
</style>
