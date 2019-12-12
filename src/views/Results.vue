<template>
    <div>
        <v-overlay :value="true" z-index="0">
            <v-img
                :src="'./static/img/mainBGer.jpg'"
                gradient="90deg, rgb(252, 255, 158, 0.4) 0%, rgb(198, 119, 0, 0.1) 100%"
                width="100vw"
            >
            </v-img>
        </v-overlay>

        <v-layout align-center justify-start mt-6>
            <v-flex xs6>
                <div class="display-2 secondary--text font-weight-bold">THANK YOU FOR WAITING!</div>
            </v-flex>
        </v-layout>

        <v-layout align-center justify-start mt-6>
            <v-flex xs6 offset-xs1>
                <v-card class="pa-4 elevation-12 primary" dark>
                    <v-card-text>
                        <v-layout wrap align-center justify-center>
                            <v-flex xs12>
                                <div class="title text-center font-weight-bold white--text">YOUR CHANCE OF PASSING IS:</div>
                            </v-flex>
                            <v-flex xs5 mt-4>
                                <v-progress-circular size="300" :value="probability" color="accent" width="20" class="dark">
                                    <div class="display-4"> 
                                        {{ probability }}% 
                                    </div>
                                </v-progress-circular>
                            </v-flex>
                        </v-layout>

                        <v-layout align-center justify-center mt-6>
                            <v-flex xs12 class="display-1 lighten-2 accent--text ">
                                <div class="font-weight-bold text-center" v-if="probability > 50">CONGRATULATIONS! Isa kang alamat!</div>
                                <div class="font-weight-bold text-center" v-else-if="probability == 50">CONGRATULATIONS! May Pag-Asa Pa Yan!</div>
                                <div class="font-weight-bold text-center" v-else-if="probability < 50">CONGRATULATIONS! Kailangan mo pang magsigpag ng maigi</div>
                                <div class="font-weight-bold text-center" v-else>CONGRATULATIONS! Kasi wala kaming na-compute sa mga sagot mo.</div>
                            </v-flex>
                        </v-layout>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.probability = this.$route.params.probability;
        },
        data() {
            return {
                probability: 0,
            }
        },
    }
</script>

<style scoped>

</style>