<template>
    <div class="dashboard h-[100vh] w-full flex">

        <!-- this is navigation  -->
        <div class="nav h-[100vh] w-[20%] bg-black">
            <div class="logo h-16 w-full border-2 border-[#292424] flex items-center justify-center">
                <img src="../assets/future.svg" alt="Logo" class="max-h-full max-w-full object-contain">
            </div>

            <div class="menu text-white flex flex-col items-center gap-6 mt-8">
                <RouterLink to="/dashboard"
                    class="block py-3 px-6 w-[95%] text-center hover:bg-gray-700 rounded-lg transition-all duration-200">
                    Dashboard</RouterLink>

                <RouterLink to="/mystrategies"
                    class="block w-[90%] h-12 p-2.5 hover:bg-gray-600 text-center transition-all duration-180 rounded-lg mx-auto">
                    My Strategies
                </RouterLink>
                
                <RouterLink to="/strategies"
                    class="block w-[90%] h-12 p-2.5 hover:bg-gray-600 text-center transition-all duration-180 rounded-lg mx-auto">
                    Strategies
                </RouterLink>

                <RouterLink to="/broker"
                    class="block w-[90%] h-12 p-2.5 hover:bg-gray-600 text-center transition-all duration-180 rounded-lg mx-auto">
                    Broker
                </RouterLink>

                <RouterLink to="/position"
                    class="block w-[90%] h-12 p-2.5 hover:bg-gray-600 text-center transition-all duration-180 rounded-lg mx-auto">
                    Position
                </RouterLink>

                <RouterLink to="/order"
                    class="block w-[90%] h-12 p-2.5 hover:bg-gray-600 text-center transition-all duration-180 rounded-lg mx-auto">
                    Order
                </RouterLink>

                <RouterLink to="/videos"
                    class="block w-[90%] h-12 p-2.5 hover:bg-gray-600 text-center transition-all duration-180 rounded-lg mx-auto">
                    Videos
                </RouterLink>

                <div class="surprise-card bg-[#8B7EFF] h-30 w-[90%] rounded-lg"></div>
            </div>
        </div>

        <!-- this is dashboard  -->
        <div class="main h-[100vh] w-[80%] bg-[#292424]">
            <div class="header h-[8.5%] w-full border-2 border-[#3F3F3F] bg-black flex items-center justify-between">
                <div class="name w-36">
                    <h1 class="text-white font-bold text-2xl ml-2 w-[200px]">Hello Aditya</h1>
                </div>
                <div class="user-link h-7 w-[300px] mr-2">
                    <button class="addbroker h-full w-[30%] text-white border-1 border-white rounded-sm">Add
                        Broker</button>
                    <button
                        class="addbroker h-full w-[20%] text-white border-1 hover:border-amber-200 border-black rounded-sm ml-2">🔔</button>
                    <button
                        class="addbroker h-full w-[20%] text-white border-1 hover:border-amber-200 border-black rounded-sm ml-2">Profile</button>
                </div>
            </div>
            <div class="displaycontent overflow-y-auto h-[91.5%]">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script setup>
import Broker from '@/views/Broker.vue';
import { RouterView } from 'vue-router';


</script>

<style lang="scss" scoped>
.displaycontent {
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
  scrollbar-width: none;  /* Firefox */
}
</style>