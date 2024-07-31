<script setup>
import { ref } from 'vue'
import Sider from './Sider.vue'

const sidebar = ref(false)

const determineOverflow = () => {
    document.querySelector('body').style.overflow = sidebar.value ? 'hidden' : null
}

const toggleSidebar = () => {
    sidebar.value = ! sidebar.value
    determineOverflow()
}

const closeSidebar = () => {
    sidebar.value = false
    determineOverflow()
}

const menus = [{
    to: '/',
    text: 'Beranda'
}, {
    to: '/about',
    text: 'Tentang'
}, {
    to: '/links',
    text: 'Link cepat'
}]
</script>

<template>
    <nav class="fixed top-0 z-30 h-16 md:h-20 w-72 md:w-full flex items-center gap-6 px-4 md:px-8 py-3 bg-slate-100 rounded-br-2xl md:rounded-none shadow-lg">
        <button type="button" @click="toggleSidebar()" @keydown.esc="closeSidebar()" class="inline md:hidden">
            <i class="mdi mdi-dots-grid text-xl" />
        </button>

        <router-link v-scroll-to="`#app`" to="/" @click="closeSidebar()">
            <img src="../assets/tfm-fdtm.png" class="h-6 md:h-8" />
        </router-link>

        <!-- move it to right -->
        <div class="hidden ml-auto md:flex">
            <Sider :menus="menus" />
        </div>
    </nav>

    <div v-if="sidebar" @click="closeSidebar()" class="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
    <Transition name="slide-fade" mode="in-out" :duration="{ enter: 500, leave: 800 }">
        <aside
        v-if="sidebar"
        class="fixed left-0 z-20 h-screen w-56 pt-20 bg-slate-50 shadow overflow-y-auto">
            <Sider :menus="menus" />
        </aside>
    </Transition>
    
</template>