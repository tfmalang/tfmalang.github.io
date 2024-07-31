<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
import Button from '../components/Button.vue'
import { links } from '../data'
</script>

<template>
    <Breadcrumb title="Link Kami" :breads="[{
        to: '/',
        name: 'Beranda',
    }, {
        to: '/links',
        name: 'Link',
    }]" />

    <section id="about" class="p-8 lg:p-16 min-h-screen">
        <div class="grid md:grid-cols-2 gap-8">
            <a v-for="(link, i) in links" :key="i" :href="link.url">
                <Button class="w-full min-h-[4rem] text-lg flex items-center gap-x-4">
                    <i :class="`mdi ${link.icon}`" />
                    <span v-text="link.name" />
                </Button>
            </a>
        </div>
    </section>
</template>