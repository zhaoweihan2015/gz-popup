<template>
<transition name="gz-masklayer">
  <div id="gz-masklayer" v-show="isShow">
    <div class="masklayer-bg" @click="close"></div>
    <div class="masklayer-content" :style="setStyle">
      <div @click="close" class="masklayer-close glyphicon glyphicon-remove"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABhUlEQVQ4T6WTO0sDQRSFz5mEoGjjAySFha2PQhHT+BeS3Q3YaKdWNhZaaKvgo0hvY2GhjcVsCOQX2BhFG4OFIIKFFqKNokmWubIhK+OiEHTKe8/5uGfmDvHPw7jf87w+AKsiMglgvNW/JHkeBEGhVCo92Z5vAMdxsiQPSPb8NJiIvACY933fj/pfAMdxZpVSh+0kMsbMFYvFo1DbBORyuYFEInEHoKMdAICPWq02VC6XH5sAz/O2AaxZ5hMADwBmWrVjAGkA05ZmV2u91gS4rlslOWw1340xGZIbJBvGmE2l1CmATktzrbUejgANkkl7fBG5V0plgiAwSqkzkoOxeA2tdSoCvJLsigPq9fpUWEulUpU4QETefN/vju7gCsCIHQHAlIgskTQA9gBUYhGqWuvRaIItkusWIDTcACi0assAxgAsWpodrfV6E5DP59MicvvnZwwh/1qkaCzXdV2S+wB6f1moZxFZ+HGVI0M2m+1PJpMr4WciORHWReSirc/U5hp/k30CG6idEYisAi4AAAAASUVORK5CYII="></div>
      <slot></slot>
    </div>
  </div>
</transition>
</template>
<script>
export default {
  name: 'gz-masklayer',
  data: () => ({
    isShow: false,
    w_: document.body.offsetWidth || document.body.clientWidth
  }),
  props: {
    w: {
      default: 200
    },
    smWidth: {
      default:80
    },
    limitWidth: {
      default:750
    },
    h: {
      default: 200
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    setStyle() {
      return `height:${this.h}px;margin-top:-${this.h/2}px;` + ((this.w < this.w_ || this.w_ >= this.limitWidth) ? `width:${this.w}px;margin-left:-${this.w/2}px;` : `width:${this.default}%;margin-left:-${this.default/2}%;`)
    }
  },
  watch: {
    show(v) {
      this.isShow = v
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.w_ = document.body.offsetWidth || document.body.clientWidth
    })
  },
  methods: {
    close() {
      this.isShow = false
    }
  }
}
</script>
<style scoped>
.gz-masklayer-enter-active,
.gz-masklayer-leave-active {
  transition: opacity .3s;
}

.gz-masklayer-enter,
.gz-masklayer-leave-to {
  opacity: 0;
}

#gz-masklayer {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 998
}

#gz-masklayer .masklayer-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

#gz-masklayer .masklayer-content {
  position: absolute;
  left: 50%;
  top: 50%;
  background-color: #fff;
  border-radius: 4px;
  text-align: center;
  box-sizing: border-box;
  padding: 21px 0
}

#gz-masklayer .masklayer-close {
  position: absolute;
  right: 12px;
  top: 12px;
  cursor: pointer
}
</style>
