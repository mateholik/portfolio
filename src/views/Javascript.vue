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
