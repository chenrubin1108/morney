<template>
  <div>
    <label class="notes">
       
      <span class="name">{{textName}}</span>
      <input type="text"
            @input="changeInput($event)"
             :value="value"
             placeholder="在这里输入备注">
    </label>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component,Prop} from 'vue-property-decorator';
  @Component
  export default class Notes extends Vue {
    @Prop({default:''})    readonly  value!:string
    @Prop({required:true})  readonly filename!: string
    @Prop({required:true})  readonly placeholder!: string
    textName: string=this.filename
    changeInput(ev: InputEvent) {
       
        const target = (ev.target as HTMLTextAreaElement);

            this.$emit('update:value',target.value)
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      flex-grow: 1;
      background: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>