<script setup lang="ts">
import { ContentType, type Webcam } from '@/models/webcam';
import IconBrokenImage from './icons/IconBrokenImage.vue';

const props = defineProps<Webcam>()

function openNewTabWithSelectedWebcam(url: string): void {
  if (url) {
    window.open(url)
  }
}

function hasThumbnail(source: Webcam): boolean {
  if (source.contentType === ContentType.IMG) {
    return true
  } else {
    return source.thumbnailLink ? true : false
  }
}

function mapNationToFlag(nation: string): string {
  if (nation.trim().toLowerCase() === 'ita') {
    return "🇮🇹"
  } else {
    return "🇫🇷"
  }
}

</script>

<template>
  <div class="border-solid border-2 rounded-lg w-80">
    <div class="w-80 h-64 flex flex-col justify-center items-center overflow-hidden rounded-t-lg">
      <img v-if="hasThumbnail(props)" class="min-w-full min-h-full object-cover"
        :src="props.contentType === ContentType.IMG ? props.link : props.thumbnailLink"
        :alt="props.resort + ' - ' + props.label" />
      <template v-if="!hasThumbnail(props)">
        <IconBrokenImage />
      </template>
    </div>
    <div class="grid">
      <div>
        <p class="m-2 text-xl font-bold">{{ props.resort }}</p>
        <p class="m-2 font-semibold">{{ props.altitude ? props.label + ', ' + props.altitude : props.label }}</p>
        <p class="m-2">{{ mapNationToFlag(props.nation) }} {{ props.region }} {{ props.subRegion ? ' - ' + props.subRegion : '' }}</p>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <div>
          <button v-if="props.source"
            class="col-start-2 ml-2 mb-2 px-4 py-2 text-sm border-2 border-cyan-500 rounded-full shadow-sm"
            @click="openNewTabWithSelectedWebcam(props.source)">Source
          </button>
        </div>
        <div>
          <button
            class="col-start-2 mb-2 mr-2 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
            @click="openNewTabWithSelectedWebcam(props.link)">
            Open in new tab
          </button>

        </div>
      </div>
    </div>
  </div>
</template>
