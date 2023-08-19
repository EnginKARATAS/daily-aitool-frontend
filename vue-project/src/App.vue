<script setup>
import AiTool from "./components/AiTool.vue";
import ToolSection from "./components/ToolSection.vue";
</script>

<template>
  <div id="app">
    <div class="header">
      <h1>SAD AI</h1>
      <div class="imageWrapper">
        <img src="./assets/appLogo.png" alt="">
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
        <ToolSection>
          Data send
        </ToolSection>
      </div>
    </div>
     
  </div>
</template>

<style scoped lang="scss">
  .imageWrapper {
    img{
      width: 150px;
      height: 150px;
      border-radius: 50%;
      border: 10px solid #F1C4ED;
    }
  }
</style>
