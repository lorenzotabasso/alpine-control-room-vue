<script setup lang="ts">

function openUrlInNewTab(url: string): void {
  window.open(url)
}

</script>

<template>
  <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4 m-4">
    <div class="flex content-center justify-center">
      <button class="col-start-2 px-4 py-2 border-2 border-cyan-500 rounded-lg shadow-sm flex flex-col items-center"
        @click="openUrlInNewTab('https://www.lovevda.it/en/before-your-trip/downhill-snow-report')">
        <img class="h-32 w-32" src="https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_map_of_Aosta_Valley.svg"
          alt="Flag of Aosta Valley" />
        <p class="font-semibold text-sm">
          Ground snow report - Aosta Valley (by VDA Region)
        </p>
      </button>
    </div>
    <div class="flex content-center justify-center">
      <button class="col-start-2 px-4 py-2 border-2 border-cyan-500 rounded-lg shadow-sm flex flex-col items-center"
        @click="openUrlInNewTab('https://www.arpa.piemonte.it/temi/neve-ghiacciai/neve')">
        <img class="h-32 w-32" src="https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_map_of_Piedmont.svg"
          alt="Flag of Piedmont" />
        <p class="font-semibold text-sm">Ground snow report - Piedmont (by ARPA)</p>
      </button>
    </div>
    <div class="flex content-center justify-center">
      <button class="col-start-2 px-4 py-2 border-2 border-red-500 rounded-lg shadow-sm flex flex-col items-center"
        @click="openUrlInNewTab('https://bollettini-en.aineva.it/bulletin/latest')">
        <img class="h-32 w-32" src="/logo-aineva.png" alt="AINEVA logo" />
        <p class="font-semibold text-sm">
          Avalanche bulletin (by AINEVA)
        </p>
      </button>
    </div>
    <div class="flex content-center justify-center">
      <button class="col-start-2 px-4 py-2 border-2 border-green-500 rounded-lg shadow-sm flex flex-col items-center"
        @click="openUrlInNewTab('https://www.meteo3r.it/app/public/')">
        <img class="h-32 w-32" src="/logo-meteo3R.png" alt="Meteo 3R logo" />
        <p class="font-semibold text-sm">
          Weather forecast and other data (by Meteo3R)
        </p>
      </button>
    </div>
  </div>
</template>
