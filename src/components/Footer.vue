<template>
    <p class="footer" :class="this.where === 'bottom' ? 'footer-bottom' : ''">
        © {{year}} vladis.lt
    </p>
</template>

<script>
    export default {
        name: 'Footer',
        props: {
            where: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                year: ''
            }
        },
        mounted() {
            this.thisYear()
        },
        methods: {
            thisYear () {
                var d = new Date();
                var n = d.getFullYear();
                this.year = n
            }
        }
    }
</script>

<style lang="scss" scoped>
</style>
