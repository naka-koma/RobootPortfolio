<template>
  <div class="bg">
    <div class="overlap">
      <div class="container">
        <img alt="Roboot Logo" src="./assets/Roboot.png">
      </div>
      <transition>
        <div class="reveal">
          <about header="About"/>
        </div>
      </transition>
      <transition>
        <div class="reveal">
          <pv header="PV"/>
        </div>
      </transition>
      <transition>
        <div class="reveal">
          <tech header="Technology Introduction"/>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import about from './components/About.vue'
import pv from './components/PromotionVideo.vue'
import tech from './components/TechnologyIntroduction.vue'

export default {
  name: 'App',
  components: {
    about,
    pv,
    tech
  },

  created() {
    this.handleScroll();
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {      
      const reveals = document.querySelectorAll(".reveal");
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elTop = reveals[i].getBoundingClientRect().top;
        const elVisible = 150;
        if (elTop < windowHeight - elVisible) {
          reveals[i].classList.add("active");
        }
        else{
          reveals[i].classList.remove("active");
        }
      }
    },
  },
}
</script>

<style>
body {
  background-color: #000000;
}

@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Kiwi+Maru:wght@500&display=swap');
#app {
  font-family: 'DotGothic16', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: x-large;
  color: #51c3c3;
}

h1{
  color: #ffffff;
  font-family: 'Kiwi Maru', serif;
}

h2{
  font-family: 'Kiwi Maru', serif;
}
</style>

<style scoped>
.reveal{
  position: relative;
  opacity: 0;
  transition: 2s all ease;
}
.reveal.active{
  transform: translateY(0);
  opacity: 1;
}

div.container {
  display: flex;
  align-items: center;
  justify-content: center;
}

div.container img {
  max-width: 100%;
} 

.bg{
  width: 100%;
  height: 100%;
  left: 0px;
  top: 0px;
  background-image: url('@/assets/ingame_2.png');
  background-position: center;
  background-size: cover;
  text-align: center;
}

.overlap{
  background-color: rgba(0, 0, 0, 0.8);
}
</style>
