<template>
  <div>
    Home
    <el-button @click="clickme">clickme</el-button>
    <svg-icon height="200px" name="vue"></svg-icon>
    <btn-count></btn-count>
  </div>
</template>
<script lang="ts" setup>
import BtnCount from '../components/BtnCount.vue';
import useMessage from '../hooks/useMessage'
import SvgIcon from '../components/SvgIcon.vue'
const { messageConfirm } = useMessage()
const clickme = () => {
  messageConfirm('clickme success')
  .then(()=> {
    console.log('clickme success')
  })
}

</script>