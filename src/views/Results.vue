<template>
    <div>
        <v-layout align-center justify-center mt-6>
            <v-flex xs6>
                <div class="display-2 primary--text font-weight-bold">THANK YOU FOR WAITING!</div>
            </v-flex>
        </v-layout>

        <v-layout align-center justify-center mt-6>
            <v-flex xs8>
                <v-card class="pa-4">
                    <v-card-text>
                        <v-layout wrap align-center justify-center>
                            <v-flex xs12>
                                <div class="title text-center secondary--text">YOUR CHANCE OF PASSING IS:</div>
                            </v-flex>
                            <v-flex xs4 mt-4>
                                <v-progress-circular size="300" :value="probability" color="primary">
                                    <div class="display-4"> {{ probability }}% </div>
                                </v-progress-circular>
                            </v-flex>
                        </v-layout>

                        <v-layout align-center justify-center mt-6>
                            <v-flex xs6 class="display-1">
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