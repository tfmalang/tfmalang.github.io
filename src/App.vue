<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="md:mt-20">
      <router-view :key="$route.fullPath" />
    </main>
    <Footer />
  </div>
</template>
