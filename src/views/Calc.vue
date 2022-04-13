<template>
  <section>
    <div class="calc">
      <h1>
        <img :src="require('./../assets/img/icons/euro.svg')" />
        Kainos skaičiuoklė
      </h1>
      <div class="calc__price calc__price-top">
        Apytikslė kaina
        <span class="calc__price-number">
          <animated-number
            :value="totalPrice"
            :duration="300"
            :formatValue="formatToPrice"
          />
        </span>
        eu.
      </div>

      <div class="mob-text">
        Trumpą kiekvieno punkto paaiškinimą rasite
        <strong>po</strong> skaičiuokle
      </div>

      <div class="calc__table" ref="answers">
        <div v-for="(column, i) in row" :key="i" style="flex: 1;">
          <div class="calc__row">
            <div class="calc__column calc__column--main">
              {{ column.question }}
            </div>
            <div
              v-for="(item, index) in column.answers"
              @click="calculate(item, column)"
              class="calc__column"
              :key="index"
              :class="{ active: item.active }"
            >
              {{ item.name }}
            </div>
          </div>
          <div v-if="i !== 3" class="calc__plus">+</div>
        </div>
      </div>
      <div class="calc__price">
        Apytikslė kaina
        <span class="calc__price-number">
          <animated-number
            :value="totalPrice"
            :duration="300"
            :formatValue="formatToPrice"
          />
        </span>
        eu.
      </div>
      <br />
      <transition name="hint">
        <div class="hint" v-if="hintLabel.length > 0" :key="hint">
          <h3>
            <img :src="require('./../assets/img/icons/question.svg')" />{{
              hintLabel
            }}
          </h3>
          <p>{{ hint }}</p>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
  name: "calc",
  components: {
    AnimatedNumber,
  },
  data() {
    return {
      hint: "",
      hintLabel: "Pasirinkto punkto paaiškinimas",
      totalPrice: 0,
      row: [
        {
          question: "Svetainė",
          answers: [
            {
              name: "Vieno puslapio",
              price: 190,
              hint:
                "Vieno puslapio svetainė – skirta trumpam jūsų įmonės pristatymui bei papildomai informacijai apie paslaugas arba produktus viename puslapyje.",
            },
            {
              name: "Reprezentacinė",
              price: 280,
              hint:
                "Reprezentacinė svetainė – skirta jūsų verslo pristatymui. Dažniausiai sudaroma iš 5 puslapių.",
            },
            {
              name: "E. parduotuvė",
              price: 280,
              hint:
                "Elektroninė parduotuvė – talpina tiek informaciją apie jūsų veiklą, tiek suteikia galimybę klientams greitai ir patogiai pirkti internetu. Klientams yra sudaroma galimybė iš karto atsiskaityti už paslaugas naudojantis el. bankininkyste arba mokėjimo kortele (plačiau skaitykite D.U.K.).",
            },
          ],
        },
        {
          question: "Logotipas",
          answers: [
            {
              name: "Nereikia",
              price: 0,
              hint:
                "Nereikia – logotipas nebus naudojamas internetinėje svetainėje arba pateiksite savo turimą logotipo failą .png arba .svg formatu.",
            },
            {
              name: "Paprastas",
              price: 30,
              hint:
                "Paprastas – tai neunikalus logotipas, sukurtas logotipų generavimo priemonėmis pagal jūsų veiklos raktažodžius.",
            },
            {
              name: "Unikalus",
              price: 100,
              hint:
                "Unikalus – užsisakius šią paslaugą, jums logotipą sukurs dizaineris.",
            },
          ],
        },
        {
          question: "Dizainas",
          answers: [
            {
              name: "Nereikia",
              price: 20,
              hint:
                "Nereikia – toks puslapis nebus labai interaktyvus, tekstas ir paveikslėliai bus išdėlioti standartiškai, bus tik keli grafiniai elementai.",
            },
            {
              name: "Paprastas",
              price: 100,
              hint:
                "Paprastas – turinys pateikiamas vizualiau, siūlomas įdomesnis turinio išdėstymas, daugiau grafinių galimybių.",
            },
            {
              name: "Unikalus",
              price: 200,
              hint:
                "Unikalus – tokio puslapio dizainą jums paruoš dizaineris. Jis bus individualus, išskirtinis. Grafiniai elementai pritaikyti prie jūsų kuriamo turinio bei poreikių.",
            },
          ],
        },
        {
          question: "Turinio redagavimas",
          answers: [
            {
              name: "Nereikia",
              price: 0,
              hint:
                "Statinis – svetainės turinys nebus dažnai ar iš viso keičiamas. Statinis svetainės turinys dažniausiai netinka internetinėms parduotuvėms, kai patogus informacijos atnaujinimas yra itin aktuali funkcija.",
            },
            {
              name: "Wordpress",
              price: 120,
              hint:
                "Wordpress – turbūt viena populiariausių ir lengviausiai valdomų turinio sistemų. Ja patogu naudotis ir ji nereikalauja itin specifinių žinių.",
            },
            {
              name: "Kita platforma",
              price: 150,
              hint:
                "Kita platforma – rinkitės šį variantą, jeigu esate pripratę prie savo turimos platformos arba norite naudotis bet kokia kita platforma.",
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.showSteps();
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    },
    calculate(item, column) {
      for (let i = 0; column.answers.length > i; i++) {
        if (column.answers[i].active === true) {
          column.answers[i].active = false;
          this.totalPrice = this.totalPrice - column.answers[i].price;
        }
      }
      if (!item.active || item.active === false) {
        item.active = true;
        this.totalPrice = this.totalPrice + item.price;
        if (item.price === 0) {
          this.$forceUpdate();
        }
      } else {
        item.active = false;
        this.totalPrice = this.totalPrice - item.price;
        if (item.price === 0) {
          this.$forceUpdate();
        }
      }
      //show hint
      /* eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
      console.log(item);
      console.log(column);
      this.hintLabel = column.question + " -> " + item.name;
      this.hint = item.hint;
    },
    // showSteps() {
    //     setTimeout( () => {
    //         this.$refs.answers.firstChild.firstChild.nextElementSibling.click()
    //     }, 1000)
    //     setTimeout( () => {
    //         this.$refs.answers.firstChild.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.click()
    //     }, 1500)
    //     setTimeout( () => {
    //         this.$refs.answers.firstChild.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.click()
    //     }, 2000)
    //     setTimeout( () => {
    //         this.$refs.answers.firstChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nextElementSibling.nextElementSibling.click()
    //     }, 2500)
    // }
    showSteps() {
      let timer = 1000;
      for (let i = 0; i < this.row.length; i++) {
        setTimeout(() => {
          this.row[i].answers[i % 2 === 0 ? 0 : 1].active = true;
          this.totalPrice += this.row[i].answers[i % 2 === 0 ? 0 : 1].price;
          this.$forceUpdate();
        }, timer);
        timer += 500;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
