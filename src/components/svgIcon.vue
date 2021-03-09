<template>
  <svg>
    <use :xlink:href="'#'+`${name}`"></use>
    </svg>
</template>

<script lang="ts">
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
  try {importAll(require.context('../assets/svg', true, /\.svg$/));} catch (error) {console.log(error);}
export default {
    props: ['name'],
    name: 'svgIcon'
}
</script>

<style>

</style>