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
  name: "app",
  data() {
    return {
      nameGame: "The Missing"
    };
  }
};
</script>

<style lang='css' scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);
body {
  font-family: cursive;
  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: 100% 100%;
  background-image: url("http://localhost:8000/dist/background/start1.png");
  user-select: none;
}
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
    text-shadow: 10px 10px 3px rgba(0,0,0,0.15);
  }
  65% {
    transform: translate(0, 15px) rotateY(20deg) rotateX(10deg);
    text-shadow: -10px -10px 3px rgba(0,0,0,0.15);
  }
  to {
    transform: translate(0, 0px) rotateY(-22deg);
    text-shadow: 10px 10px 3px rgba(0,0,0,0.15);
  }
}
</style>