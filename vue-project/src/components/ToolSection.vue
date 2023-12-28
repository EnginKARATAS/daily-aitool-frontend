<template>
  <div class="card" v-if="modelValue">
    <h1>{{ modelValue.aiName }}</h1>
    <div class="image">
      <a target="_blank" :href="modelValue.aiWebsite">
        <img
          imagePath
          class="logo"
          :src="modelValue.imagePath"
          :alt="modelValue.aiWebsite"
        />
      </a>
    </div>

    <p>{{ modelValue.description }}</p>
    <a target="_blank" :href="modelValue.aiWebsite">
      <button class="pink-button">Visit</button>
    </a>
    <div v-if="!modelValue.videoIframeAdress.includes('Not Available')" class="w-100percent">
      <h1>{{ modelValue.aiName }} Trailer</h1>
      <p>Click to link below and go to the trailer video</p>
      <a target="_blank" :href="modelValue.aiWebsite">
        <button class="pink-button">Go to youtube trailer video</button>
      </a>
    </div>
 
  </div>
  <div class="card" v-if="dailyAiImage">
    <h1>Today`s Beautiful AI Image</h1>
    <p class="image-section-p">SadAI thought result entire day!</p>
    <img :src="dailyAiImage" alt="There is no suggested image today. I can`t thinking. Am I broken? Wanna image? contact@enginkaratas.com" />

    <div class="thinking-section">
      <dot-loader
        class="logoSpinner"
        :loading="defaultLoader"
        :color="logoSpinnerColor"
        :size="logoSpinnerSize"
      ></dot-loader>
      <p>Thinking tomorrow...</p>
    </div>
  </div>
</template>

<script setup>
import DotLoader from "vue-spinner/src/DotLoader.vue";
import { defineProps } from "vue";
const defaultLoader = true;
const logoSpinnerColor = "#f1c4ed";
const logoSpinnerSize = "40";

const props = defineProps({
  modelValue: null,
  dailyAiImage: null,
});
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  overflow: hidden;
  position: relative;
  color: black;
  margin-bottom: 2.3em;
  .image-section-p {
    position: relative;
    font-size: 1.5em;
    font-weight: bold;
    margin-top: -1.2em;
    margin-bottom: 0.5em;
    padding: 0.5em 0.1em 0.1em 0.1em;
  }
  p {
    text-align: justify;
    font-size: 1.5em;
    margin: 0;
    padding: 0.5em 0.1em 0.1em 0.1em;
  }
  .image {
    display: flex;
    align-items: center;
    justify-content: center;
    //shadow
    box-shadow: 0 0 7px 0 #f1c4ed;
    border-radius: 4%;
    width: 97%;
    height: 100%;
    a {
      padding: 5px 5px 0 5px;
    }
    img {
      border-radius: 4%;
      width: 100%;
      height: 100%;
    }
  }
  .iframe-youtube {
    padding-top: 1em;
    width: 100%;
    height: 280px;
    iframe {
      width: 100%;
      height: 100%;
    }
  }

  a ,.w-100percent{
    width: 100%;
  }
  .pink-button {
    color: black;
    background-color: #f1c4ed;
    width: 100%;
    border-radius: 15px 15px 15px 15px;
    margin-top: 1em;
  }

  .thinking-section {
    width: 150px;
    color: white;
    p {
      font-size: 1.3em;
      margin: 0;
      padding: 0;
    }
    position: absolute;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: left;
    align-items: center;
    justify-content: space-evenly;
    background-color: #f1c4ed;
    
    background-color: black;
    border-radius: 25% 25% 25% 25%;
    .logoSpinner{
      margin: 1.4em
    }
  }
  .read-the-docs {
    color: #999999;
  }
}
</style>
