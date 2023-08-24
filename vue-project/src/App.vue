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
      <h1>SADAI</h1>
      <p>Silence's companion</p>

      <div
        class="imageWrapper"
        @mouseover="sadaiImagePopupShow"
        @mouseleave="sadaiImagePopupClose"
      >
        <dot-loader
          v-if="changePopupState"
          class="logoSpinner"
          :loading="loadingTodayAiToolSection && loadingTodayImageSection"
          :color="logoSpinnerColor"
          :size="logoSpinnerSize"
        ></dot-loader>
        <div class="imgOverlay" v-if="changePopupState">
          <p>{{ getTodaySadMessage() }}</p>
        </div>
        <img src="./assets/appLogo.png" alt="" />
      </div>
      <h3>AI TOOL DAILY</h3>
    </div>

    <div class="tool-sections-wrapper">
      <div class="flama-wrapper">
        <Flama />
      </div>
      <div class="tool-sections">
        <ToolSection :modelValue="contentData.dailyAiTool" />
      </div>
      <div class="tool-sections">
        <ToolSection :dailyAiImage="contentData.dailyAiImage" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, defineComponent, onMounted, reactive, ref } from "vue";
import axios from "axios";
//async comp call ToolSection
import ToolSection from "./components/ToolSection.vue";
import Flama from "./components/Flama.vue";
import DotLoader from "vue-spinner/src/DotLoader.vue";
// import LogRocket from 'logrocket';
// LogRocket.init('zwclzf/dailyaitool');

const logoSpinnerColor = "#f1c4ed";
const logoSpinnerSize = "120px";
let loadingTodayAiToolSection = ref(true);
let loadingTodayImageSection = ref(true);
const contentData = reactive({
  dailyAiTool: null,
  dailyAiImage: null,
});
let popupShowState = ref(false);
onMounted(() => {
  loadingTodayAiToolSection = true;
  loadingTodayImageSection = true;
  getDailyAiTool();
  getDailyAiImage();
});

const changePopupState = computed(() => {
  console.log(popupShowState.value);
  return popupShowState.value;
});

const getTodaySadMessage = () => {
  const sadMessages = [
    `“Life is just a series of goodbyes.”`,
    `“Love often fades, leaving echoes of what once was.”`,
    `“The stars above mock my insignificance.”`,
    `“Time erases all traces of our existence.”`,
    `“Dreams shattered, hope withers away.”`,
    `“Loneliness echoes in the empty chambers of the heart.”`,
    `“Regret lingers like a persistent shadow.”`,
    `“Memories fade, leaving behind an ache.”`,
    `“The laughter of yesterday is silenced by the tears of today.”`,
    `“Promises are broken, leaving behind shattered trust.”`,
    `“Lost in a world that doesn't notice my absence.”`,
    `“The beauty of life is marred by the stain of pain.”`,
    `“Longing for something just out of reach.”`,
    `“Hearts entwined, only to be torn apart.”`,
    `“Darkness descends, swallowing the light.”`,
    `“The song of sorrow plays on an endless loop.”`,
    `“Happiness slips through fingers like sand.”`,
    `“The mirror reflects a face marked by time's passage.”`,
    `“Hopelessness wraps its cold arms around my soul.”`,
    `“Life's canvas painted with hues of sorrow and regret.”`,
  ];
  return sadMessages[Math.floor(Math.random() * sadMessages.length)];
};

const sadaiImagePopupShow = () => {
  console.log("object");
  popupShowState.value = true;
};
const sadaiImagePopupClose = () => {
  console.log("deobject");
  popupShowState.value = false;
};

const getDailyAiTool = async () => {
  await axios
    .get("https://wqvjsawt4m.execute-api.eu-north-1.amazonaws.com/getAi")
    .then((fetched) => {
      contentData.dailyAiTool = fetched.data[0];
      loadingTodayAiToolSection = false;
    })
    .catch((error) => {
      loadingTodayAiToolSection = false;
      console.log(error);
    });
  loadingTodayAiToolSection = true;
};

const getDailyAiImage = async () => {
  await axios
    .get("https://7wd4vnk343.execute-api.eu-north-1.amazonaws.com/")
    .then((fetched) => {
      loadingTodayImageSection = false;
      contentData.dailyAiImage = fetched.data;
    })
    .catch((error) => {
      loadingTodayImageSection = false;
      console.log(error);
    });
  loadingTodayImageSection = true;
};
</script>

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
    p{
      margin-bottom: 1em;
      opacity: 0.8;
      font-style: italic;
      font-size: 1.1em;
    }
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
  .imgOverlay {
    background-color: black;
    border-radius: 50%;
    position: absolute;
    top: 10px;
    left: 10px;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: white;
      font-size: 1em;
      margin: 0;
      padding: 1.5em;
    }
    //zindex top
    z-index: 1;
    opacity: 0.8;
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
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 20px;
      background-color: #d3e5e5;
    }
  }
}
</style>
