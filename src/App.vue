<template>
  <div id="app">
    <audio id=song src='http://localhost:8000/dist/song/song.mp3' type="audio/mpeg" autoplay loop></audio>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// window.onload = function() {
//   var context = new AudioContext();
// };
export default {
  name: "app"
};
</script>

