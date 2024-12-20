<script setup>
import { ref, nextTick } from 'vue'
import Button from '../components/Button.vue'
import { chibiconGames } from '../data'

const time = ref(60)

const play = ref({
    started: false,
    type: null,
    games: null,
    currentPlay() {
        return this.games[this.index]
    },
    index: 0,
    score: 0
})

const timer = ref(undefined)

const resetTimer = () => {
    // time.value = 60
    determineGame()

    // check whether timer interval already play
    intervalClear()
}

const intervalClear = () => {
    if (timer.value != undefined) {
        clearInterval(timer.value)
    }
}

const startTimer = () => {
    // replace timer with new interval
    timer.value = setInterval(() => {
        time.value--

        if (time.value === 0) {
            intervalClear()
            determineGame()
        }
    }, 1000)
}

const formattedTime = () => {
    const minutes = Math.floor(time.value / 60)
    const seconds = time.value % 60

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

const randomized = (array) => {
    return array.sort(() => Math.random() - 0.5)
}

const sortAndReset = (duration=60) => {
    play.value.games = randomized(play.value.games)
    play.value.index = 0
    play.value.started = true

    intervalClear()

    time.value = duration
    startTimer()

    enableFocus()
}

const inputRefs = ref([]);

const handleKeyup = (index, event) => {
    if (event.key === 'Backspace' && event.target.value === '' && index > 0) {
        inputRefs.value[index - 1].focus();
        return;
    }

    event.target.value = event.target.value.toUpperCase();

    if (event.target.value.length === 1 && index < inputRefs.value.length - 1) {
        inputRefs.value[index + 1]?.focus();
    }

    // check if the answer is correct after final input refs
    if (index === play.value.currentPlay().answer.length - 1) {
        const answer = inputRefs.value.map(input => input?.value).join('')
        if (answer == play.value.currentPlay().answer) {
            play.value.score++
            play.value.index++

            if (play.value.index === play.value.games.length) {
                determineGame()
            } else {
                enableFocus()
            }
        }
    }
};

const enableFocus = () => {
    inputRefs.value = Array(play.value.currentPlay().answer?.length)
    nextTick(() => {
        inputRefs.value.forEach(input => {
            if (input) input.value = '';
        });
        if (inputRefs.value[0]) inputRefs.value[0].focus();
    });
}

const determineGame = () => {
    switch (play.value.type) {
        case null:
            play.value.type = 'images'
            play.value.games = chibiconGames.images
            sortAndReset()
            break;
        case 'images':
            play.value.type = 'shuffles'
            play.value.games = chibiconGames.shuffles
            sortAndReset()
            break;
        case 'shuffles':
            play.value.type = 'guess'
            play.value.games = chibiconGames.guess

            play.value.games.forEach(game => {
                game.options = randomized(game.options)
            })
            sortAndReset(90)
            break;
        case 'guess':
            play.value.type = 'bonus'
            intervalClear()
            break;
        case 'bonus':
            play.value.type = 'finished'
            break;
        default:
            play.value.type = play.value.games = null
            play.value.started = false
            play.value.score = 0
            break;
    }
}

const handleShuffles = (event) => {
    // turn value into uppercase
    const input = event.target.value.toUpperCase()

    if (event.key === 'Enter') {

        if (input.length >= 3 && input.length <= play.value.currentPlay().word.length) {
            const answers = play.value.currentPlay().answers;
            
            if (answers.includes(input) && !inputRefs.value.includes(input)) {
                play.value.score++

                inputRefs.value.push(input)

                event.target.value = ''

                if (answers.length == inputRefs.value.length) {
                    play.value.index++

                    if (play.value.index === play.value.games.length) {
                        determineGame()
                    } else {
                        enableFocus()
                    }
                }
            }
        }
    }
};

const validateGuess = () => {
    const correctAnswers = play.value.currentPlay().options.filter(option => option.selected).map(option => option.value)
    const answers = play.value.currentPlay().answers

    if (correctAnswers.length === answers?.length && correctAnswers?.every(answer => answers.includes(answer))) {
        play.value.score += answers.length
    }

    play.value.currentPlay().options.forEach(option => option.selected = false)

    play.value.index++

    if (play.value.index === play.value.games?.length) {
        determineGame()
    }
}

const startGame = () => {
    determineGame()
}
</script>

<template>
    <div class="min-h-screen w-full flex items-center justify-center font-wayfinding">
        <!-- play button -->
        <Button @click="startGame" class="bg-fdts text-white border-none px-8" v-show="! play.started">
            <p class="text-xl">
                Play!
                <i class="mdi mdi-play text-xl"></i>
            </p>
        </Button>

        <!-- timer -->
        <div v-show="play.started" class="fixed top-3 right-3 flex items-center justify-center gap-4">
            <p class="text-xl font-bold text-fdts">{{ formattedTime() }}</p>

            <p class="text-xl p-2 bg-fdts text-white rounded-lg aspect-square">
                {{ play.score }}
                <!-- / {{ play.games.length }} -->
            </p>
            <!-- reset button -->
            <!-- <Button @click="resetTimer" class="bg-fdts text-white border-none">
                <i class="mdi mdi-replay"></i>
            </Button> -->
        </div>
        <!-- end timer -->

        <!-- game container -->
        <div v-show="play.started" class="flex items-center justify-center">
            <div v-if="play.type == 'images'" class="flex flex-col items-center justify-center gap-4">
                <img :src="play.currentPlay().image" alt="" class="max-w-sm max-h-60" />
                
                <h3 class="text-xl font-semibold" v-text="play.currentPlay().question"></h3>

                <!-- the answer should be in boxes (input) that can be removed using backspace and auto submitted when complete -->
                <div class="flex items-center justify-center gap-2">
                    <input type="text"
                        class="border-b-2 border-fdts text-center w-10 text-lg text-fdts ring-fdts"
                        v-for="(c, i) in play.currentPlay().answer.length"
                        :key="i"
                        :ref="el => inputRefs[i] = el"
                        @keyup="handleKeyup(i, $event)"
                        maxlength="1"
                        :autofocus="i === 0"
                        />
                </div>
            </div>

            <!-- Shuffle -->
            <div v-if="play.type == 'shuffles'" class="flex flex-col items-center justify-center">
                <h3 class="text-xl font-semibold" v-text="'Buat susunan kata (minimal 3 huruf) dari kata acak berikut!'"></h3>

                <div class="flex items-center justify-center gap-2">
                    <p class="text-2xl font-semibold" v-for="(c, i) in play.currentPlay().word" :key="i">
                        {{ c }}
                    </p>
                </div>

                <!-- input -->
                <input type="text" class="border-b-2 border-fdts text-center text-lg text-fdts ring-fdts my-4" @keypress="handleShuffles" />

                <!-- already guessed -->
                <ol class="text-xl list-decimal grid grid-cols-2 w-full">
                    <li v-for="(answer, i) in inputRefs.filter(input => input && input.trim() != '')" :key="i" v-text="answer"></li>
                </ol>
            </div>

            <!-- Guess -->
            <div v-if="play.type == 'guess'" class="flex flex-col items-center justify-center gap-4 min-w-max">
                <h3 class="text-xl font-semibold" v-text="play.currentPlay().question"></h3>

                <!-- select option using boxes, it can be multiple -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div v-for="(option, i) in play.currentPlay().options" :key="i" :class="{
                        'p-4 rounded-lg hover:bg-fdts/70 text-xl cursor-pointer': true,
                        'bg-fdts text-white border-none': option.selected == true,
                        'bg-white border border-fdts text-fdts': option.selected == false
                    }" @click="option.selected = !option.selected">
                        {{ option.value }}
                    </div>
                </div>

                <!-- submit -->
                <Button @click="validateGuess" class="bg-fdts text-white border-none mt-4">
                    Submit
                </Button>
            </div>

            <!-- Bonus -->
            <div v-if="play.type == 'bonus'" class="flex flex-col items-center justify-center gap-4">
                <h3 class="text-xl font-semibold" v-text="'Nang endi kursi oren saiki?'"></h3>

                <textarea cols="30" rows="10" class="border-2 border-fdts text-center text-lg text-fdts ring-fdts my-4 w-96 h-48"></textarea>

                <!-- submit -->
                <Button @click="determineGame" class="bg-fdts text-white border-none mt-4">
                    Submit
                </Button>
            </div>

            <div v-if="play.type == 'finished'" class="flex flex-col items-center justify-center gap-4">
                <h3 class="text-xl font-semibold" v-text="'Skor terakhirmu:'"></h3>

                <p class="text-2xl font-semibold text-fdts border-fdts p-4" v-text="play.score"></p>

                <!-- Main maneh! -->
                <Button @click="determineGame" class="bg-fdts text-white border-none mt-4">
                    Main maneh!
                </Button>
            </div>
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