<template>
<div id="app">
  <button type="button" @click="openMaskLayer">展示</button>
  <gz-popup v-model="isShow" ref="popup" w="200" h="200">
    <button type="button" name="button" @click="openMaskLayer">取消</button>
  </gz-popup>
</div>
</template>

<script>
import GzPopup from './components/GzPopup'

export default {
  name: 'App',
  components: {
    GzPopup
  },
  data: () => {
    return {
      isShow: false
    }
  },
  methods: {
    openMaskLayer () {
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
button {
  border: 0;
  padding: 10px;
  border-radius: 4px;
  outline: 0;
}

button:focus {
  background-color: #666;
}
</style>
