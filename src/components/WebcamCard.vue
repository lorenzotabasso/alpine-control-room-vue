<script setup lang="ts">
import { ContentType, type Webcam } from '@/models/webcam'
import IconBrokenImage from './icons/IconBrokenImage.vue'
import IconMap from './icons/IconMap.vue'

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
  <div class="border-solid border-2 rounded-lg w-80">
    <div class="w-80 h-64 flex flex-col justify-center items-center overflow-hidden rounded-t-lg">
      <img
        v-if="hasThumbnail(props)"
        class="min-w-full min-h-full object-cover"
        :src="props.contentType === ContentType.IMG ? props.link : props.thumbnailLink"
        :alt="props.resort + ' - ' + props.label"
      />
      <template v-if="!hasThumbnail(props)">
        <IconBrokenImage />
      </template>
    </div>
    <div class="grid">
      <div>
        <div class="flex justify-start content-center">
          <div class="flex justify-start content-center w-8">
            <IconMap></IconMap>
          </div>
          <p class="m-2">{{ props.resort }}</p>
        </div>
        <!-- <p class="m-2">({{ props.nation }}, {{ props.region }}, {{ props.subRegion }})</p> -->
        <p class="m-2">{{ props.label }}</p>
        <p v-if="props.altitude" class="m-2">{{ props.altitude }}</p>
      </div>
      <div class="grid grid-cols-2">
        <button
          class="col-start-2 mb-2 mr-2 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
          @click="openNewTabWithSelectedWebcam(props.link)"
        >
          Open in new tab
        </button>
      </div>
    </div>
  </div>
</template>
