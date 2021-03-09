<template>
  <layout>
      <div class="navBar">
       <svgIcon class="leftIcon" name="left"></svgIcon>
       <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
      </div>
      <div class="form-wrapper">
          <Notes 
          filename="标签名"
          placeholder="请输入标签"
          ></Notes>

      </div>
  </layout>
</template>

<script>

import Layout from '@/components/Layout.vue'
 import { Vue, Component } from 'vue-property-decorator'
 import taglistmodel from '@/taglistmodel'
  import Notes from '@/components/money/Notes.vue';
@Component({
  components: {
  Layout,
  Notes
  }
})
export default class Taglabel extends Vue {
    name="Taglabel"
 created(){
     const id=this.$route.params.id
    taglistmodel.fetch()
    const tags=taglistmodel.data;
    const tag=tags.filter(item=>item.id===id)[0]
    if(tag){
        console.log('exist tag')
    }else {
        this.$router.push('/404')
    }
 }

}
</script>

<style lang="scss">
 .navBar {
    text-align: center;
    font-size: 16px;
    padding: 12px 16px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    > .title {
    }
    > .leftIcon {
      width: 24px;
      height: 24px;
    }
    > .rightIcon {
      width: 24px;
      height: 24px;
    }
  }
  .form-wrapper {
    background: white;
    margin-top: 8px;
  }
  .button-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }

</style>