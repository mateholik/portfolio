<template>
    <section>
        <div class="portfolio">
            <h1 class="portfolio__title"><img :src="require('./../assets/img/icons/portfolio.svg')" />Darbų pavyzdžiai</h1>

            <h2 class="portfolio__subtitle"><img :src="require('./../assets/img/icons/check.svg')" />El. parduotuvės</h2>
            <div class="portfolio__inner">
                <a href="https://matesklubas.lt/" target="_blank"  class="item item-mate">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 590eu
                    </div>
                    <div class="item__name">
                        matesklubas.lt
                    </div>
                </a>
                <a href="https://ecochoice.lt" target="_blank"  class="item item-ganja">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 450eu
                    </div>
                    <div class="item__name">
                        ecochoice.lt
                    </div>
                </a>
                <a href="https://www.papuosk.lt" target="_blank"  class="item item-papuosk">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 400eu
                    </div>
                    <div class="item__name">
                        papuosk.lt
                    </div>
                </a>
                <a href="http://www.rasymoterapija.lt" target="_blank"  class="item item-terapija">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 380eu
                    </div>
                    <div class="item__name">
                        rasymoterapija.lt
                    </div>
                </a>
                <a href="https://www.beautyboutique.lt" target="_blank"  class="item item-beauty">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 520eu
                    </div>
                    <div class="item__name">
                        beautyboutique.lt
                    </div>
                </a>
            </div>

            <h2 class="portfolio__subtitle"><img :src="require('./../assets/img/icons/check.svg')" />Reprezentacinės svetainės</h2>
            <div class="portfolio__inner">
                <a href="https://emortakiuvalymas.lt/" target="_blank"  class="item item-ortakiai">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 450eu
                    </div>
                    <div class="item__name">
                        emortakiuvalymas.lt
                    </div>
                </a>
                <a href="https://www.babilonovartai.lt" target="_blank"  class="item">
                    <div class="item__mask"></div>
                    <div class="item__price">
                       Kaina: 400eu
                    </div>
                    <div class="item__name">
                        babilonovartai.lt
                    </div>
                </a>
                <a href="https://lubusistemos.lt" target="_blank"  class="item item-lubos">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 300eu
                    </div>
                    <div class="item__name">
                        lubusistemos.lt
                    </div>
                </a>
                <a href="https://betonavimaspanevezyje.lt" target="_blank"  class="item item-betonavimas">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 300eu
                    </div>
                    <div class="item__name">
                        betonavimaspanevezyje.lt
                    </div>
                </a>
                <a href="http://inovatoriuslenis.lt" target="_blank"  class="item item-slenis">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 320eu
                    </div>
                    <div class="item__name">
                        inovatoriuslenis.lt
                    </div>
                </a>
                <a href="https://www.ekodalys.lt" target="_blank"  class="item item-ekodalys">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 300eu
                    </div>
                    <div class="item__name">
                        ekodalys.lt
                    </div>
                </a>
            </div>

            <h2 class="portfolio__subtitle"><img :src="require('./../assets/img/icons/check.svg')" />Vieno puslapio svetainės</h2>
            <div class="portfolio__inner">
                <!--                <a href="https://londonthamescleaning.co.uk" target="_blank"  class="item item-london">-->
                <!--                    <div class="item__mask"></div>-->
                <!--                    <div class="item__price">-->
                <!--                        Kaina: 280eu-->
                <!--                    </div>-->
                <!--                    <div class="item__name">-->
                <!--                        londonthamescleaning.co.uk-->
                <!--                    </div>-->
                <!--                </a>-->
                <a href="http://www.lanersa.lt" target="_blank"  class="item item-lanersa">
                    <div class="item__mask"></div>
                    <div class="item__price">
                        Kaina: 350eu
                    </div>
                    <div class="item__name">
                        lanersa.lt
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Portfolio',
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
