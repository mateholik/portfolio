<template>
    <section>
        <div class="calc">
            <h1>
                <img :src="require('./../assets/img/icons/euro.svg')" />
                Kainos skaičiuoklė
            </h1>
            <div class="calc__price calc__price-top">Apytikslė kaina <span class="calc__price-number">{{totalPrice}}</span> eu.</div>
            <div class="calc__table" ref="answers">
               <div v-for="(column, i) in row" :key="i">
                   <div class="calc__row">
                       <div class="calc__column calc__column--main">
                           {{column.question}}
                       </div>
                       <div v-for="(item, index) in column.answers" @click="calculate(item, column)" class="calc__column" :key="index" :class="{active: item.active}">
                           {{item.name}}
                       </div>
                   </div>
                   <div v-if="i !== 3" class="calc__plus">+</div>
               </div>
            </div>
            <div class="calc__price">Apytikslė kaina <span class="calc__price-number">{{totalPrice}}</span> eu.</div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'calc',
        data() {
            return {
               row: [
                   {
                       question: 'Svetainė',
                       answers: [
                           {name: 'Vieno puslapio', price: 150},
                           {name: 'Reprezentacinė', price: 240},
                           {name: 'E. parduotuvė', price: 240},
                       ]
                    },
                   {
                       question: 'Reikia logotipo?',
                       answers: [
                           {name: 'Ne', price: 0},
                           {name: 'Paprastas', price: 40},
                           {name: 'Unikalus', price: 100}
                       ]
                   },
                   {
                       question: 'Reikia Dizaino?',
                       answers: [
                           {name: 'Ne', price: 0},
                           {name: 'Paprastas', price: 40},
                           {name: 'Unikalus', price: 200}
                       ]
                   },
                   {
                       question: 'Nori keist turinį?',
                       answers: [
                           {name: 'Ne',  price: 0},
                           {name: 'Wordpress', price: 90},
                           {name: 'E. Kita platforma', price: 150}
                       ]
                   }],
                totalPrice: 0

            }
        },
        mounted () {
            this.showSteps()
        },
        methods: {
            calculate(item, column) {
                for(let i = 0; column.answers.length > i; i++) {
                    if (column.answers[i].active === true) {
                        column.answers[i].active = false
                        this.totalPrice = this.totalPrice - column.answers[i].price
                    }
                }
                if(!item.active || item.active === false) {
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
                    timer += 500
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
