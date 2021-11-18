<template>
    <section id="projects" class="bg-copper">
        <div class="container-fluid font-titillium text-oldLace mb-8 py-4 md:py-6 lg:py-8">
            <h2
                class="font-black  text-2xl md:text-4xl lg:text-6xl mb-5"
            >
                Projects
            </h2>
            <h4 class="font-bold text-lg md:text-xl lg:text-2xl">My last 10 repos</h4>
        </div>
        <div class="container">
            <Carousel />
        </div>
    </section>
</template>

<script>
import Carousel from '@/components/Carousel'

export default {
    name: 'Projects',
    title: 'Projects',
    components: {
        Carousel,
    },
}
</script>

<style></style>
