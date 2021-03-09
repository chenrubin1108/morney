<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script lang="ts">
import "@/assets/style/helper.scss";
import "@/assets/style/reset.scss";
export default {
  data(){
    return {
      routerArray:['label','money','statistics']
    }
  },
 
} 


</script>
<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}
</style>
