<script setup lang="ts">
const props = defineProps({
  id: Number,
  resort: String,
  label: String,
  altitude: String,
  contentType: String,
  link: String,
  thumbnailLink: String,
})
</script>

<template>
  <div v-if="props.contentType === 'img'" class="webcam-container">
    <img :src="props.link" :alt="props.resort + ' - ' + props.label" />
  </div>
  <div v-if="props.contentType === 'iframe'" class="webcam-container">
    <img :src="props.thumbnailLink" :alt="props.label" />
  </div>
  <h2>{{ props.resort + ' - ' + props.label }}</h2>
</template>

<style scoped>
.webcam-container {
  width: 496px;
  height: 279px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.webcam-container img {
  min-width: 100%; /* Ensures the image is wide enough to cover the container */
  min-height: 100%; /* Ensures the image is tall enough to cover the container */
  object-fit: cover; /* Makes sure the image fills the div without distortion */
}
</style>
