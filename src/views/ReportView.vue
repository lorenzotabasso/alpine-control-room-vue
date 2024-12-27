<script setup lang="ts">

function openUrlInNewTab(url: string): void {
  window.open(url)
}
</script>

<template>
  <div class="flex justify-center m-4">
    <button class="col-start-2 mb-2 mr-2 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
      @click="openUrlInNewTab('https://bollettini.aineva.it/bulletin/latest')">
      Avalanche bulletin by AINEVA
    </button>
    <button class="col-start-2 mb-2 mr-2 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
      @click="openUrlInNewTab('https://www.arpa.piemonte.it/temi/neve-ghiacciai/neve')">
      Ground snow report - Piedmont - ARPA
    </button>
    <button class="col-start-2 mb-2 mr-2 px-4 py-2 font-semibold text-sm bg-cyan-500 text-white rounded-full shadow-sm"
      @click="openUrlInNewTab('https://www.lovevda.it/it/prima-di-partire/bollettino-neve-sci-discesa')">
      Ground snow report - Valle d'Aosta - VDA Region
    </button>
  </div>
</template>
