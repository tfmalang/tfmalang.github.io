<script setup>
import Breadcrumb from '../components/Breadcrumb.vue'
</script>

<template>
    <Breadcrumb title="Tentang kami" :breads="[{
        to: '/',
        name: 'Beranda',
    }, {
        to: '/about',
        name: 'Tentang',
    }]" />

    <section id="about" class="p-8 lg:p-16 min-h-screen">
        <h1 class="text-4xl font-bold">Latar belakang</h1>
        
        <div class="prose mt-4 max-w-full">
            <div class="flex gap-8 flex-col-reverse md:flex-row">
                <p>
                    Forum Diskusi Transportasi Malang (FDTM) merupakan sebuah wadah diskusi yang berfokus pada isu-isu transportasi di Kota Malang.
                    FDTM berdiri pada tahun 2024 dengan bahasan utama berupa isu transportasi.
                    FDTM berkomitmen untuk memberikan informasi yang akurat dan terkini untuk meningkatkan kesadaran masyarakat tentang lebih masifnya opsi bertransportasi di dalam kota.
                </p>
                <img src="../assets/icon.png" alt="Eurasia" class="max-h-48 max-w-[12rem]">
            </div>
        </div>
        
        <h2 class="text-3xl font-semibold mt-12">Meningkatkan kualitas hidup melalui transportasi umum</h2>

        <div class="prose mt-4">
            <p>
                Dengan hadirnya FDTM, diharapkan masyarakat Kota Malang dapat lebih memahami urgensi hadirnya transportasi massal.
            </p>

            <p>
                Keberadaan transportasi massal dapat mengubah kota yang lebih ramah lingkungan, lebih aman, dan lebih nyaman bagi masyarakatnya.
            </p>
        </div>
        <!-- <div class="flex flex-col md:flex-row gap-6 mt-4 max-w-full">
            <div class="flex items-center justify-center">
                <img src="../assets/reals.png" alt="REALS" class="max-h-48" />
            </div>
        </div> -->
    </section>
</template>