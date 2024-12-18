<script setup>
defineProps({
    id: String,
    en: String,
})
</script>
<template>
    <div>
        <span class="text-4xl font-bold">
            {{ id }}
        </span><br>
        <span class="text-xl">
            {{ en }}
        </span>
    </div>
</template>