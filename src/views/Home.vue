<template>
  <div class="home">
    <div class="homeTop">
      <div class="logoBox">
        <img src="@/assets/img/downLogo.png" alt="">
      </div>
      <div class="downBox" @click="goPage('http://web.gpt.mokefan.com/login')">DOWNLOAD</div>
    </div>
    <div class="cententBox">
      <div class="titleBox">
        <img src="@/assets/img/downTitle.png" alt="">
      </div>
      <div class="textBox">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate soluta error officia earum modi harum laudantium, nesciunt temporibus assumenda quia in ducimus eius nulla dolore nobis maxime, commodi sapiente qui.</p>
        <div class="downBtn" @click="goPage('http://web.gpt.mokefan.com/login')">
          DOWNLOAD
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    goPage(url) {
      window.open(url)
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  width: 100%;
  height: 100%;
  background: url('../assets/img/downBg.png') no-repeat center;
  background-size: 100% 100%;
  .homeTop{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding:  24px 120px 64px 120px;
    .logoBox{
      width: 252px;
      &>img{
        width: 100%;
      }
    }
    .downBox{
      width: 180px;
      height: 44px;
      background: rgba(255,255,255,0.15);
      box-shadow: 0px 10px 20px 0px rgba(0,0,0,0.1);
      border-radius: 16px;
      border: 1px solid rgba(255,255,255,0.8);
      text-align: center;
      line-height: 44px;
      cursor: pointer;
      font-size: 14px;
      font-family: 'NeueMachina-Medium';
      font-weight: 500;
      color: #FFFFFF;
    }
  }
  .cententBox{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    box-sizing: border-box;
    padding:  0 ;
    .titleBox {
      width: 1114px;
      &>img{
        width: 100%;
      }
    }
    .textBox{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: flex-start;
      box-sizing: border-box;
      padding-top:  80px;
      &>p{
        width: 620px;
        font-size: 16px;
        font-family: 'NeueMachina-Regular';
        font-weight: 400;
        color: rgba(255,255,255,0.79);
        line-height: 19px;
        text-shadow: 0px 2px 4px rgba(0,0,0,0.5);
      }
      .downBtn{
        width: 305px;
        height: 72px;
        background: linear-gradient(180deg, #3EEFA2 0%, #01CD74 100%);
        box-shadow: 0px 10px 20px 0px rgba(255,255,255,0.1);
        border-radius: 16px;
        text-align: center;
        line-height: 72px;
        font-size: 24px;
        font-family: 'NeueMachina-Ultrabold';
        font-weight: 800;
        color: #001F2A;
        margin-left: 25px;
        cursor: pointer;
      }
    }
  }
}
</style>

