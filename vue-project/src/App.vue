<script setup>
import AiTool from "./components/AiTool.vue";
import ToolSection from "./components/ToolSection.vue";
import Flama from "./components/Flama.vue";
</script>

<template>
  <div id="app">
    <div class="brainImageWrapper">
      <div class="right">
        <img src="./assets/brain256.png" width="300" alt="brain" />
      </div>
      <div class="left">
        <img src="./assets/brain256.png" width="300" alt="brain" />
      </div>
    </div>
    <div class="header">
      <h1>SAD AI</h1>
      <div class="imageWrapper">
        <img src="./assets/appLogo.png" alt="" />
      </div>
      <h3>AI TOOL DAILY</h3>
    </div>

    <div class="content-wrapper">
      <Flama />
      <div class="content">
        <ToolSection> Data send </ToolSection>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
#app {
  .brainImageWrapper {
    .right {
      position: absolute;
      right: -75px;
      top: -50px;
    }
    .left {
      position: absolute;
      left: -75px;
      top: -50px;
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
  .header {
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
      margin-bottom: 10px;
      font-size: 50px;
      color: #d3e5e5;
    }
    h3 {
      margin-top: 0;
      font-size: 30px;
      color: #f1c4ed;
    }
  }
  .content-wrapper {
    position: relative;

    .content {
      margin: 20px;
      background-color: #d3e5e5;
    }
  }
}
</style>
