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
  <div class="w-96 h-64 flex flex-col justify-center items-center overflow-hidden">
    <img
      class="min-w-full min-h-full object-cover"
      v-if="props.contentType === 'img'"
      :src="props.link"
      :alt="props.resort + ' - ' + props.label"
    />
    <img
      class="min-w-full min-h-full object-cover"
      v-if="props.contentType === 'iframe'"
      :src="props.thumbnailLink"
      :alt="props.label"
    />
  </div>
  <h2 class="m-4">{{ props.resort + ' - ' + props.label }}</h2>
</template>
