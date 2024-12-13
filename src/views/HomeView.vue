<script setup lang="ts">
import { webcams } from '@/store/webcam'
import type { Webcam } from '@/models/webcam'
import { ref } from 'vue'
import WebcamCard from '../components/WebcamCard.vue'

const allWebcams = ref<Webcam[]>(webcams)
</script>

<template>
  <div class="container mx-auto p-4">
    <ul class="flex flex-wrap auto-cols-auto gap-5">
      <li v-for="webcam in allWebcams" :key="webcam.id">
        <WebcamCard
          :id="webcam.id"
          :resort="webcam.resort"
          :label="webcam.label"
          :altitude="webcam.altitude"
          :contentType="webcam.contentType"
          :link="webcam.link"
          :thumbnailLink="webcam.thumbnailLink"
        >
        </WebcamCard>
      </li>
    </ul>
  </div>
</template>
