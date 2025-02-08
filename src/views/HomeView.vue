<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Webcam } from '@/models/webcam'
import { webcams } from '@/store/webcam'
import WebcamCard from '@/components/WebcamCard.vue'

const allWebcams = ref<Webcam[]>(webcams)
const search = ref('')

const filteredWebcams = computed(() => {
  return allWebcams.value.filter((webcam) => {
    return webcam.resort.toLowerCase().includes(search.value.toLowerCase()) ||
      webcam.region.toLowerCase().includes(search.value.toLowerCase()) ||
      webcam.subRegion.toLowerCase().includes(search.value.toLowerCase())
  });
});

</script>

<template>
  <div class="container mx-auto p-4">

    <div class="flex flex-wrap justify-center ">
      <input type="text" v-model="search" placeholder="Filter"
        class="w-full xl:mx-32 lg:mx-40 md:mx-10 mb-4 p-2 border border-gray-300 rounded-md">
    </div>

    <ul class="flex flex-wrap justify-center auto-cols-auto gap-5">
      <li v-for="webcam in filteredWebcams" :key="webcam.resort + '-' + webcam.label">
        <WebcamCard :nation="webcam.nation" :region="webcam.region" :subRegion="webcam.subRegion"
          :resort="webcam.resort" :label="webcam.label" :altitude="webcam.altitude" :contentType="webcam.contentType"
          :source="webcam.source" :link="webcam.link" :thumbnailLink="webcam.thumbnailLink">
        </WebcamCard>
      </li>
    </ul>
  </div>
</template>
