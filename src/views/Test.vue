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
                <div class="overline ml-4 mb-1">General Education GWA</div>
                <v-text-field
                  v-model="genEd"
                  type="number"
                  label="General Education GWA"
                  hint="Enter the GWA of your general eduaction subjects 4th year"
                  outlined rounded
                ></v-text-field>
              </v-flex>

              <v-flex xs10 mb-4>
                <div class="overline ml-4 mb-1">Professional Education GWA</div>
                <v-text-field
                  v-model="profEd"
                  type="number"
                  label="Professional Education GWA"
                  hint="Enter the GWA of your professional eduaction subjects 4th year"
                  outlined rounded
                ></v-text-field>
              </v-flex>

              <v-flex xs10 mb-4>
                <div class="overline ml-4 mb-1">Major Education GWA</div>
                <v-text-field
                  v-model="MEed"
                  type="number"
                  label="Major Education GWA"
                  hint="Enter the GWA of your major eduaction subjects 4th year"
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
                      <v-radio label="False" value="20"></v-radio>
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
                      <v-radio label="False" value="20"></v-radio>
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

              <v-flex xs10 mt-4>
                <div class="overline ml-4 mb-1">Name of University</div>
                <v-text-field
                  v-model="university"
                  label="Name of University"
                  hint="Enter the name of the university you have graduated"
                  outlined rounded
                ></v-text-field>
              </v-flex>

              <v-flex xs10 mt-4>
                <div class="overline ml-4 mb-1">Undergraduate Course </div>
                <v-text-field
                  v-model="course"
                  label="Undegraduate Course"
                  hint="Enter the undergraduate course you have finished"
                  outlined rounded
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <div class="overline ml-4 mb-1">National Passing Score</div>
                <v-text-field
                  v-model="nationalPassingScore"
                  type="number"
                  label="National Passing Score of your licensure Exam"
                  hint="Enter the minimum score needed to be considered as a passer of your licensure exam"
                  outlined rounded
                ></v-text-field>
              </v-flex>

              <v-flex xs10>
                <v-layout wrap>
                  <v-flex xs12>
                    <div class="secondary--text subtitle-1 font-weight-bold">
                      Describe your confidence level of passing before taking the licensure exam
                      <span class="font-italic subtitle-2 grey--text">(1 - Not Confident at All, 5 - Highly Confident)</span>
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
    mounted() {
      this.submitAnswers();
    },
    data() {
      return {
        genEd: null,
        profEd: null,
        MEed: null,
        reviewCenter: null,
        selfReview: null,
        university: null,
        course: null,
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
        if(!this.genEd) {
          this.showAlertDialog("Warning!", "Please indicate your General Education GWA");
          this.loading = false;
          return;
        }
        else if(!this.profEd) {
          this.showAlertDialog("Warning!", "Please indicate your Professional Education GWA");
          this.loading = false;
          return;
        }
        else if(!this.MEed) {
          this.showAlertDialog("Warning!", "Please indicate your Major Education GWA");
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
        else if(!this.university || this.university === '') {
          this.showAlertDialog("Warning!", "Please indicate your University Name");
          this.loading = false;
          return;
        }
        else if(!this.course || this.course === '') {
          this.showAlertDialog("Warning!", "Please indicate your Undergraduate Course");
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
        /*
        let GenEd = this.genEd;
        let ProfEd = this.profEd;
        let MEd = this.MEed;
        let ReviewC = this.reviewCenter;
        let SelfReview = this.selfReview;
        let university = this.university;
        let course = this.course;
        let NatPassScore = this.nationalPassingScore;
        let Confidence = this.confidence;
        */
       let probability;
       //uncomment the variable declarations to use the variables

       /*
       
       
       
       
       insert your calculations here
       
       
       
       
       
       */

       //cant touch this, kasi ito yung magpapasa ng sagot na probability papunta sa next page na results
       //patanggal na lang nung 50 sa probability hehehehehe

        probability= 50;
        this.$router.push({
          name: 'results',
          params: {
            probability: probability,
          }
        });
      }
    },
  }
</script>

<style scoped>

</style>
