<script setup>
import Arrow from '../components/Wayfinds/Arrow.vue'
import Base from '../Layouts/Base.vue'
import Box from '../components/Wayfinds/Box.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import ExitUM from '../components/Icons/ExitUM.vue'
import ExitText from '../components/Wayfinds/ExitText.vue'
import Library from '../components/Icons/Library.vue'
import MultiLanguage from '../components/Wayfinds/MultiLanguage.vue'
import Stops from '../components/Wayfinds/Stops.vue'
import Teach from '../components/Icons/Teach.vue'
import Walk from '../components/Wayfinds/Walk.vue'
import { links, wayfindings } from '../data'
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const id = useRoute().params.wayfinding,
    location = wayfindings.find(loc => loc.id === id)

if (! location) {
    const router = useRouter()
    router.push('/404')
}
</script>

<template>
    <Base>
        <Breadcrumb :title="location.title" :breads="[{
            to: '/',
            name: 'Beranda',
        }, {
            to: '/wayfindings',
            name: 'Wayfinding',
        }, {
            to: `/wayfindings/${location.id}`,
            name: location.title,
        }]" />

        <section id="wayfinding" class="p-8 lg:p-16">
            <h1 class="text-center text-4xl font-bold my-3">{{ location.title }}</h1>
        </section>

        <section id="detail" class="bg-black font-wayfinding">
            <article v-for="(direction, i) in location.directions" :key="i" :class="{
                'text-primary': direction.color === 'primary',
                'text-secondary': direction.color === 'secondary',
            }" class=""
            :dir="direction.rtl ? 'rtl' : 'ltr'">
                <template v-if="i > 0">
                    <hr class="border-gray-300" :class="{
                        'border-t-2': direction.rotate != location.directions[i - 1].rotate,
                    }" />
                </template>

                <div class="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-12 items-center gap-6 md:gap-8 p-4 md:px-8 md:py-6">
                    <template v-for="(content, j) in direction.contents" :key="j">
                        <Arrow v-if="content.type == 'arrow'" :color="direction.color" :rotate="direction.rotate" :previous="location.directions[i - 1]?.rotate" />

                        <!-- box -->
                        <Box v-if="content.type == 'box'" :color="direction.color">
                            <ExitUM v-if="content.context == 'exit-um'" />
                            <Teach v-if="content.context == 'lecture-building'" />
                            <Library v-if="content.context == 'library'" />
                            <span v-if="content.context == 'number'" class="text-black font-extrabold text-4xl">{{ content.value }}</span>
                        </Box>

                        <ExitText v-if="content.type == 'exit-text'" />

                        <MultiLanguage v-if="content.type == 'building'" class="md:col-span-2" id="Gedung" en="Building" />
                        
                        <MultiLanguage v-if="content.type == 'multilang'" class="md:col-span-3" :id="content.id" :en="content.en" />

                        <Stops v-if="content.type == 'exits'" :exits="content.values" />

                        <p class="text-4xl col-span-3 font-bold" v-if="content.type == 'large-text'">{{ content.value }}</p>

                        <Walk v-if="content.type == 'walk'" :distance="content.distance" />
                    </template>
                </div>
            </article>
        </section>
    </Base>
</template>