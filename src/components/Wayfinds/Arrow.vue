<script setup>
const props = defineProps({
    color: {
        type: String,
        default: 'primary'
    },
    rotate: {
        type: Number,
        default: 0,
    },
    previous: {
        type: Number,
    }
});

const hidden = props.rotate === props.previous;
</script>

<template>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd" viewBox="0 0 157 152.74" xmlns:xlink="http://www.w3.org/1999/xlink" :style="{
        rotate: `${rotate}deg`
    }" v-if="! hidden">
        <g id="Layer_x0020_1">
            <path :class="{
                'fill-primary': color === 'primary',
                'fill-secondary': color === 'secondary',
            }" style="fill-rule: nonzero;" d="M60.08 147.56c6.06,6.55 16.29,6.95 22.84,0.89 6.55,-6.06 6.95,-16.29 0.89,-22.84l-30.53 -32.99 87.47 0c8.97,0 16.24,-7.27 16.24,-16.24 0,-8.97 -7.27,-16.24 -16.24,-16.24l-87.47 0 30.53 -32.99c6.06,-6.55 5.66,-16.78 -0.89,-22.84 -6.55,-6.06 -16.78,-5.66 -22.84,0.89l-54.63 59.05c-3.34,2.97 -5.45,7.31 -5.45,12.13 0,4.82 2.11,9.16 5.45,12.13l54.63 59.05z"/>
        </g>
    </svg>

    <span v-if="hidden"></span>
</template>