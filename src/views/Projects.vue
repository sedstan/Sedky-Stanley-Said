<template>
    <section id="#projects" class="bg-copper">
        <div class="container-fluid">
            <h2
                class="font-titillium font-black text-oldLace text-2xl md:text-4xl lg:text-6xl mb-5"
            >
                Projects
            </h2>
        </div>
        <div class="container">
            <ProjectCards />
        </div>
    </section>
</template>

<script>
import ProjectCards from '@/components/ProjectCards'

export default {
    name: 'Projects',
    components: {
        ProjectCards,
    },
}
</script>

<style></style>
