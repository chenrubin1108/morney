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
          :value="tag.name"
          @input.native="editNote"
          ></Notes>

      </div>
       <div class="button-wrapper">
      <buttontag @click.native="remove">删除标签</buttontag>
    </div>
  </layout>
</template>

<script lang="ts">

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
    tag?:{ id:String,name:String}=undefined
    name="Taglabel"
     id=this.$route.params.id
     tags=taglistmodel.data
  created(){  
    taglistmodel.fetch()
    const tag=this.tags.filter(item=>item.id===this.id)[0]
    if(tag){
       this.tag=tag
        console.log(tag.name)
    }else {
        this.$router.push('/404')
    }
 }
  remove() {
    console.log('1')
      if (this.tag) {
        console.log('2')
        if (taglistmodel.remove(this.id)) {
          this.$router.back();
        } else {
          window.alert('删除失败');
        }
      }
    }
  editNote(ev:InputEvent){
    
      let val=(ev.target as HTMLTextAreaElement).value
       const na=this.tags.filter(item=>item.id===this.id)[0]
      taglistmodel.edit(this.id,val)
     
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