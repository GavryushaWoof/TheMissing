<template>
<div>
    <comp :name='speaker' :text='text' :root='root' @click.native='nextText(root)' />
  
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
    },
  beforeCreate: function() {
    if(!document.body.classList.length>0){
      document.body.classList= 'room';
    }else{
      document.body.classList.replace( document.body.classList[0], 'room');
        }
    }
 }
</script>
<style>
.room {
  font-family: cursive;
  background-repeat: repeat;
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-image: url('http://localhost:8000/dist/background/room.jpg');
  user-select: none;
}
</style>
<style lang='css' scoped>
</style>