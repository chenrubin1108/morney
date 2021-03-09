<template>
  <div>
    <ul class="types">
      <li @click="changeSelected('-')" :class="this.type==='-'?'selected':'' ">支出</li>
      <li @click="changeSelected('+')" :class="this.type==='+'?'selected':'' ">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">

import { Vue, Component,Watch,Prop } from 'vue-property-decorator'
@Component
  export default class Types extends Vue {
    name!: 'Types'
    @Prop() readonly value!: string
    type= this.value
  
    changeSelected(types: string){
      this.type=types
       
    }
  @Watch('type')
  onChildChanged(val: string) {
   this.$emit('update:value',val)
  }
  }
</script>

<style lang="scss" scoped>
  .types {
    background: #c4c4c4;
    display: flex;
    text-align: center;
    font-size: 24px;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;
      }
    }
  }
</style>