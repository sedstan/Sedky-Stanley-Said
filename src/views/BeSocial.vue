<script setup>
import SocialLinks from '@/components/SocialLinks'
</script>

<template>
    <section id="be-social" class="bg-barnRed">
        <div
            class="container-fluid font-titillium text-oldLace mb-5 py-4 md:py-6 lg:py-8"
        >
            <h2 class="font-black text-2xl md:text-4xl lg:text-6xl mb-5">
                Be Social
            </h2>
            <h4 class="font-bold text-lg md:text-xl lg:text-2xl">Let's chat</h4>
        </div>
        <div class="container pb-5">
            <SocialLinks />
        </div>

        <div class="container pb-5">
            <a
                class="text-oldLace visited:text-cultured font-roboto font-bold no-underline"
                href="mailto:sed@sedkystanleysaid.com?subject=Hello"
                target="_blank"
                rel="noopener noreferrer"
                >&#128231; sed@sedkystanleysaid.com</a
            >
        </div>
    </section>
</template>
