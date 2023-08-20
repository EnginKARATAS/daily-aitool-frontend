<template>
  <div class="card" v-if="dailyAiImage">
    <h1>Today`s amazing image</h1>
    <p>SadAi thinked this result entire day!</p>
    <img :src="dailyAiImage" alt="" />
  </div>
  <div class="card" v-if="modelValue">
    <h1>{{ modelValue.aiName }}</h1>
    <div class="image">
      <a :href="modelValue.aiWebsite">
        <img
          imagePath
          class="logo"
          :src="modelValue.imagePath"
          :alt="modelValue.aiWebsite"
        />
      </a>
    </div>

    <p>{{ modelValue.description }}</p>
    <button><link rel="stylesheet" :href="modelValue.aiWebsite" />Visit</button>
    <br />
    <h1>{{ modelValue.aiName }} Traile</h1>
    <div class="iframe-youtube">
      <iframe :src="modelValue.videoIframeAdress" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
const props = defineProps(["modelValue", "dailyAiImage"]);
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

  p {
    text-align: justify;
    font-size: 1.5em;
  }
  .image {
    width: 100%;
    height: 100%;
    img {
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

  button {
    color: black;
    background-color: #f1c4ed;
    width: 100%;
    border-radius: 15px 15px 15px 15px;
  }
  .read-the-docs {
    color: #999999;
  }
}
</style>
