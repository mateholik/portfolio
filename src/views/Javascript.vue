<template>
  <section>
    <div class="portfolio">
      <h1 class="portfolio__title">
        <img :src="require('./../assets/img/icons/js.svg')" />JAVASCRIPT
      </h1>

      <h2 class="portfolio__subtitle">
        <img :src="require('./../assets/img/icons/check.svg')" />Projects for portfolio
      </h2>
      <div class="portfolio__inner">
        <a href="https://bb.vladis.lt/" target="_blank" class="item item-breaking-bad">
          <div class="item__mask"></div>
          <div class="item__price">React</div>
          <div class="item__name">Breaking Bad API</div>
        </a>
        <a href="https://movies.vladis.lt/" target="_blank" class="item item-movies">
          <div class="item__mask"></div>
          <div class="item__price">Vue, Vuex, Vuetify</div>
          <div class="item__name">TMDB API</div>
        </a>
        <a href="https://url-shortener.vladis.lt/" target="_blank" class="item item-shortener">
          <div class="item__mask"></div>
          <div class="item__price">Express, MongoDB</div>
          <div class="item__name">Node.js</div>
        </a>
        <a href="https://jobs.vladis.lt/" target="_blank" class="item item-jobs">
          <div class="item__mask"></div>
          <div class="item__price">React</div>
          <div class="item__name">GitHub Jobs API</div>
        </a>
        <a href="https://todos.vladis.lt/" target="_blank" class="item item-todos">
          <div class="item__mask"></div>
          <div class="item__price">Vue, Vuex</div>
          <div class="item__name">JSON Placeholder API</div>
        </a>
        <a href="https://calendar.vladis.lt" target="_blank" class="item item-calendar">
          <div class="item__mask"></div>
          <div class="item__price">Vue, Vuetify</div>
          <div class="item__name">Firebase Cloud Firestore</div>
        </a>
        <a href="https://budget.vladis.lt" target="_blank" class="item item-budget">
          <div class="item__mask"></div>
          <div class="item__price">Vanilla JS</div>
          <div class="item__name">Budget app</div>
        </a>
        <a href="https://teorija.vladis.lt" target="_blank" class="item item-theory">
          <div class="item__mask"></div>
          <div class="item__price">Vue</div>
          <div class="item__name">Major modes</div>
        </a>
        <a href="https://mars.vladis.lt" target="_blank" class="item item-mars">
          <div class="item__mask"></div>
          <div class="item__price">Vanilla JS</div>
          <div class="item__name">NASA Mars API</div>
        </a>
        <a href="https://minesweeper.vladis.lt" target="_blank" class="item item-mines">
          <div class="item__mask"></div>
          <div class="item__price">Vanilla JS</div>
          <div class="item__name">Minesweeper game</div>
        </a>
        <a href="https://snake.vladis.lt" target="_blank" class="item item-snake">
          <div class="item__mask"></div>
          <div class="item__price">Vanilla JS</div>
          <div class="item__name">Snake game</div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Portfolio",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
