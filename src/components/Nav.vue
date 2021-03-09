<template>
  <div>
     <nav>
     <div class="svgIcon-box">
       
          <nav>
    <router-link to="/money" class="item" active-class="selected">
      <svgIcon class="svgIcon" name="money"/>
      记账
    </router-link>
    <router-link to="/label" class="item" active-class="selected">
      <svgIcon class="svgIcon" name="label"/>
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <svgIcon class="svgIcon" name="statistics"/>
      统计
    </router-link>
  </nav>
        
     
      </div>
  
    </nav>
  </div>
</template>

<script lang="ts">


export default {
  data(){
    return {
      routerArray:['label','money','statistics'],
      svgsvgIconArray:['money','label','statistics']
    }
  },
 
} 
</script>

<style scoped lang="scss">
@import  '~@/assets/style/reset.scss' ;
.fuck {
    flex: 1;
}
.svgIcon-box{
    display: flex;
     flex-direction: column;
    width: 100%;
    
   
}
.svgIcon-box > div {
    flex: 1;
}
nav {

  width: 100vw;
    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    flex-direction: row;
    font-size: 12px;
    > .item {
      padding: 2px 0;
      width: 33.33333%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      
    }
    .svgIcon {
        width: 32px;
        height: 32px;
      }
     .item.selected{
      color: red;
    }
  }
</style>