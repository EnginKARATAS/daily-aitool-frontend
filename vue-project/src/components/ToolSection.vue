<template>
  {{ modelValue[0].aiName }}
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
