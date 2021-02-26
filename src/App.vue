<template>
  <div id="app">
    <div id="nav" v-for="item in routerArray" :key="item">
      <router-link :to="'/'+`${item}`">{{item}}</router-link> |
     
    </div>
    <router-view/>
  </div>
</template>

<script lang="ts">
export default {
  data(){
    return {
      routerArray:['label','record','statistics']
    }
  },
 
} 


</script>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
