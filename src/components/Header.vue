<template>
    <div>
        <header>
            <div class="container header-wrap">
                <div class="header-wrap__photo">
                    <img :src="imgMe" alt="">
                </div>
                <h1 class="header-wrap__title"> Vladis Vaisov</h1>
                <div class="header-wrap__contacts">
                    <div class="contacts-wrap">
                        <h2 class="contacts-wrap__position">WEB Programuotojas</h2>
                        <h2 class="contacts-wrap__mail"><a href="mailto:vaisov.vladimir@gmail.com">vaisov.vladimir@gmail.com</a></h2>
                        <h2 class="contacts-wrap__number"><a href="tel:+37060508501">+37060508501</a></h2>
                    </div>
                </div>
                <div class="header-wrap__socials">
                    <div class="socials-wrap">
                        <a class="socials-wrap__link" target="_blank" href="https://www.facebook.com/vladis.vaisov">
                            <i class="fab fa-facebook-square"></i>
                        </a>
                        <a class="socials-wrap__link" target="_blank" href="https://www.linkedin.com/in/vladimir-vaisov/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                        <a class="socials-wrap__link" target="_blank" href="viber://chat?number=37060508501">
                            <i class="fab fa-viber"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <div class="bg">
                <div class="container section-wrap">
                    <div class="section-wrap__content">
                        <div class="content-wrap">
                            <div class="content-wrap__title">Turinys</div>
                            <div class="content-wrap__items">
                                <router-link to="/" class="content-wrap__item">
                                    <div class="content-wrap__item-left">Darbų pavyzdžiai</div><span>....................................................................................................................</span>1
                                </router-link>
                                <router-link to="faq" class="content-wrap__item">
                                    <div class="content-wrap__item-left">D.U.K.</div><span>....................................................................................................................</span>2
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
import img from './../assets/img/me.jpg'
    export default {
        name: 'Header',
        data() {
            return {
                imgMe: img
            }
        }
    }
</script>

<style lang="sass">
</style>
