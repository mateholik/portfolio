<template>
    <aside>
        <div class="aside">
            <div class="aside__inner">
                <a href="./" class="me">
                    <div class="me__img">
                        <img :src="imgMe" alt="">
                    </div>
                    <div class="me__title">
                        Vladis Vaisov
                    </div>
                    <div class="me__subtitle">
                        Front-End WEB programuotojas
                    </div>
                </a>
                <div class="nav">
                    <div class="nav__mobile">
                        <div class="socials socials--mobile">
                            <ul class="socials__ul">
                                <li class="socials__li socials__li--mobile">
                                    <a class="socials__link" target="_blank" href="https://www.facebook.com/vladis.vaisov">
                                        <i class="fab fa-facebook-square"></i>
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li class="socials__li socials__li--mobile">
                                    <a class="socials__link" target="_blank" href="https://www.linkedin.com/in/vladimir-vaisov">
                                        <i class="fab fa-linkedin"></i>
                                        <span>Linked In</span>
                                    </a>
                                </li>
                                <li class="socials__li socials__li--mobile">
                                    <a class="socials__link" target="_blank" href="https://wa.me/37060508501">
                                        <i class="fab fa-whatsapp"></i>
                                        <span>WhatsApp</span>
                                    </a>
                                </li>
                                <li class="socials__li socials__li--mobile">
                                    <a class="socials__link" target="_blank" href="https://github.com/mateholik">
                                        <i class="fab fa-github"></i>
                                        <span>GitHub</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <a @click="mobileNav = !mobileNav" href="#" class="nav__mobile-btn">
                            <i class="fa fa-bars"></i>
                        </a>
                    </div>
                        <ul class="nav__ul--desktop">
                            <router-link to="/paslaugos" tag="li" class="nav__li" exact @click.native="mobileNav = false">Paslaugos</router-link>
                            <router-link to="/" tag="li" class="nav__li" exact @click.native="mobileNav = false">Portfolio</router-link>
                            <router-link to="/faq" tag="li" class="nav__li" exact @click.native="mobileNav = false">D.U.K.</router-link>
                            <router-link to="/calc" tag="li" class="nav__li" exact @click.native="mobileNav = false">Kaina</router-link>
                        </ul>
                        <Transition name="slide-menu" mode="out-in" >
                            <ul class="nav__ul" v-if="mobileNav">
                                <router-link to="/paslaugos" tag="li" class="nav__li" exact @click.native="mobileNav = false">Paslaugos</router-link>
                                <router-link to="/" tag="li" class="nav__li" exact @click.native="mobileNav = false">Portfolio</router-link>
                                <router-link to="/faq" tag="li" class="nav__li" exact @click.native="mobileNav = false">D.U.K.</router-link>
                                <router-link to="/calc" tag="li" class="nav__li" exact @click.native="mobileNav = false">Kaina</router-link>
                            </ul>
                        </transition>
                     </div>


                <div class="socials">
                    <ul class="socials__ul">
                        <li class="socials__li">
                            <a class="socials__link" target="_blank" href="https://www.facebook.com/vladis.vaisov">
                                <i class="fab fa-facebook-square"></i>
                                Facebook
                            </a>
                        </li>
                        <li class="socials__li">
                            <a class="socials__link" target="_blank" href="https://www.linkedin.com/in/vladimir-vaisov">
                                <i class="fab fa-linkedin"></i>
                                Linked In
                            </a>
                        </li>
                        <li class="socials__li">
                            <a class="socials__link" target="_blank" href="https://wa.me/37060508501">
                                <i class="fab fa-whatsapp"></i>
                                WhatsApp
                            </a>
                        </li>
                        <li class="socials__li">
                            <a class="socials__link" target="_blank" href="https://github.com/mateholik">
                                <i class="fab fa-github"></i>
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
    import img from './../assets/img/me3.jpg'
    export default {
        name: 'Aside',
        data() {
            return {
                imgMe: img,
                mobileNav: false
            }
        }
    }
</script>

<style>

</style>
