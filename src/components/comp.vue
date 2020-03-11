<template>
<div id=container>
  <div><span>{{name}}</span></div>
  <div><p>{{text}}</p></div>
  <button @click="$emit('click')">&#10158;</button>
</div>
</template>
<script>
export default {
  props:['name', 'text', 'root'],
//   methods:{
//     nextText(root){
// console.log(root)
//     }
//   }
 }
</script>

<style>
#container{
  background: #c4e6f3e6;
  border: 3px solid #808080;
  border-radius: 20px;
  width: 600px;
  /* pointer-events: none; */
}
</style>
