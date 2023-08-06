<script setup lang="ts">
import axios from "axios";
import { onMounted } from "vue";
console.log(axios.isCancel("something"));
onMounted(() => {
  axios
    .get("https://2k2agenv28.execute-api.eu-north-1.amazonaws.com/items")
    .then((fetched) => {
      console.log(fetched.data[0]);
      dailyAiModel = fetched.data;
    })
    .catch((error) => {
      console.log(error);
    });
});
defineProps<{ msg: string }>();
let dailyAiModel = {
  aiName: "Piggy Magic",
  aiWebsite: "https://piggy.to/magic",
  date: "16.8.2023",
  description:
    "Piggy Magic is an AI-powered social story maker that transforms your words into visually appealing videos and images for sharing on social media platforms like Instagram, TikTok, Facebook, Snapchat, and more. Transform your words into amazing social stories worth sharing. Just enter a short text, see the results, download as a video and images, and share on Instagram, TikTok, Facebook, Snap, or wherever.",
  id: 5,
  imagePath:
    "https://www.futurepedia.io/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fu0v1th4q%2Fproduction%2Fc307ea8005329935662ee3ae56069d9ff7635387-2400x1352.png%3Frect%3D0%2C50%2C2400%2C1253%26w%3D640%26h%3D334%26auto%3Dformat&w=2048&q=75",
  videoIframeAdress: "https://www.youtube.com/embed/QFhOGnykPZQ",
};
</script>

<template>
  <div>
    <div class="content">
      <div class="card">
        <h1>{{ dailyAiModel.aiName }}</h1>
        <div class="image">
          <a :href="dailyAiModel.aiWebsite">
            <img :src="dailyAiModel.imagePath" alt="" />
          </a>
        </div>

        <p>{{ dailyAiModel.date }}</p>
        <p>{{ dailyAiModel.description }}</p>
        <button>
          <link rel="stylesheet" :href="dailyAiModel.aiWebsite" />Visit
        </button>
        <br />
        <div class="iframe">
          <iframe
            :src="dailyAiModel.videoIframeAdress"
            frameborder="0"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #63c6f4;
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
  width: 30%;
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
