<template>
    <div class="bg-black min-h-screen p-6 text-white">
      <!-- Top Section: Trade Summary & Trade Chart -->
      <div class="flex justify-evenly items-center h-[25rem] w-full">
        <!-- Trade Summary Cards -->
        <div class="trade-info w-[36%] h-[26rem] flex flex-wrap justify-evenly items-center">
          <div v-for="(card, index) in tradeSummary" :key="index"
            class="box h-[11em] w-[12em] bg-black bg-opacity-10 backdrop-blur-lg rounded-xl border border-white/30 p-6">
            <div class="orders h-10 w-10 border-2 border-amber-50 rounded-lg"></div>
            <h1 class="text-white text-3xl mt-2 font-bold">{{ card.value }}</h1>
            <p class="text-amber-50 opacity-30 text-sm">{{ card.label }}</p>
          </div>
        </div>
  
        <!-- Trade Chart Section -->
        <div class="trade_chart box h-[24rem] w-[60%] bg-black bg-opacity-10 backdrop-blur-lg rounded-xl border border-white/30 p-6 overflow-y-auto">
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
                {{ trade.name }} <span class="text-white"><p>{{ trade.amount }}</p></span>
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
              <span class="text-white"><p>{{ trade.qty }}</p></span>
              <span class="text-white"><p>{{ trade.type }}</p></span>
              <span class="text-white"><p :class="trade.pnl >= 0 ? 'text-green-500' : 'text-red-500'">
                {{ trade.pnl >= 0 ? '+' : '' }}{{ trade.pnl }}
              </p></span>
            </li>
            <hr v-for="(trade, index) in tradeList" :key="index" class="text-white mt-3">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Trade Summary Cards
  const tradeSummary = ref([
    { label: "Total Orders", value: "65" },
    { label: "Total Profit", value: "+1542.00" },
    { label: "Broker Connected", value: "0/10" },
    { label: "Strategy Deployed", value: "05" },
  ]);
  
  // Trade Positions
  const tradePositions = ref([
    { name: "Domain Price Action", amount: "21332" },
    { name: "Domain Trend", amount: "21332" },
  ]);
  
  // Trade List Data
  const tradeList = ref([
    { name: "Domain Price Action", qty: "21332", type: "MIS", pnl: 1532 },
    { name: "Domain Trend", qty: "12321", type: "MIS", pnl: -542 },
    { name: "Scalping Strategy", qty: "4312", type: "INTRADAY", pnl: 734 },
    { name: "Breakout Strategy", qty: "10000", type: "INTRADAY", pnl: -102 },
  ]);
  </script>
  
  <style lang="scss" scoped>
  /* Neon Hover Effects */
  .box, .trade_list {
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
  