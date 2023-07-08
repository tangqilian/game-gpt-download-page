<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
body,
html {
  width: 100%;
  height: 100%;
}
.back {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  padding: 16px 0;
  position: relative;
  img {
    width: 67px;
    height: 52px;
  }
  p {
    font-size: 20px;
    font-family: Luminari-Regular, Luminari;
    font-weight: 400;
    color: #f6eec1;
    line-height: 27px;
    text-shadow: 0px 0px 6px rgba(11, 255, 230, 0.5);
    margin-left: 14px;
  }
  .middle {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
  }
}
.loading {
  -webkit-animation: loadingAnimation 0.8s infinite linear;
  animation: loadingAnimation 0.8s infinite linear;
  display: inline-block;
  content: "";
  width: 16px;
  height: 16px;
  // background: red;
  border-radius: 50%;
  box-sizing: border-box;
  border: 2px solid black;
  border-left-color: transparent !important;
  margin-left: 5px;
  &.white {
    border: 2px solid white;
    border-left-color: transparent !important;
  }
  &.red {
    width: 12px;
    height: 12px;
    border: 1px solid #e94c7b;
    border-left-color: transparent !important;
  }
}
@keyframes loadingAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
#app {
  width: 100%;
  height: 100%;
  & > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    .scroll {
      width: 100%;
      flex: 1;
      overflow: hidden;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
      padding-bottom: 40px;
      box-sizing: border-box;
    }
  }
}
</style>
