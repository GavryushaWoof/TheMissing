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

