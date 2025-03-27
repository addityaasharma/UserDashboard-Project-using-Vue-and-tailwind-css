<template>
    <div class="bg-black min-h-screen p-6 text-white">
      <!-- Positions Header -->
      <div class="mb-4">
        <h1 class="text-2xl font-bold">Positions</h1>
        <p class="text-lg font-semibold mt-1">
          Today's Profit: 
          <span :class="totalProfit >= 0 ? 'text-green-500' : 'text-red-500'">
            {{ totalProfit >= 0 ? '+' : '' }}{{ totalProfit.toFixed(2) }}
          </span>
        </p>
      </div>
  
      <!-- Positions Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full bg-black text-white rounded-lg shadow-md">
          <thead>
            <tr class="bg-gray-200 text-gray-700 uppercase text-sm">
              <th class="py-3 px-4 text-left">Strategy</th>
              <th class="py-3 px-4 text-left">Broker</th>
              <th class="py-3 px-4 text-left">Script</th>
              <th class="py-3 px-4 text-left">Product</th>
              <th class="py-3 px-4 text-left">Side</th>
              <th class="py-3 px-4 text-left">Quantity</th>
              <th class="py-3 px-4 text-left">Buy Price</th>
              <th class="py-3 px-4 text-left">Sell Price</th>
              <th class="py-3 px-4 text-left">Position Status</th>
              <th class="py-3 px-4 text-left">P&L</th>
            </tr>
          </thead>
          <tbody class="text-gray-700 text-sm">
            <tr v-for="(position, index) in positions" :key="index" class="border-b border-gray-300 hover:bg-gray-100">
              <td class="py-3 px-4">{{ position.strategy }}</td>
              <td class="py-3 px-4">{{ position.broker }}</td>
              <td class="py-3 px-4">{{ position.script }}</td>
              <td class="py-3 px-4">{{ position.product }}</td>
              <td class="py-3 px-4">{{ position.side }}</td>
              <td class="py-3 px-4">{{ position.quantity }}</td>
              <td class="py-3 px-4">{{ position.buyPrice }}</td>
              <td class="py-3 px-4">{{ position.sellPrice }}</td>
              <td class="py-3 px-4">{{ position.status }}</td>
              <td class="py-3 px-4 font-semibold" :class="position.pnl >= 0 ? 'text-green-500' : 'text-red-500'">
                {{ position.pnl >= 0 ? '+' : '' }}{{ position.pnl }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        positions: [
          { strategy: "DOMAIN TREND(NIFTY)", broker: "angel (A537412)", script: "NIFTY15FEB2420000PE(NFO)", product: "INTRADAY", side: "SELL", quantity: 500, buyPrice: "09:13:54@ 0", sellPrice: "09:13:54@ 0", status: "CLOSED", pnl: 0 },
          { strategy: "DOMAIN PRICE ACTION(BANKNIFTY)", broker: "angel (A537412)", script: "NIFTY15FEB2422000CE(NFO)", product: "INTRADAY", side: "BUY", quantity: 500, buyPrice: "09:13:54@ 0", sellPrice: "09:13:54@ 7", status: "CLOSED", pnl: 0 },
          { strategy: "DOMAIN TREND(NIFTY)", broker: "angel (A537412)", script: "NIFTY15FEB2420000PE(NFO)", product: "INTRADAY", side: "SELL", quantity: 551, buyPrice: "-", sellPrice: "09:13:54@ 5", status: "OPEN", pnl: 1653 },
          { strategy: "DOMAIN TREND(NIFTY)", broker: "angel (A537412)", script: "NIFTY15FEB242000000PE(NFO)", product: "INTRADAY", side: "BUY", quantity: 51, buyPrice: "09:13:54@ 1.2", sellPrice: "-", status: "OPEN", pnl: 0 },
          { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "INTRADAY", side: "BUY", quantity: 10, buyPrice: "09:13:54@ 800", sellPrice: "-", status: "OPEN", pnl: 0 },
          { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "INTRADAY", side: "BUY", quantity: 10, buyPrice: "09:13:54@ 810.95", sellPrice: "09:13:54@ 800", status: "CLOSED", pnl: -109.5 },
          { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "INTRADAY", side: "BUY", quantity: 1, buyPrice: "09:13:54@ 813.25", sellPrice: "-", status: "OPEN", pnl: 0 },
          { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "INTRADAY", side: "BUY", quantity: 1, buyPrice: "09:13:54@ 812.1", sellPrice: "09:13:54@ 0", status: "CLOSING", pnl: 0 },
          { strategy: "DOMAIN TREND(NIFTY)", broker: "iifl (AB046230)", script: "SBIN-EQ(NSE)", product: "MIS", side: "BUY", quantity: 1, buyPrice: "09:13:54@ 802.75", sellPrice: "09:13:54@ 802.1", status: "CLOSED", pnl: -0.65 },
        ],
      };
    },
    computed: {
      totalProfit() {
        return this.positions.reduce((sum, trade) => sum + trade.pnl, 0);
      },
    },
  };
  </script>
  
  <style>
  /* Additional styles if needed */
  </style>
  