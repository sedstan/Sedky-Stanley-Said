<script setup>
import { reactive, computed } from 'vue';

const links = reactive([
    {
        id: 0,
        name: 'Home',
        page: '/#home',
        emoji: '\ud83c\udfe0',
        notHomeLink: false,
    },
    {
        id: 1,
        emoji: '\ud83d\udcbc',
        name: 'Projects',
        page: '/#projects',
        notHomeLink: true,
    },
    {
        id: 2,
        emoji: '\ud83d\udc68',
        name: 'About Me',
        page: '/#about-me',
        notHomeLink: true,
    },
    // TODO: add accomplishment link
    {
        id: 3,
        emoji: '\ud83d\ude4b',
        name: 'Be Social',
        page: '/#be-social',
        notHomeLink: true,
    }
]);
 
 computed(() => links.filter((l) => l.notHomeLink));
</script>

<template>
    <nav class="lg:w-10/12 lg:flex lg:justify-end lg:items-center">
        <ul class="lg:flex lg:flex-row lg:justify-end">
            <li class="leading-loose lg:mr-16 flex-shrink" v-for="link in links" :key="link.id">
                <router-link
                    class="font-titillium font-black hover:text-barnRed flex flex-col justify-center items-center"
                    :to="`${link.page}`">
                    <span class="text-3xl">{{ link.emoji }}</span><span class="text-lg">{{ link.name }}</span>
                </router-link>
            </li>
        </ul>
    </nav>
</template>
