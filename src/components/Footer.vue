<script setup>
import { contacts, socials } from "../data";
</script>

<template>
    <footer class="bg-fdtm text-white !bg-no-repeat !bg-center !bg-cover" style="background: url('banner.jpg')">
        <div class="bg-fdtm/75 h-full p-8 md:p-12 grid grid-cols-1 md:grid-cols-6 gap-8">
            <div class="md:col-span-3 flex items-center justify-center">
                <img src="../assets/fdtm-white.png" alt="REALS" class="max-h-12">
            </div>

            <div class="md:col-span-3">
                <h2 class="text-3xl border-l-4 border-white font-bold pl-3 mb-5">Terhubung dengan kami:</h2>

                <div>
                    <p class="mb-4" v-for="(contact, i) in contacts" :key="i">
                        <a :title="contact.name" :href="contact.href" target="_blank">
                            <i :class="contact.icon"></i> <span v-text="contact.text"></span>
                        </a>
                    </p>

                    <div class="flex gap-4 mt-4">
                        <a v-for="(social, i) in socials" :key="i" :title="social.title" :href="social.href" class="p-2 text-fdtm bg-slate-100 rounded-full w-10 aspect-square flex items-center justify-center hover:text-slate-50 hover:bg-fdtm">
                            <i :class="social.icon"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <section id="credits" class="flex justify-center py-8 px-4">
        Copyright © 2024 Forum Diskusi Transportasi Malang (FDTM) - Transport for Malang
    </section>
</template>