<script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
</script>

<template>
  <div>
    <Navbar />
    <main class="md:mt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>
