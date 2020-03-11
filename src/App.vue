<template>
  <div id="app">
   <audio  id=song src='http://localhost:8000/dist/song.mp3' type="audio/mpeg" autoplay loop></audio>
   <div>
     <router-view></router-view>
   </div> 
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

