<template>
  <div id="app">
    <audioControl />
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import audioControl from "./components/AudioControl.vue";
export default {
  name: "app",
  components: {
    audioControl
  }
};
</script>
<style>
body {
  font-family: cursive;
  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: 100% 100%;
  user-select: none;
}
</style>

