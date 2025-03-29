<template>
  <div class="bg-black min-h-screen p-6 text-white">
    <!-- Top Section: Trade Summary & Trade Chart -->
    <div class="flex justify-evenly items-center h-[25rem] w-full">
      <!-- Trade Summary Cards -->
      <div class="trade-info w-[36%] h-[26rem] flex flex-wrap justify-evenly items-center">
        <div class="h-[42%] w-[42%] border-2 border-white rounded-lg">
          <h1 class="text-5xl p-8 font-bold">{{ order.orders.length }}</h1>
          <h1 class="text-xl font-bold relative top-0 left-5">Total Order</h1>
        </div>
        <div class="h-[42%] w-[42%] border-2 border-white rounded-lg">
          <h1 class="text-5xl p-8 font-bold">{{ tradeSummary[3].value }}</h1>
          <h1 class="text-xl font-bold relative top-0 left-5">Strategy</h1>
        </div>
        <div class="h-[42%] w-[42%] border-2 border-white rounded-lg">
        <h1 class="text-5xl p-8 font-bold">{{ tradeSummary[2].value}}</h1>
          <h1 class="text-xl font-bold relative top-0 left-5">Brokers Added</h1></div>
        <div class="h-[42%] w-[42%] border-2 border-white rounded-lg">
        <h1 class="text-3xl p-8 font-bold">{{ tradeSummary[1].value}}</h1>
          <h1 class="text-xl font-bold relative top-0 left-5">Profit</h1></div>
    </div>

    <!-- Trade Chart Section -->
    <div
      class="trade_chart box h-[24rem] w-[60%] bg-black bg-opacity-10 backdrop-blur-lg rounded-xl border border-white/30 p-6 overflow-y-auto">
      <h1 class="text-white text-3xl mt-2 font-bold">Positions</h1>
      <br>
      <div class="trade-option w-full h-8 flex justify-between">
        <span class="text-white text-xl mt-2 font-bold">Select Trade</span>
        <span>
          <button class="border-2 border-white mr-2 w-16 rounded-md text-white text-xl font-bold">Live</button>
          <button class="border-2 border-white w-16 rounded-md text-white text-xl font-bold">Paper</button>
        </span>
      </div>
      <div class="trade-list h-full w-full mt-5">
        <ul>
          <li v-for="(trade, index) in tradePositions" :key="index" class="text-white mt-2 flex justify-between">
            {{ trade.name }} <span class="text-white">
              <p>{{ trade.amount }}</p>
            </span>
          </li>
          <hr v-for="(trade, index) in tradePositions" :key="index" class="text-white mt-3">
        </ul>
      </div>
    </div>
  </div>

  <!-- Trade List Table -->
  <div class="trade_lists h-full w-full flex items-center justify-center">
    <div class="trade_list h-full w-[96%] ml-5 mt-5 bg-black rounded-lg p-4">
      <!-- Table Header -->
      <div class="trade-list-nav h-10 w-full flex justify-between items-center border-b border-white/30 pb-2">
        <span class="text-white text-xl font-bold">Strategy Name</span>
        <span class="text-white text-xl font-bold">Qty</span>
        <span class="text-white text-xl font-bold">Type</span>
        <span class="text-white text-xl font-bold mr-4">PNL</span>
      </div>

      <!-- Table Body -->
      <div class="mt-5">
        <li v-for="(trade, index) in tradeList" :key="index" class="text-white mt-2 flex justify-between">
          {{ trade.name }}
          <span class="text-white">
            <p>{{ trade.qty }}</p>
          </span>
          <span class="text-white">
            <p>{{ trade.type }}</p>
          </span>
          <span class="text-white">
            <p :class="trade.pnl >= 0 ? 'text-green-500' : 'text-red-500'">
              {{ trade.pnl >= 0 ? '+' : '' }}{{ trade.pnl }}
            </p>
          </span>
        </li>
        <hr v-for="(trade, index) in tradeList" :key="index" class="text-white mt-3">
      </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { tradingDashboard } from "@/stores/TradingDashboardStore";
import { storeToRefs } from "pinia";
import { useOrderStore } from "@/stores/Order";

import { ref } from "vue";
const dashboard = tradingDashboard()
const { tradeSummary, tradePositions, tradeList } = storeToRefs(dashboard)
const order = useOrderStore(); //order store
</script>

<style lang="scss" scoped>
/* Neon Hover Effects */
.box,
.trade_list {
  box-shadow: 0px 0px 3px rgb(0, 255, 255);

  &:hover {
    box-shadow: 0px 0px 3px red;
    transition: box-shadow 0.3s ease;
  }
}

/* Hide Scrollbar */
.trade_chart {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
