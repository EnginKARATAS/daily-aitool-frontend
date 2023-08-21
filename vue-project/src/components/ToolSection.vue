<template>

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
    <a :href="modelValue.aiWebsite">
      <button>Visit</button>
    </a>
    <h1>{{ modelValue.aiName }} Trailer</h1>
    <div class="iframe-youtube">
      <iframe :src="modelValue.videoIframeAdress" frameborder="0"></iframe>
    </div>
  </div>
  <div class="card" v-if="dailyAiImage">
    <h1>Today`s Beautiful AI Image</h1>
    <p class="image-section-p">SadAi thought result entire day!</p>
    <img :src="dailyAiImage" alt="" />
  </div>
</template>

<script setup>
import DotLoader from "vue-spinner/src/DotLoader.vue";
import { defineProps } from "vue";
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
    margin-top: -1.2em;
    margin-bottom: 0.5em;
  }
  p {
    text-align: justify;
    font-size: 1.5em;
    margin: 0;
    padding: 0;
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

  a {
    margin-top: 2em;
    width: 100%;
  }
  a button {
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
