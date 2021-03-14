<template>
<div>

  <Layout>
       <Types :value="typeClass" class="Expenditure-income"></Types>
  </Layout>
</div>
</template>

<script lang="ts">

import { Vue, Component } from 'vue-property-decorator'
import Types from '@/components/money/Types.vue'

@Component({
  
  components: {
   Types
  }
})
export default class statistics extends Vue {
name="statistics"
typeClass="-"
}
</script>

<style lang="scss" scoped>
 ::v-deep.Expenditure-income .selected  {
   background-color: #C4C4C4;
   &::after {
     display: none;
   }
}
::v-deep {
  
    .interval-tabs-item {
      height: 48px;
    }
  }
  %item {
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;
  }
  .title {
    @extend %item;
  }
  .record {
    background: white;
    @extend %item;
  }
  .notes {
    margin-right: auto;
    margin-left: 16px;
    color: #999;
  }
</style>