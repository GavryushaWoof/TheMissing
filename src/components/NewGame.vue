<template>
  <div>
    <h1>{{ nameGame }}</h1>
    <router-link to="/room">
      <img src="http://localhost:8000/dist/play.png" alt="Play" />
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      nameGame: "The Missing"
    };
  },
  beforeCreate: function() {
    document.getElementsByTagName("body")[0].style.backgroundImage =
      'url("http://localhost:8000/dist/background/start1.png")';
  },
  created: function() {
    sessionStorage.clear();
  }
};
</script>

<style lang='css' scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
img {
  width: 300px;
}
div {
  text-align: center;
  margin: 0 auto;
}
h1 {
  text-align: center;
  font-size: 6.5em;
  color: #fff;
  letter-spacing: -7px;
  font-weight: 700;
  text-transform: uppercase;
  animation: floating 10s ease-out infinite;
  text-shadow: 0px 0px 5px #fff, 0px 0px 7px #fff;
}

@keyframes floating {
  from {
    transform: translate(0, 0px) rotateY(-22deg);
    text-shadow: 10px 10px 3px rgba(0, 0, 0, 0.15);
  }
  65% {
    transform: translate(0, 15px) rotateY(20deg) rotateX(10deg);
    text-shadow: -10px -10px 3px rgba(0, 0, 0, 0.15);
  }
  to {
    transform: translate(0, 0px) rotateY(-22deg);
    text-shadow: 10px 10px 3px rgba(0, 0, 0, 0.15);
  }
}
</style>