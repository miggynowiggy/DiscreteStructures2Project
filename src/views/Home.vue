<template>
  <div>
    <div id="imgHolder">
      <v-img
        :src="'./static/img/anotherBG.jpg'"
        gradient="90deg, rgb(252, 255, 158, 0.4) 0%, rgb(198, 119, 0, 0.1) 100%"
      ></v-img>
    </div>
    
    <div id="text">Prepping Up</div>
    <div id="text2">for the upcoming</div>
    <div id="text3" class="secondary--text">Board Exams?</div>
    
    <div id="card">
      <v-card
        height="250px"
        width="250px"
        elevation-6
        hover
      >
        <v-card-text>
          <v-layout align-center justify-center>
            <v-flex xs12>
              <div class="display-1 text-center font-weight-bold font-italic secondary--text">Review is not enough...</div>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center mt-3>
            <v-flex xs12>
              <div class="subtitle-1 text-center">It is also important to determine your chances of passing the exams.</div>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center mt-2>
            <v-flex xs6>
              <v-avatar
                size="100"
                color="secondary"
                class="elevation-3"
              >
                <v-icon size="50" color="white">fa-thumbs-up</v-icon>
              </v-avatar>
              
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </div>

    <div id="card2">
      <v-card
        height="290px"
        width="350px"
        elevation-6
        hover
        shaped
      >
        <v-card-text>
          <v-layout align-center justify-center>
            <v-flex xs12>
              <div class="display-2 text-center font-weight-bold secondary--text">TAKE THE TEST NOW!</div>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center mt-6>
            <v-flex xs12>
              <div class="subtitle-1 text-center">
                and see your chances of passing your licensure exams
              </div>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center mt-6>
            <v-flex xs10>
              <v-btn
                block x-large
                color="primary"
                @click="$router.push('/test')"
              >
                TAKE ME TO THE TEST
                <v-icon size="20" right>fa-user-edit</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </div>

    <div id="card3">
      <v-card
        height="250px"
        width="250px"
        elevation-6
        hover
      >
        <v-card-text>
          <v-layout align-center justify-center>
            <v-flex xs12>
              <div class="display-1 text-center font-weight-bold font-italic secondary--text">Bucked up by researches...</div>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center mt-3>
            <v-flex xs12>
              <div class="body-1 text-center">Questions are based on collated factors that was gathered from various researches.</div>
            </v-flex>
          </v-layout>

          <v-layout align-center justify-center mt-2>
            <v-flex xs6>
              <v-avatar
                size="100"
                color="secondary"
                class="elevation-3"
              >
                <v-icon class="mt-1" size="50" color="white">fa-project-diagram</v-icon>
              </v-avatar>
              
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </div>

    <v-layout id="footer" align-center justify-center>
      <v-flex xs12>
        <div class="subtitle-2 text-center font-italic">
          &copy;2019 | Acibar, Adelante, Concepcion, Mendoza, Valonzo, Valeroso
        </div>
        <div class="subtitle-2 text-center font-italic">
          BS Computer Science, Pamantasan ng Lungsod ng Maynila
        </div>
      </v-flex>
    </v-layout>

  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>

  #BG {
    background-image: './static/img/anotherBG.jpg';
  }

  #text{
    position: absolute;
    top: 25px;
    left: 700px;

    font-family: 'Montserrat';
    font-size: 45pt;
    font-weight: lighter;

    color: #696969;
  }

  #text2{
    position: absolute;
    top: 95px;
    left: 750px;

    font-family: 'Montserrat';
    font-size: 48pt;

    color: #696969;
  }

  #text3{
    position: absolute;
    top: 165px;
    left: 800px;
    width: 1000px;

    font-family: 'Montserrat';
    font-size: 55pt;
    font-weight: 800;

    color: #CF5C36;

    /* text-shadow: 5px 5px 10px #666666; */
  }

  #card {
    position: absolute;
    top: 450px;
    left: 100px;
  }

  #card2 {
    position: absolute;
    top: 450px;
    left: 490px;
  }

  #card3 {
    position: absolute;
    top: 450px;
    left: 980px;
  }

  #footer {
    position: absolute;
    top: 850px;
    left: 440px
  }
</style>