<script setup>
import { ref } from 'vue'
import Button from '../components/Button.vue'

const time = ref(60)

const started = ref(false)

const timer = ref(undefined)

const resetTimer = () => {
    time.value = 60
    started.value = false

    // check whether timer interval already started
    if (timer.value != undefined) {
        clearInterval(timer.value)
    }
}

const startTimer = () => {
    started.value = true

    // replace timer with new interval
    timer.value = setInterval(() => {
        time.value--

        if (time.value === 0) {
            // if value already 0, delay for 10 second before reset timer
            setTimeout(() => {
                resetTimer()
            }, 10000)
            
            clearInterval(timer.value)
        }
    }, 1000)
}

const formattedTime = () => {
    const minutes = Math.floor(time.value / 60)
    const seconds = time.value % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}
</script>

<template>
    <div class="min-h-screen w-full flex items-center justify-center">
        <!-- play button -->
        <Button @click="startTimer" class="bg-fdts text-white border-none px-8" v-show="! started">
            <p class="text-xl">
                Play!
                <i class="mdi mdi-play text-xl"></i>
            </p>
        </Button>

        <div v-show="started" class="flex items-center gap-6">
            <!-- countdown -->
            <p class="text-8xl font-bold text-fdts">{{ formattedTime() }}</p>
            <!-- reset button -->
            <Button @click="resetTimer" class="bg-fdts text-white border-none">
                <i class="mdi mdi-replay"></i>
            </Button>
        </div>
    </div>

    <!-- Footer -->
    <div class="fixed bottom-5 left-0 right-0">
        <!-- create line 80% -->
        <div class="flex items-center justify-center gap-6 mx-6">
            <div class="w-full h-1 bg-fdts"></div>

            <!-- insert fdts logo from assets -->
            <img src="../assets/fdts.png" alt="fdts" class="h-10" />
            <img src="../assets/tfs.png" alt="tfs" class="h-8" />
        </div>
    </div>
    <!-- End footer -->
</template>