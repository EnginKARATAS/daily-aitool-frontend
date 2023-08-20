<template>
  <div class="card">
    <h1>{{ modelValue.aiName }}</h1>
    <div class="image">
      <a :href="modelValue.aiWebsite">
        <img
          class="logo"
          :src="modelValue.imagePath"
          :alt="modelValue.aiWebsite"
        />
      </a>
    </div>
    <p>{{ modelValue.description }}</p>
    <button><link rel="stylesheet" :href="modelValue.aiWebsite" />Visit</button>
    <br />
    <div class="iframe-youtube">
      <iframe :src="modelValue.videoIframeAdress" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script setup>
import { defineProps, onMounted } from "vue";
const props = defineProps(["modelValue"]);
onMounted(() => {
  console.log(props.modelValue);
});
//  console.log(getto);
//  const getto = computed(()=>
//  {
//    return modelValue;
//  })
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .iframe {
    padding-top: 1em;
    width: 100%;
    height: 100%;
    iframe {
      width: 100%;
      height: 100%;
    }
  }
  > * {
    padding: 0.2em;
  }
  button {
    background-color: #63c6f4;
  }
}
.read-the-docs {
  color: #999999;
}
</style>
