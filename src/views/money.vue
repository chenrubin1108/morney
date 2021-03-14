<template>
  <Layout class-prefix="layout">
     <NumberPad
     @submit="Saveamount"
     :value="datasummer.amount" 
     @update:value="NumberPadSum"/>
    <Types :value="datasummer.type" 
           @update:value="selectedType"
           />
    <Notes @update:value="NotesValue"
          filename="备注"
          placeholder="在这里输入备注"/>
          <!-- :dataSource.sync="tags" -->
           <!-- @update:dataSource="createTag"
          :dataSource="tags" -->
    <Tags
          @update:fuck="selectTag" />
  </Layout>
</template>

<script lang="ts">
  import NumberPad from '@/components/money/NumberPad.vue';
  import Types from '@/components/money/Types.vue';
  import Notes from '@/components/money/Notes.vue';
  import Tags from '@/components/money/Tags.vue';
 import { Vue, Component, Watch } from 'vue-property-decorator'
 import model from '@/model'
import taglistmodel from '@/taglistmodel'
//  JSON.parse(window.localStorage.getItem('Recorddatasummer')||'[]')  
const Recorddatasummer= model.fetch()

window.localStorage.setItem('version','0.0.1')

@Component({
  components: {
  Tags, Notes, Types, NumberPad
  }
})

  export default class Money extends Vue {
    name= 'Money'
    tags=window.taglist
    Recorddatasummer: DataSummer[]=Recorddatasummer 
    datasummer: DataSummer={
      tags:[],
      amount:0,
      notes:'',
      type:'-'
    }
    created(){
      console.log(taglistmodel.fetch())
    }
    
    selectTag(item: string[]){
      this.datasummer.tags=item
      console.log(this.datasummer)
    }
    NumberPadSum(item: string){
      this.datasummer.amount=parseFloat(item)
    }
    selectedType(item: string){
       this.datasummer.type=item
      
    }
    NotesValue(item: string){
     this.datasummer.notes=item
      
    }
    Saveamount(){
      const deepClone: DataSummer=model.clone(this.datasummer)
      // JSON.parse(JSON.stringify(this.datasummer)) 
      deepClone.createdAt=new Date()
      this.Recorddatasummer.push(deepClone)
    }
    @Watch
    ('Recorddatasummer')
    onRecorddatasummerChange(){
      model.save()
    }
    
  }  

</script>

<style lang="scss">
  .layout-content {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
