<template>
  
    <Layout>
    <ol class="tags">
    
      <router-link class="tag"
   
                   v-for="tag in tags" :key="tag.id"
                   :to="`/label/tag/${tag.id}`">
                   <span>{{tag.name}}</span>
                
                   <svgIcon class="svg" name="left"></svgIcon>
      </router-link>
        
        
     
    </ol>
    <div class="createTag-wrapper">
      
      <buttontag class="createTag"
      @click.native="createTag"
             >
        新建标签
      </buttontag>
    </div>
  </Layout>
  
  
</template>

<script>
// @ is an alias to /src
import { Vue, Component} from 'vue-property-decorator'
import taglistmodel from '@/taglistmodel'

@Component
export default class Label extends Vue {
  name='Label'
  tags=taglistmodel.fetch()
  createTag(){

    const name=window.prompt('请输入标签名')
    if(!name){
      window.alert('标签吗不能为空')
      return
    }
     if(taglistmodel.create(name)==='success'){
        window.alert('创建成功')
     }
     else if(taglistmodel.create(name)==='fail'){
       window.alert('标签名重复')
     }
  }
}
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    font-size: 16px;
    padding-left: 16px;
    > .tag {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e6e6e6;
      .svg {
        width: 18px;
        height: 18px;
        color: #666;
        margin-right: 16px;
      }
    }
  }
  .createTag {
    background: #767676;
    color: white;
    border-radius: 4px;
    border: none;
    height: 40px;
    padding: 0 16px;
    &-wrapper {
      text-align: center;
      padding: 16px;
      margin-top: 44-16px;
    }
  }
</style>

