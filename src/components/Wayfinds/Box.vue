<script setup>
defineProps({
    color: {
        type: String,
        default: 'primary',
    },
})
</script>

<template>
    <div :class="{
        'bg-primary': color === 'primary',
        'bg-secondary': color === 'secondary',
    }" class="p-2 md:p-4 aspect-square max-w-sm flex items-center justify-center">
        <slot />
    </div>
</template>