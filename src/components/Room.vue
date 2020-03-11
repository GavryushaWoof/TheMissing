<template>
<div>
    <comp :name='speaker' :text='text' :root='root' @click.native='nextText(root)' />
    <button @click.native="console.log('hi')">&#10158;</button>
</div>
</template>
<script>
import comp from './comp.vue';
export default {
  components: {
    comp,  
    },
   data () {
    return {
      speaker: 'User',
      text:'Жила была бабушка и было у нее два гуся один черный другой белый два веселых гуся',
      root:'Room'
    }},
    methods:{
     nextText(name){
       console.log(name)
     }
    }
 }
</script>

<style lang='css' scoped>
body {
  font-family: cursive;
  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url('http://localhost:8000/dist/background/room.jpg');
  user-select: none;
}
</style>