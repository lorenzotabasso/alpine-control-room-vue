<script setup lang="ts">
import type { Webcam } from '@/models/webcam'
import { webcams } from '@/store/webcam'
import type { MapOptions } from 'leaflet'
import * as L from 'leaflet'
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-icon.png'
import 'leaflet/dist/images/marker-shadow.png'
import 'leaflet/dist/leaflet.css'
import { onMounted, ref } from 'vue'

onMounted(() => {
  const mapOptions: MapOptions = { scrollWheelZoom: true, maxZoom: 28, minZoom: 7 }
  const map = L.map('map', mapOptions).setView([45.194, 7.427], 8)

  // Add tile layer for copyright on cartographic data
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  const allWebcams = ref<Webcam[]>(webcams)
  allWebcams.value.forEach((webcam: Webcam) => {
    if (webcam.coordinates) {
      let markerLabel = `<b>${webcam.resort} - ${webcam.label}</b>`
      if (webcam.altitude) {
        markerLabel += `<br><p>${webcam.altitude}</p>`
      }
      if (webcam.resortGroup) {
        markerLabel = `<b>${webcam.resortGroup}</b><br>${markerLabel}`
      }
      markerLabel += `<br><a href="${webcam.link}" target="_blank">Open webcam</a>`

      L.marker([webcam.coordinates.latitude, webcam.coordinates.longitude])
        .bindPopup(markerLabel)
        .addTo(map)
    }

    // TODO: uncomment when finished with the custom icon
    // const customIcon = L.divIcon({
    //   className: 'custom-icon',
    //   html: `<div style="width: 20px; height: 20px; background-color: ${markerColor}; border-radius: 50%;"></div>`,
    // })
    // L.marker([lat, lon], { icon: customIcon }).bindPopup(`<b>Status:</b> ${status}`).addTo(map)
  })
})
</script>

<template>
  <div id="map" class="h-screen w-screen"></div>
</template>

<style scoped>
#map {
  height: 85vh;
  width: 100vw;
}

.custom-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
