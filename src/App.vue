<template>

  <div id="app">
    <!--<footer-component></footer-component>-->
    <aside-component></aside-component>
    <main>
      <div class="container">
        <transition name="router-animation">
           <router-view></router-view>
        </transition>
        <go-top :size="40" bg-color="rgba(215, 117, 19, 0.9)" :bottom="50" :max-width="320"></go-top>
        <Footer
                where="bottom"
        ></Footer>
      </div>
    </main>
  </div>
</template>

<script>
    import Aside from './components/Aside'
    import Footer from './components/Footer'
    import Vue from 'vue'
    import GoTop from '@inotom/vue-go-top';
    Vue.use(GoTop);

    export default {
        name: 'app',
        components: {
            'aside-component': Aside,
            'go-top': GoTop,
             Footer
        }
    }
</script>

<style lang="scss" scoped>
</style>
