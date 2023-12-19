<script setup>
defineProps(['title'])
</script>
<template>
    <section id="about-me" class="bg-bistro">
        <div class="container-fluid">
            <h2
                class="font-titillium font-black text-2xl md:text-4xl lg:text-6xl text-oldLace mb-5 py-4 md:py-6 lg:py-8"
            >
                {{ title }}
            </h2>
        </div>
        <div class="container">
            <div
                class="px-5 py-5 sm:max-w-full md:max-w-2xl lg:max-w-3xl mx-auto text-left font-roboto text-cultured"
            >
                <p class="mb-3">
                   As a driven web developer, I am devoted to achieving pixel perfection in every project. My journey in the tech realm has been marked by a meticulous eye for detail, honed through experiences with semantic HTML, CSS using BEM methodologies, and JavaScript. I am eager to join a team where I can both impart my knowledge and continue to learn from seasoned developers.
                </p>
                <p class="mb-3">
                    My adventure in the UK began in 2014. Initially, I immersed myself in the creative fields as a photographer's assistant and video camera operator, all the while nurturing my aspiration for a career in technology.
                </p>

                <p class="mb-3">
                    Prior to my UK experience, I was engaged as a retail employee and operated a video camera for a local government TV station. Each role has been a stepping stone, enriching my skills and preparing me for the challenges in the ever-evolving world of web development.
                </p>
            </div>
        </div>
    </section>
</template>
