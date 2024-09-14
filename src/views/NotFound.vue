<script setup>
import Button from '../components/Button.vue'
</script>

<template>
    <div class="min-h-screen w-full flex items-center justify-center">
        <div class="text-center">
            <i class="mdi mdi-alert-circle-outline text-9xl text-fdtm" />

            <h1 class="text-4xl font-bold mb-2">Upps!</h1>
            <p class="text-lg mb-4">Halaman yang anda tidak ditemukan</p>

            <router-link to="/">
                <Button>
                    <i class="mdi mdi-home"></i>
                    Kembali ke Beranda
                </Button>
            </router-link>
        </div>
    </div>
</template>