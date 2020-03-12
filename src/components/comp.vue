<template>
<div>
  <div>
    <img :src='src'>
  </div>
  <div id=container>
    <div><p>{{name}}</p></div>
    <div><p class="text">{{text}}</p></div>
    <div v-if="text===''"><input type="text" ></div>
    <button @click="$emit('nextText')">&#10158;</button>
  </div>
</div>
</template>
<script>
export default {
  props:['name', 'text', 'src'],
//   methods:{
//     nextText(root){
// console.log(root)
//     }
//   }
 }
</script>

<style lang='css' scoped>
.text{
  margin: 5px 20px 0px;
}

#container{
  font-size: 1.5em;
  height: 15vw;
  padding: 5px;
  background: #c4e6f3e6;
  width: 100vw;
  position: fixed;
  bottom: 0;
  left: 0;
  right:0;
}

button{
  height: 100px;
  width: 100px;
  padding: 0;
  position: fixed;
  bottom: 0;
  right: 0;
  border: none;
  background: none;
  font-size: 3em
}
</style>
