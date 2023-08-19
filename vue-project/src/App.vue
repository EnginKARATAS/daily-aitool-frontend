<script setup>
import AiTool from "./components/AiTool.vue";
import ToolSection from "./components/ToolSection.vue";
</script>

<template>
  <div id="app">
    <div class="brainImageWrapper">
      <div class="right">
        <img src="./assets/brain256.png" width="270" alt="brain" />
      </div>
      <div class="left">
        <img src="./assets/brain256.png" width="270" alt="brain" />
      </div>
    </div>
    <div class="header">
      <h1>SAD AI</h1>
      <div class="imageWrapper">
        <img src="./assets/appLogo.png" alt="" />
      </div>
      <h3>AI TOOL DAILY</h3>
    </div>
    <div class="contentWrapper">
      <div class="rightFlama">
        <div class="flama">
          <h3>AI TOOL TODAY</h3>
          <h4>8.13.2023</h4>
        </div>
      </div>
      <div class="content">
        <ToolSection> Data send </ToolSection>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  .brainImageWrapper{
    .right{
      position: absolute;
      right: -50px;
      top: 0;
    }
    .left{
      position: absolute;
      left: -50px;
      top: 0;
    }
  }
  .imageWrapper {
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 10px solid #f1c4ed;
    }
  }
  .header{
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1{
      font-size: 50px;
      color: #D3E5E5;
    }
    h3{
      font-size: 30px;
      color: #f1c4ed;
    }
  }
  .content {
    margin: 20px;
    background-color: #d3e5e5;
  }
}
</style>
