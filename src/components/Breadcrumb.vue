<script setup>
defineProps({
    title: String,
    breads: Array,
})
</script>

<template>
    <section id="breadcrumb" class="max-h-52 !bg-no-repeat !bg-center !bg-cover min-h-[30vh]" style="background: url('banner.jpg')">
        <div class="bg-slate-900/60 text-right py-20 text-white pr-8 h-full max-h-52">
            <h2 class="font-bold text-xl" v-text="title"></h2>
            <div>
                <router-link v-scroll-to="`#app`" :to="bread.to" v-for="(bread, i) in breads" :key="i">
                    {{ bread.name }}
                    <i class="mdi mdi-chevron-right mr-1" v-if="1 + i < breads.length"></i>
                </router-link>
            </div>
        </div>
    </section>
</template>