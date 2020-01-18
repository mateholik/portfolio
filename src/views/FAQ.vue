<template>
    <section>
        <div class="faq">
            <div class="faq__header">
                <h1>Kiek kainuoja sukurti svetainę?</h1>
                <p>Šį klausimą man užduoda kiekvienas dėl svetainės parašęs žmogus. Nenuostabu, kad šis klausimas yra pats pirmas, aktualiausias ir daug ką lemiantis. Žinant tikslią kainą, lengviau galima pasverti savo galimybes, planuoti ir apsispręsti. Visgi, klausti programuotojo 'kiek kainuoja sukurti svetainę?' yra tas pats, kas atėjus į automobilių saloną paklausti 'kiek kainuoja automobilis?' Tam, kad suprastum, kaip atrodo kokybiškas ir patrauklus tinklalapis bei sužinotum atsakymus į dažniausiai klientų užduodamus klausimus, padariau trumpą atmintinę. Išnagrinėjus šią informaciją, tiksliai sužinosi kokios svetainės reikia būtent Tau bei kiek kainuos ją sukurti.</p>
            </div>
            <h1><img :src="require('./../assets/img/icons/question.svg')" />D.U.K.</h1>
            <div class="faq__inner">


                <div class="item" v-for="(item, i) in faq" :key="i">
                    <h2 v-on:click="toggle(item, $event)" :class="{open : item.open}" class="item__header">
                        <span>
                          <img :src="require('./../assets/img/icons/' + item.icon +'')" />
                            {{item.header}}
                        </span>
                        <img :class="{rotate: item.open}" class="item__header-rot" :src="require('./../assets/img/icons/arrow2.svg')" />
                    </h2>
                    <transition name="faq-animation"  enter-active-class="animated fadeInLeft"
                                leave-active-class="animated fadeOutLeft">
                        <p v-if="item.open" v-html="item.content" class="item__content"></p>
                    </transition>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'faq',
        data() {
            return {
                faq: [
                    {
                        header: 'Kokios svetainės man reikia?',
                        icon: 'at.svg',
                        content: `<span class="medium">Reprezentacinė svetainė</span> – išsamiai pristato Tavo verslą internete. Dažniausiai pasitaikanti svetainės struktūra: įmonės informacija, paslaugų sąrašas su išsamiu aprašymu, paslaugų kainininkas, atlikti darbai (foto galerija), kontaktinė informacija. Dažniausiai svetainę sudaro 5 puslapiai.
                        <br>
                        <span class="medium">Vieno puslapio svetainė</span> – trumpai pristato pagrindinę Tavo įmonės/veiklos/įdėjos informaciją bei paslaugas arba produktus viename puslapyje.
                        <br>
                        <span class="medium">Elektroninė parduotuvė</span> – išsamiai pristato Tavo verslą, produkciją arba paslaugas internete. Suteikia galimybę greitai ir patogiai pirkti internetu. Klientas gali iškart atsiskaityti per savo elektroninę bankininkystę, banko kortele arba kitu nuotoliniu būdu. Nuotolinio atsiskaitymo galimybę teikia
                        <a target="_blank" href="https://www.paysera.lt/v2/lt-LT/index">paysera</a>, <a target="_blank" href="https://cardinity.lt/">cardinity</a>,
                        <a target="_blank" href="https://opay.lt/">opay</a> ir kiti, bankai teikia <a target="_blank" href="https://www.swedbank.lt/business/cash/banklink/start?language=LIT">banklink</a> paslaugą.`,
                        open: true
                    },
                    {
                        header: 'Kas yra domenas?',
                        icon: 'domain.svg',
                        content: `<span class="medium">Domenas</span> – Tavo svetainės pavadinimas/adresas (pvz.: www.manosvetaine.lt). Domenas turi būti trumpas, aiškus ir lengvai įsimintinas. Jei įmonės pavadinimas yra unikalus (pvz.: dviejų vardų junginys), tai didelė tikimybė, kad domenas bus laisvas ir galėsi jį nusipirkti. Kitu atveju tenka pasitelkti vaizduotę, nes visi standartiniai ar populiarūs žodžiai/žodžių junginiai yra jau išpirkti. Kaip išsirinkti/sugalvoti gerą domeną, plačiau gali paskaityti
                        <a target="_blank" href="https://www.seopaslaptys.lt/seo-optimizacija/kaip-pasirinkti-domena.php">čia</a>. Patikrinti, ar domenas laisvas gali
                        <a target="_blank" href="https://www.domenai.lt/">čia</a>. Keli variantai, kur galima nusipirkti domeną: <a target="_blank" href="https://www.serveriai.lt/">serveriai.lt</a>,
                        <a target="_blank" href="https://www.domenai.lt/">domenai.lt</a>, <a target="_blank" href="https://www.hostinger.lt/"> hostinger.lt</a>. Dažniausiai domenas perkamas metams, todėl po metų nepamiršk prasitęsti šios paslaugos. Kaina metams svyruoja nuo 4-12 eu.`,
                        open: false
                    },
                    {
                        header: 'Kas yra svetainės talpinimas?',
                        icon: 'house.svg',
                        content: `Neužtenka turėti tik gyvenamosios vietos adresą (domeną), reikia turėti ir pačią vietą <span class="medium">(talpinimą serveryje)</span>, kur galima statyti namą (svetainę). Taigi, talpinimas serveryje ir yra vieta, kur gulės pati svetainė. Kaip ir domenas, talpinimas serveryje yra privalomas dalykas, tam kad turėtum svetainę. Štai keli variantai, kur galima talpinti svetainę:  <a href="https://www.serveriai.lt/">serveriai.lt</a>,
                        <a target="_blank" href="https://www.domenai.lt/">domenai.lt</a>, <a target="_blank" href="https://www.hostinger.lt/"> hostinger.lt</a>.`,
                        open: false
                    },
                    {
                        header: 'Kas yra WordPress?',
                        icon: 'wp.svg',
                        content: `Užduok sau klausimą: ar man užtenka vieną kartą sudėti visą norimą informacija (įmonės aprašymą, paslaugų/prekių aprašymus, kontaktus ir nuotraukas), ar aš noriu bet kada koreguoti turinį (trinti, keisti, pridėti informaciją, pridėti naujus puslapius)? Norint bet kada koreguoti turinį, svetainė turi būti padaryta 'ant turinio valdymo sistemos'. Pati populiariausia TVS skirta svetainėms yra <span class="medium">WordPress</span>. Būtent šią platformą ir naudoju beveik visoms savo sukurtoms svetainėms. Kodėl verta rinktis WordPress, rasi
                        <a target="_blank" href="https://www.youtube.com/watch?v=1QdQ-QCio9A">čia</a>. Kaip naudotis, rasi <a target="_blank" href="https://www.youtube.com/watch?v=bWTOftSg2Ek">čia</a>. Sukūręs Tau svetainę, parodysiu kaip naudotis WordPress. Redaguoti informaciją WordPress'e  yra paprasta ir subegės KIEKVIENAS. Jei kažkas neišeis, visada padėsiu.`,
                        open: false
                    },
                    {
                        header: 'Logotipas',
                        icon: 'apple.svg',
                        content: `<span class="medium">Logotipas</span> – svarbiausias įmonės identiteto elementas, kurio pagrindinis tikslas išsiskirti iš konkurentų ir kurti vartotojo sąmonėje įsimenantį įvaizdį. Jeigu neturi logotipo - ne bėda. Žinau kelis profesionalius grafikos dizainerius, kurie gali sukurti išskirtinį logotipą būtent Tavo įmonei ar įdėjai. Profesionalaus logotipo kaina rinkoje svyruoja nuo 150-400 eu. Ne visi nori tiek pinigų išleisti logotipui, ypač tik pradedant kurti verslą. Tokiu atveju pažįstu kelis studentus, kurie apsiimtu sukurti nesudėtingą, bet kokybišką ir unikalų logotipą už 30-70 eu. Abiem atvejais, gausi vektorinį logotipą, kas reiškia, kad galėsi jį panaudoti ne tik svetainėje, bet ir  vizitinėje kortelėje, atsispausdinti ant marškinėlių, mašinos ar bet kur kitur. Kokybė visada išliks ideali ir logotipas 'neišsipikseliuos'. `,
                        open: false
                    },
                    {
                        header: 'Dizainas',
                        icon: 'design.svg',
                        content: `Jeigu nori, kad svetainė būtų ne tik tvarkinga, bet ir iš karto patraukianti akį bei išskirtinė, Tau reikia svetainės dizaino. Išanalizavę Tavo veiklą ir poreikius, svetainių dizainus kuria grafikos dizaineriai. Kelis variantus kaip atrodo svetainių dizainai, gali pamatyti
                        <a target="_blank" href="https://onextrapixel.com/50-unique-and-inspiring-website-designs/">čia</a>. Dizaineris  parenka spalvas, šriftus, atstumus tarp elementų, jei reikia  nupiešia ikonas, iliustracijas. Tada sulygiuoja visą svetainės vaizdą tam, kad tiktų ir kompiuteriams, ir planšetėms, ir telefonams (kadangi visi šie įrenginiai turi skirtingą rezoliuciją ir ant kiekvieno iš jų svetainė atrodo kitaip). Turint dizainą, programuotojas paima padarytą paveiksliuką (dizainą) ir sukuria iš jo svetainę, už tai mokama papildoma kaina. Dizainas gali būti labai paprastas ir minimalistinis arba labai sudėtingas ir išsiskiriantis iš kitų svetainių, todėl dizaino kaina priklauso nuo Tavo poreikių. Šiuo metu kainos svyruoja nuo 100-2000 eu. Ne visi nori tiek pinigų išleisti dizainui, ypač tik pradedant kurti verslą. Internete yra pilna jau padarytų dizaino variantų, kurie jau yra 'užmauti' ant WordPress'o. Kelis nemokamus variantus gali rasti
                        <a target="_blank" href="https://athemes.com/collections/free-wordpress-themes/">čia</a>. Kelis mokamus variantus gali rasti
                        <a target="_blank" href="https://themeforest.net/category/wordpress?gclid=Cj0KCQjwuLPnBRDjARIsACDzGL3ew8Dp6UIpIkibfTZQo3pGg97jdiyG57BSRfLBXkKoFPJpcQ0gPBEaApqXEALw_wcB&referrer=search&sort=sales&utf8=%E2%9C%93&view=grid">čia</a>. <span class="medium">Apibendrinus</span>, perkant originalų dizainą iš dizainerio, svetainė bus unikali, išskirtinė ir greita. Perkant mokamą WordPress temą, svetainė bus pusiau unikali ir pusiau greita. Imant nemokamą temą, svetainė nebus labai unikali ir bus gana lėta.
                        <br>
                        Visi šie variantai yra priimtini ir veikiantis, rinktis Tau.`,
                        open: false
                    },
                    {
                        header: 'Lankytojų srautas',
                        icon: 'coin.svg',
                        content: `Neužtenka vien tik turėti svetainę, reikia, kad joje lankytųsi būtent ta tikslinė žmonių grupė, kuriai Tavo produktai ar paslaugos būtų įdomios ir aktualios. Dažniausiai lankytojų srauto valdymu užsiima šios srities specialistas. Jeigu Tau tai bus aktualu, galėsiu parekomenduoti tokį žmogų. Pagrindiniai būdai, <span class="medium">kaip pritraukti žmones į svetainę:</span>
                        <br>
                        <span class="medium"> SEO (Search Engine Optimization) </span>– tai optimizavimas paieškos sistemoms. Kai žmogus, suvedęs tam tikrą žodį ar frazę google paieškos sistemoje, iškart pamato Tavo svetainę - Tavo svetainės SEO yra puikiai suoptimizuotas. Vidinį svetainės SEO optimizavimą alieku aš. Plačiau apie tai, kas yra SEO ir kaip tai veikia, gali rasti
                        <a target="_blank" href="https://maistasreklamai.lt/kas-yra-seo/">čia</a>.
                        <br>
                        <span class="medium">Google AdWords </span>– tai Google internetinio reklamavimo programa, skirta tam, kad Tavo  svetainė būtų lengvai ir greitai surasta Google paieškoje. AdWords reklaminiai skelbimai yra rodomi kartu su kitais paieškos rezultatais, kai žmonės ieško prekių ar paslaugų. Plačiau apie tai gali paskaityti
                        <a target="_blank" href="https://seohelis.lt/blogas/adwords-reklama-1-pamoka-kas-tai-ir-kaip-tai-veikia/">čia</a>.
                        <br>
                        <span class="medium">Facebook reklama </span>- reklama Facebook tinkle, kurioje galėsi pasirinkti tikslinę žmonių grupę, kuriai reklamuosi savo svetainę. Plačiau
                        <a target="_blank" href="https://seohelis.lt/blogas/facebook-reklama-ka-reikia-zinoti/">čia</a>`,
                        open: false
                    }
                ]
            }
        },
        methods: {
            toggle (item, event) {
                item.open = !item.open;
                setTimeout(() => {
                    event.target.scrollIntoView({
                        behavior: 'smooth'
                    })
                }, 250)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
