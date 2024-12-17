<script setup lang="ts">
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { onMounted } from 'vue'

function getMarkerColor(status: string): string {
  switch (status) {
    case 'active':
      return 'green'
    case 'inactive':
      return 'red'
    case 'pending':
      return 'orange'
    default:
      return 'blue'
  }
}

onMounted(() => {
  const map = L.map('map', { scrollWheelZoom: false }).setView([45.159, 8.361], 7)

  // Aggiungi tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map)

  // Dati dinamici per i marker
  const markersData = [
    { lat: 45.828209, lon: 7.159111, status: 'active', id: 1 },
    { lat: 44.95772, lon: 6.91328, status: 'inactive', id: 2 },
    { lat: 44.90054, lon: 6.58643, status: 'pending', id: 3 },
  ]

  // Aggiungere i marker dinamicamente
  markersData.forEach((markerData) => {
    const { lat, lon, status } = markerData

    // Determina il colore in base allo stato
    const markerColor = getMarkerColor(status)

    // Crea un'icona personalizzata con il colore dinamico
    const customIcon = L.divIcon({
      className: 'custom-icon',
      html: `<div style="width: 20px; height: 20px; background-color: ${markerColor}; border-radius: 50%;"></div>`,
    })

    // Aggiungi il marker alla mappa
    L.marker([lat, lon], { icon: customIcon }).bindPopup(`<b>Status:</b> ${status}`).addTo(map)
  })

  // Impostare i limiti di zoom
  map.setMaxZoom(28)
  map.setMinZoom(7)
})
</script>

<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 60em;
}
.custom-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
}
</style>
