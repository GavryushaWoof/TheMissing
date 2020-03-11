<template>
  <div id="app">
   <audio  id=song src='http://localhost:8000/dist/song.mp3' type="audio/mpeg" autoplay loop></audio>
   <transition name="bounce">
     <router-view></router-view>
   </transition>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style lang='css' scoped>
.bounce-enter-active {
  animation: bounce .5s;
}
.bounce-leave-active {
  animation: bounce .5s reverse;
}
@keyframes bounce{
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>