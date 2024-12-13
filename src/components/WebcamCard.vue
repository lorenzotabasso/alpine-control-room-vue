<script setup lang="ts">
import { ContentType, type Webcam } from '@/models/webcam'
import IconBrokenImage from './icons/IconBrokenImage.vue'

const props = defineProps<Webcam>()

function openNewTabWithSelectedWebcam(url: string): void {
  window.open(url)
}

function hasThumbnail(source: Webcam): boolean {
  if (source.contentType === ContentType.IMG) {
    return true
  } else {
    return source.thumbnailLink ? true : false
  }
}
</script>

<template>
  <div class="border-solid border-2 rounded-lg">
    <div class="w-96 h-64 flex flex-col justify-center items-center overflow-hidden rounded-t-lg">
      <img
        v-if="hasThumbnail(props)"
        class="min-w-full min-h-full object-cover"
        :src="props.contentType === ContentType.IMG ? props.link : props.thumbnailLink"
        :alt="props.resort + ' - ' + props.label"
      />
      <template v-if="!props.thumbnailLink">
        <IconBrokenImage />
      </template>
    </div>
    <div class="grid grid-rows-2">
      <h2 class="m-2">
        {{ props.resort + ' - ' + props.label }}
      </h2>

      <div class="relative mb-2 mr-2">
        <button
          class="absolute bottom-0 right-0 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
          @click="openNewTabWithSelectedWebcam(props.link)"
        >
          Open in new tab
        </button>
      </div>
    </div>
  </div>
</template>
