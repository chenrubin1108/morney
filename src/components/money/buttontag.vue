<template>
  <button class="button-tagstyle">
        <slot></slot>
      </button>
</template>

<script>

import {Vue}from 'vue-property-decorator' 
export default class ButtonTag extends Vue  {
name='ButtonTag'

}
</script>

<style lang="scss">


 .button-tagstyle {
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