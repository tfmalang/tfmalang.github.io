<script setup>
import Base from '../Layouts/Base.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
</script>

<template>
    <Base>
        <Breadcrumb
            title="Tentang kami"
            :breads="[
                {
                    to: '/',
                    name: 'Beranda',
                },
                {
                    to: '/about',
                    name: 'Tentang',
                },
            ]"
        />

        <section id="about" class="p-8 lg:p-16 min-h-screen">
            <h1 class="text-4xl font-bold">Tentang Kami</h1>

            <div class="prose mt-4 max-w-full">
                <div class="flex gap-8 flex-col-reverse md:flex-row">
                    <div class="flex-1">
                        <p class="text-lg mb-6">
                            Forum Diskusi Transportasi Malang (FDTM) adalah inisiatif independen
                            yang bertujuan untuk meningkatkan kesadaran masyarakat tentang
                            pentingnya sistem transportasi yang berkelanjutan di Kota Malang.
                        </p>

                        <p class="mb-4">
                            Kami adalah komunitas non-komersial yang terdiri dari warga Malang yang
                            peduli terhadap masa depan transportasi kota. Platform ini didirikan
                            pada tahun 2024 sebagai wadah untuk berbagi informasi, diskusi, dan
                            edukasi mengenai berbagai alternatif transportasi yang tersedia di
                            Malang.
                        </p>

                        <div class="bg-blue-50 border-l-4 border-blue-400 p-4 my-6">
                            <p class="text-sm font-semibold text-blue-800 mb-2">Catatan Penting:</p>
                            <p class="text-sm text-blue-700">
                                FDTM adalah komunitas non-komersial yang dijalankan secara
                                independen oleh masyarakat. Kami tidak berafiliasi dengan
                                pemerintah, stakeholder komersial, atau pihak manapun yang memiliki
                                kepentingan bisnis dalam bidang transportasi. Seluruh informasi dan
                                pandangan yang disajikan murni berdasarkan kepedulian terhadap
                                kemajuan transportasi publik di Malang.
                            </p>
                        </div>
                    </div>
                    <img src="../assets/icon.png" alt="Logo FDTM" class="max-h-48 max-w-[12rem]" />
                </div>
            </div>

            <h2 class="text-3xl font-semibold mt-12">Visi Kami</h2>

            <div class="prose mt-4">
                <p class="text-lg mb-6">
                    Mewujudkan Kota Malang yang lebih berkelanjutan melalui peningkatan kesadaran
                    masyarakat akan pentingnya transportasi umum yang berkualitas.
                </p>

                <h3 class="text-2xl font-semibold mt-8 mb-4">Misi Kami</h3>
                <ul class="list-disc pl-6 space-y-2">
                    <li>
                        Menyediakan informasi yang akurat dan terkini tentang opsi transportasi di
                        Kota Malang
                    </li>
                    <li>
                        Mendorong diskusi konstruktif mengenai pengembangan sistem transportasi yang
                        ramah lingkungan
                    </li>
                    <li>
                        Meningkatkan kesadaran masyarakat akan manfaat transportasi umum bagi
                        kualitas hidup dan lingkungan
                    </li>
                    <li>
                        Menjadi jembatan informasi antara pengguna transportasi dan penyedia layanan
                    </li>
                </ul>

                <h3 class="text-2xl font-semibold mt-8 mb-4">Mengapa Transportasi Umum Penting?</h3>
                <p class="mb-4">
                    Sistem transportasi umum yang baik dapat memberikan dampak positif yang
                    signifikan bagi kota:
                </p>
                <ul class="list-disc pl-6 space-y-2 mb-6">
                    <li>
                        <strong>Lingkungan:</strong> Mengurangi emisi gas rumah kaca dan polusi
                        udara
                    </li>
                    <li>
                        <strong>Ekonomi:</strong> Menghemat biaya transportasi individu dan
                        meningkatkan produktivitas kota
                    </li>
                    <li>
                        <strong>Sosial:</strong> Memberikan akses mobilitas yang merata untuk
                        seluruh lapisan masyarakat
                    </li>
                    <li>
                        <strong>Kesehatan:</strong> Mendorong aktivitas fisik dan mengurangi stres
                        berkendara
                    </li>
                    <li>
                        <strong>Kemacetan:</strong> Mengurangi volume kendaraan pribadi di jalan
                        raya
                    </li>
                </ul>

                <div class="bg-green-50 border border-green-200 rounded-lg p-6 my-8">
                    <h4 class="text-xl font-semibold text-green-800 mb-3">
                        Bergabunglah dengan Kami
                    </h4>
                    <p class="text-green-700">
                        Kami mengundang seluruh masyarakat Malang untuk berpartisipasi dalam diskusi
                        dan berbagi pengalaman dengan transportasi umum.
                    </p>
                </div>
            </div>
        </section>
    </Base>
</template>
