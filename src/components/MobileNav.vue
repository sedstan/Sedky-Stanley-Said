<script setup>
import { reactive, computed } from 'vue';

const links = reactive([
    {
        id: 0,
        name: 'Home',
        page: '/#home',
        emoji: '\ud83c\udfe0',
        navbar: true,
        moreMenu: false,
    },
    {
        id: 1,
        emoji: '\ud83d\udcbc',
        name: 'Projects',
        page: '/#projects',
        navbar: true,
        moreMenu: false,
    },
    {
        id: 2,
        emoji: '\ud83d\udc68',
        name: 'About Me',
        page: '/#about-me',
        navbar: false,
        moreMenu: true,
    },
    // TODO: add accomplishment link
    {
        id: 3,
        emoji: '\ud83d\ude4b',
        name: 'Be Social',
        page: '/#be-social',
        navbar: false,
        moreMenu: true,
    },
]);

const open = () => {
    const btn = document.querySelector('#menu-btn');
    const menu = document.querySelector('#full-menu');

    btn.classList.toggle('active');
    menu.classList.toggle('hidden');
};
const navbarLinks = computed(() => links.filter((l) => l.navbar));

const moreMenu = computed(() => links.filter((l) => l.moreMenu));
</script>

<template>
    <div
        class="lg:hidden bg-barnRed text-oldLace font-black sticky bottom-0 w-full h-14 flex flex-row justify-center items-center align-center z-10"
    >
        <nav
            id="full-menu"
            class="hidden w-full bg-barnRed text-oldLace font-titillium font-black text-2xl md:tex-3xl absolute bottom-14 py-4 border-b border-oldLace"
        >
            <ul class="w-11/12 float-right">
                <li
                    class="border-b-2 border-oldLace text-left mb-12"
                    v-for="link in moreMenu"
                    :key="link.id"
                >
                    <router-link :to="`${link.page}`" v-on:click="open"
                        ><span class="pr-2">{{ link.emoji }}</span>
                        <span class="pl-2">{{ link.name }}</span></router-link
                    >
                </li>
            </ul>
        </nav>
        <nav class="w-2/3 flex-auto">
            <ul class="flex flex-row justify-between">
                <li class="w-full" v-for="link in navbarLinks" :key="link.id">
                    <router-link class="flex-auto w-full" :to="`${link.page}`"
                        ><span class="text-lg">{{ link.emoji }}</span
                        ><br /><span class="text-xs font-black">{{
                            link.name
                        }}</span></router-link
                    >
                </li>
            </ul>
        </nav>
        <button
            id="menu-btn"
            class="w-1/3 flex-auto cursor-pointer text-base focus:outline-none focus:ring-0"
            @click="open()"
        >
            &#x2022; &#x2022; &#x2022;
        </button>
    </div>
</template>
