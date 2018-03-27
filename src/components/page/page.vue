<template>
  <div class="pageloading" v-show="shows">
      <div class="sk-rotating-plane"></div>
  </div>
</template>
<script>
  export default {
    name: 'pageloading',
    // 写组件时 通过props 实现父组件到子组件的数据传递 这个是必须的  
    props: {
      // 使用组件时的名字 :dp-show
      // 控制显示
      dpShow: {
        type: Boolean,
        default: true
      },
      // 控制时间
      duration: {
        type: Number,
        default: 3000
      }
    },
    data() {
      return {
        shows: this.dpShow
      }
    },
    watch: {
      dpShow (val) {
        this.shows = val
      }
    },
    mounted () {
      setTimeout(() => {
        this.shows = false
      }, this.duration)
    }
  }
</script>
<style scoped>
  .pageloading{
    position: fixed;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;
    background-color: rgba(24, 170, 207, 0.5);
    z-index: 9999;
}
.sk-rotating-plane {
  width: 40px;
  height: 40px;
  background-color: #fff;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  -webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;
          animation: sk-rotatePlane 1.2s infinite ease-in-out; }
@-webkit-keyframes sk-rotatePlane {
  0% {
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
  50% {
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
  100% {
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }
@keyframes sk-rotatePlane {
  0% {
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
            transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
  50% {
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
            transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
  100% {
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
            transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }
</style>