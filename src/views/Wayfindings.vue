<script setup>
import Base from '../Layouts/Base.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import Button from '../components/Button.vue'
import { links, wayfindings } from '../data'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const wayfindingLocations = [
    { id: 1, lat: -7.961012, lng: 112.617277, title: 'Lokasi 1', route: '/lokasi-1' },
    { id: 2, lat: -7.978908, lng: 112.631391, title: 'Lokasi 2', route: '/lokasi-2' },
    { id: 3, lat: -7.973908, lng: 112.641391, title: 'Lokasi 3', route: '/lokasi-3' }
]

onMounted(() => {
    const map = L.map('map').setView([-7.983908, 112.621391], 13)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'FDTM'
        // attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)

    const router = useRouter()

    wayfindings.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(`<a href="#" class="router-link" data-route="${location.route}">${location.title}</a>`)
    })

    map.on('popupopen', function(e) {
        const link = e.popup._contentNode.querySelector('.router-link')
        if (link) {
            link.addEventListener('click', (event) => {
                event.preventDefault()
                router.push(link.getAttribute('data-route'))
            })
        }
    })
})
</script>

<template>
    <Base>
        <Breadcrumb title="Sebaran Wayfinding" :breads="[{
            to: '/',
            name: 'Beranda',
        }, {
            to: '/wayfindings',
            name: 'Wayfinding',
        }]" />

        <section id="wayfindings" class="p-8 lg:p-16 min-h-screen">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold mb-4 mt-4">Gerilya Penyebaran Wayfinding FDTM</h1>
                <p class="text-lg">Kami melakukan inisiasi untuk menyebar informasi berupa penunjuk arah untuk memudahkan navigasi umak di Malang.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="bg-fdtm text-white p-6 rounded-xl shadow-sm">
                    <h2 class="text-2xl font-semibold mb-6">Lokasi Strategis</h2>
                    <p>Wayfinding ditempatkan di lokasi-lokasi strategis untuk memberikan kemudahan bagi warga untuk dengan mudah menemukan arah.</p>
                </div>
                <div class="bg-white p-6 rounded-xl shadow-sm">
                    <h2 class="text-2xl font-semibold mb-6">Desain Informatif</h2>
                    <p>Desain wayfinding yang informatif untuk memberikan pengalaman visual yang menyenangkan.</p>
                </div>
                <div class="bg-fdtm text-white p-6 rounded-xl shadow-sm">
                    <h2 class="text-2xl font-semibold mb-6">Informasi Lengkap</h2>
                    <p>Setiap wayfinding dilengkapi dengan informasi lengkap mengenai lokasi dan arah tujuan.</p>
                </div>
            </div>

            <div class="mt-8">
                <h2 class="text-2xl font-semibold mb-4">Peta Lokasi Wayfinding</h2>
                <div id="map" class="w-full h-96"></div>
            </div>
        </section>
    </Base>
</template>