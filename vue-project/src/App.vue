<script setup>
import { defineComponent, onMounted, ref } from "vue";
import axios from "axios";
//async comp call ToolSection
import ToolSection from "./components/ToolSection.vue";
import Flama from "./components/Flama.vue";
import DotLoader from "vue-spinner/src/DotLoader.vue";
const logoSpinnerColor = "#f1c4ed";
const logoSpinnerSize = "120px";

let loading = ref(true);
const props = defineProps({
  dailyAiTool: {
    aiName: String,
    aiWebsite: String,
    date: String,
    description: String,
    id: Number,
    imagePath: String,
    videoIframeAdress: String,
  },
  dailyAiImage: {
    imageName: String,
    imagePath: String,
    imageDescription: String,
  },
});

onMounted(() => {
  loading = true;
  getDailyAiTool();
  getDailyAiImage();
});

const getDailyAiTool = async () => {
  await axios
    .get("https://2k2agenv28.execute-api.eu-north-1.amazonaws.com/items")
    .then((fetched) => {
      console.log("✨✨✨", fetched.data[0].imagePath);
      props.dailyAiTool = fetched.data[0];
      loading = false;
    })
    .catch((error) => {
      loading = false;
      console.log(error);
    });
    loading = true;
};

const getDailyAiImage = async () => {
  await axios
    .get("https://7wd4vnk343.execute-api.eu-north-1.amazonaws.com/")
    .then((fetched) => {
      props.dailyAiImage = fetched.data[0];
    })
    .catch((error) => {
      console.log(error);
    });
};
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

        <dot-loader
          class="logoSpinner"
          :loading="loading"
          :color="logoSpinnerColor"
          :size="logoSpinnerSize"
        ></dot-loader>
      </div>
      <h3>AI TOOL DAILY</h3>
    </div>

    <div class="tool-sections-wrapper">
      <div class="flama-wrapper">
        <Flama />
      </div>
      <div class="tool-sections">
        <!-- <dot-loader
          class="logoSpinner"
          :loading="loading"
          :color="logoSpinnerColor"
          :size="logoSpinnerSize"
        ></dot-loader> -->
        <ToolSection :modelValue="props.dailyAiTool"> Data send </ToolSection>
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
    position: relative;
    .logoSpinner {
      position: absolute;
      top: 15px;
      right: 25px;
    }
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
  .tool-sections-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .flama-wrapper {
      display: flex;
      justify-content: right;
      margin-bottom: -40px;
      margin-right: 20px;
    }
    .tool-sections {
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
      display: flex;
      justify-content: center;
      margin: 20px;
      background-color: #d3e5e5;
    }
  }
}
</style>
