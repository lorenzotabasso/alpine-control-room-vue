<script setup lang="ts">
import { ref } from 'vue'
import WebcamItem from './WebcamItem.vue'

const allWebcams = ref([
  {
    id: 0,
    resort: 'Crevacol',
    label: 'Arrivo seggiovia testa bassa',
    altitude: '2450 m',
    contentType: 'img',
    link: 'https://pila.it/webcams/Crevacol01.jpg',
  },
  {
    id: 1,
    resort: 'Pila',
    label: 'Grimondet',
    altitude: '2348 m',
    contentType: 'iframe',
    link: 'https://webtv.feratel.com/webtv/?design=v3&cam=6316',
    thumbnailLink: 'https://wtvpict.feratel.com/picture/38/6316.jpeg?&design=v3',
  },
  {
    id: 2,
    resort: 'Bardonecchia',
    label: 'Ban',
    contentType: 'iframe',
    link: 'https://app.webcam-hd.com/bardonecchia/banold',
    thumbnailLink: 'https://www.trinum.com/ibox/ftpcam/small_bardonecchia_ban.jpg',
  },
  {
    id: 3,
    resort: 'Vialattea - Sestriere',
    label: 'Monte Fraiteve',
    contentType: 'iframe',
    link: 'https://montefraiteve.panomax.com/',
    thumbnailLink: 'https://live-image.panomax.com/cams/5712/preview_og.jpg',
  },
  {
    id: 4,
    resort: 'Serre Chevalier',
    label: 'Col du Lautaret',
    altitude: '2058 m',
    contentType: 'iframe',
    link: 'https://www.skaping.com/serrechevalier/coldulautaret',
  },
])
</script>

<template>
  <ul class="flex flex-wrap auto-cols-auto gap-5">
    <li v-for="webcam in allWebcams" :key="webcam.id">
      <WebcamItem
        :id="webcam.id"
        :resort="webcam.resort"
        :label="webcam.label"
        :altitude="webcam.altitude"
        :contentType="webcam.contentType"
        :link="webcam.link"
        :thumbnailLink="webcam.thumbnailLink"
      >
      </WebcamItem>
    </li>
  </ul>
</template>
