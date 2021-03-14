<template>
  <div id="app">
    <router-view  v-if="isRouterAlive"/>
  </div>
</template>

<script >
import "@/assets/style/helper.scss";
import "@/assets/style/reset.scss";
export default {
  data(){
    return {
      routerArray:['label','money','statistics']
    }
  },
  
        name: 'App',
        provide () {  
            return {
                reload: this.reload                                              
            }
        },
        data() {
            return{
                isRouterAlive: true                    //控制视图是否显示的变量
            }
        },
        methods: {
            reload () {
                this.isRouterAlive = false;            //先关闭，
                this.$nextTick(function () {
                    this.isRouterAlive = true;         //再打开
                }) 
            }
        }
    

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
