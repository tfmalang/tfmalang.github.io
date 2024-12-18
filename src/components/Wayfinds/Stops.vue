<script setup>
defineProps({
    exits: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <div class="col-span-3 lg:col-span-6 text-2xl font-bold p-0">
        <template v-for="(exit, i) in exits" :key="i">
            <p v-if="typeof exit === 'string'">{{ exit }}</p>
            <p v-else>
                {{ exit.name }}
                <span v-for="(line, j) in exit.lines" :key="j" class="bg-primary p-1 text-black font-semibold rounded-lg px-4 mx-1 text-xl">
                    {{ line }}
                </span>
            </p>
        </template>
    </div>
</template>