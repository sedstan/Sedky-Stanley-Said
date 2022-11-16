<script setup>

defineProps({ name: String, title: String });
const isMobile = () => {
    if (window.matchMedia('(min-width: 320px').matches) {
        return true
    } else {
        return false
    }
};
const isTablet = () => {
    if (window.matchMedia('(min-width: 768px').matches) {
        return true
    } else {
        return false
    }
};
const isDesktop = () => {
    if (window.matchMedia('(min-width: 1024px)').matches) {
        return true
    } else {
        return false
    }
};
</script>

<template>
    <div class="flex justify-center align-center flex-col items-center">
        <img v-if="isDesktop()"
            src="https://sed-stan-personal-site.s3.eu-west-1.amazonaws.com/images/laptop-stickers-1920.webp"
            alt="A laptiop with stickers on it." width="1920" height="1440" />
        <img v-else-if="isTablet()"
            src="https://sed-stan-personal-site.s3.eu-west-1.amazonaws.com/images/laptop-stickers-1280.webp"
            alt="A laptiop with stickers on it." width="1280" height="960" />
        <img v-else-if="isMobile()" src="https://sed-stan-personal-site.s3.amazonaws.com/images/laptop-stickers-640.webp"
            alt="A laptop with stickers on it." width="640" height="480" />
        <div class="container absolute font-titillium text-oldLace pb-12">
            <img class="border border-oldLace bg-barnRed rounded-full w-24 md:w-36 lg:w-40 h-auto mx-auto mb-9 mt-10 md:mt-0"
                src="https://sed-stan-personal-site.s3.amazonaws.com/images/head-shot-transparent-smaller.webp"
                alt="A headshot of a man." width="160" height="160" />
            <h1 class="font-black text-3xl md:text-6xl lg:text-7xl mb-3">
                {{ name }}
            </h1>
            <h2 class="font-bold text-2xl md:text-4xl lg:text-6xl">
                {{ title }}
            </h2>
        </div>
    </div>
</template>
