<template>
  <div>
    <v-layout align-center justify-center mt-6>
      <v-flex xs6>
        <div class="display-2 text-center font-weight-bold primary--text">Welcome to the "Chance of Passing Calculator"</div>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center mt-6>
      <v-flex xs6>
        <v-card elevation-12>
          <v-card-title class="accent darken white--text">
            <div class="title text-center">Test Form</div>
          </v-card-title>

          <v-card-text class="mt-5">
            <v-layout wrap align-center justify-center>
              <v-flex xs12 class="text-center">
                <div class="font-weight-bold subtitle-1">INSTRUCTIONS:</div>
                <div class="font-italic subtitle-2">Kindly fill out each field</div>
              </v-flex>
            </v-layout>

            <v-layout wrap align-center justify-center mt-6>
              <v-flex xs12 mb-4>
                <v-divider class="mb-4"></v-divider>
                <div class="primary--text title font-weight-bold">Academic Grades</div>
              </v-flex>

              <v-flex xs10 mb-4>
                <div class="overline ml-4 mb-1">General Weighted Average during 4th Year</div>
                <v-text-field
                  v-model="GWA"
                  type="number"
                  label="General Weighted Average"
                  hint="Enter your GWA during 4th year"
                  outlined rounded
                ></v-text-field>
              </v-flex>

              <v-flex xs10 mb-4>
                <div class="overline ml-4 mb-1">Pre-Board Mock Exams Score</div>
                <v-text-field
                  v-model="preBoard"
                  type="number"
                  label="Pre Board Mock Exams Score"
                  hint="Enter your Pre-Board Mock Exams Scores"
                  outlined rounded
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-divider class="mb-4"></v-divider>
              </v-flex>
            </v-layout>

            <v-layout wrap align-center justify-center>
              <v-flex xs12>
                <div class="primary--text font-weight-bold title">Review Styles</div>
              </v-flex>

              <v-flex xs11 mt-5>
                <v-layout wrap>
                  <v-flex xs12>
                    <div class="secondary--text subtitle-1 font-weight-bold">Did you enroll yourself to a Review Center?</div>
                  </v-flex>
                  <v-flex xs12>
                    <v-radio-group v-model="reviewCenter" row>
                      <v-radio label="True" value="100"></v-radio>
                      <v-radio label="False" value="50"></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs11 mb-4>
                <v-layout wrap>
                  <v-flex xs12>
                    <div class="secondary--text subtitle-1 font-weight-bold">Are you also doing a "Self Review"?</div>
                  </v-flex>
                  <v-flex xs12>
                    <v-radio-group v-model="selfReview" row>
                      <v-radio label="True" value="100"></v-radio>
                      <v-radio label="False" value="50"></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12>
                <v-divider class="mb-4"></v-divider>
              </v-flex>
            </v-layout>

            <v-layout wrap align-center justify-center>
              <v-flex xs12>
                <div class="primary--text font-weight-bold title">Self-Assessment</div>
              </v-flex>

              <v-flex xs10>
                <div class="overline ml-4 mb-1">National Passing Score</div>
                <v-text-field
                  v-model="nationalPassingScore"
                  type="number"
                  label="National Passing Score of your licensure Exam"
                  hint="Enter the minimum score (in percentage) needed to be considered as a passer of your licensure exam"
                  outlined rounded
                ></v-text-field>
              </v-flex>

              <v-flex xs10 mt-6>
                <v-layout wrap>
                  <v-flex xs12>
                    <div class="secondary--text subtitle-1 font-weight-bold">
                      Describe your confidence level of passing before taking the licensure exam
                      <div class="font-italic subtitle-2 grey--text">(1 - Not Confident at All, 5 - Highly Confident)</div>
                    </div>
                  </v-flex>
                  <v-flex xs12>
                    <v-radio-group v-model="confidence" row>
                      <v-radio label="1" value="1"></v-radio>
                      <v-radio label="2" value="2" class="ml-2"></v-radio>
                      <v-radio label="3" value="3" class="ml-2"></v-radio>
                      <v-radio label="4" value="4" class="ml-2"></v-radio>
                      <v-radio label="5" value="5" class="ml-2"></v-radio>
                    </v-radio-group>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-flex xs12><v-divider class="mb-4"></v-divider></v-flex>

              <v-flex xs5>
                <v-btn
                  @click="validateAnswers"
                  :loading="loading"
                  :disabled="btnDisable"
                  color="secondary"
                  x-large
                  rounded
                  block
                >
                  SUBMIT ANSWERS
                  <v-icon right class="ml-4">fa-user-check</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
    <v-overlay :value="loading">
      <v-progress-circular indeterminate color="accent" size="250">
         <div class="white--text text-center title">Please wait as we check your answers...</div>
      </v-progress-circular>
    </v-overlay>
    
    <v-dialog 
      v-model="alertDialog"
      width="350px"
      height="400px"  
    >
      <v-card>
        <v-card-title class="orange white--text">
          {{ alertTitle }}
        </v-card-title>
        <v-card-text class="mt-4 subtitle-1 text-center">
          {{ alertMessage }}
        </v-card-text>
        <v-card-actions>
          <v-btn block depressed color="red white--text" @click="alertDialog = false; loading = false;">
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        GWA: null,
        preBoard: null,
        reviewCenter: null,
        selfReview: null,
        nationalPassingScore: null,
        confidence: null,
        loading: false,
        btnDisable: false,
        alertDialog: false,
        alertTitle: "",
        alertMessage: "",
      }
    },

    methods: {
      showAlertDialog(title, message) {
        this.alertDialog = true;
        this.alertTitle = title
        this.alertMessage = message;
      },
      validateAnswers() {
        this.loading = true;
        if(!this.GWA) {
          this.showAlertDialog("Warning!", "Please indicate your GWA");
          this.loading = false;
          return;
        }
        else if(!this.preBoard) {
          this.showAlertDialog("Warning!", "Please indicate your Pre-Board Mock Exams Scores");
          this.loading = false;
          return;
        }
        else if(this.reviewCenter === null) {
          this.showAlertDialog("Warning!", "Please choose an answer to 'Did you enroll yourself to a Review Center?");
          this.loading = false;
          return;
        }
        else if(this.selfReview === null) {
          this.showAlertDialog("Warning!", "Please choose an answer to 'Are you also doing a Self Review?");
          this.loading = false;
          return;
        }
        else if(!this.nationalPassingScore) {
          this.showAlertDialog("Warning!", "Please indicate the National Passing Score of your Licensure Exam");
          this.loading = false;
          return;
        }
        else if(!this.confidence) {
          this.showAlertDialog("Warning!", "Please choose an answer to your Confidence Level");
          this.loading = false;
          return;
        }

        this.submitAnswers();
      },

      submitAnswers() {
        //this is where the answer will be processed
        
        let GWA = parseFloat(this.GWA);
        let preBoard = parseFloat(this.preBoard);
        let ReviewC = parseInt(this.reviewCenter);
        let SelfReview = parseInt(this.selfReview);
        let NatPassScore = parseFloat(this.nationalPassingScore);
        ///let Confidence = parseInt(this.confidence);
        
        let passingScore;
        if(NatPassScore <= 100 && NatPassScore >= 90) {
          passingScore = 10;
        } 
        else if(NatPassScore >= 90 && NatPassScore <= 100) {
          passingScore = 9;
        }
        else if(NatPassScore >= 80 && NatPassScore <= 90) {
          passingScore = 8;
        }
        else if(NatPassScore >= 70 && NatPassScore <= 80) {
          passingScore = 7;
        }
        else if(NatPassScore >= 60 && NatPassScore >= 70) {
          passingScore = 6;
        }
        else if(NatPassScore >= 50 && NatPassScore <= 60) {
          passingScore = 5;
        }
        else if(NatPassScore >= 40 && NatPassScore <= 50) {
          passingScore = 4;
        }
        else if(NatPassScore >= 30 && NatPassScore <= 40) {
          passingScore = 3;
        }
        else if(NatPassScore >= 20 && NatPassScore <= 30) {
          passingScore = 2;
        }
        else if(NatPassScore >= 10 && NatPassScore <= 20) {
          passingScore = 1;
        }

        let gwa;
        if(GWA >= 1 && GWA <= 1.25) {
          gwa = 50;
        }
        else if(GWA >= 1.26 && GWA <= 1.50) {
          gwa = 45;
        }
        else if(GWA >= 1.51 && GWA <= 1.75) {
          gwa = 40;
        }
        else if(GWA >= 1.76 && GWA <= 2) {
          gwa = 35;
        }
        else if(GWA >= 2.01 && GWA <= 2.25) {
          gwa = 30;
        }
        else if(GWA >= 2.26 && GWA <= 2.50) {
          gwa = 25;
        }
        else if(GWA >= 2.51 && GWA <= 2.75) {
          gwa = 20;
        }
        else if(GWA >= 2.76 && GWA <= 3.00) {
          gwa = 15;
        }
        else if(GWA >= 3.01 && GWA <= 4.95) {
          gwa = 10;
        }
        else gwa = 5;

        let probability;

        GWA = (GWA * 0.30);
        ReviewC = (ReviewC * 0.15);
        SelfReview = (SelfReview * 0.10);
        passingScore = (passingScore * 0.20);
        preBoard = (preBoard * 0.25); 
       
        probability = (gwa * 2 * 0.3 + ReviewC + SelfReview + passingScore + preBoard);

       //cant touch this, kasi ito yung magpapasa ng sagot na probability papunta sa next page na results

        this.$router.push({
          name: 'results',
          params: {
            probability: probability.toFixed(2),
          }
        });
      }
    },
  }
</script>

<style scoped>

</style>
