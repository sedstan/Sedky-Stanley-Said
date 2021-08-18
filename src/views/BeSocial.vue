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
    </section>
</template>

<script>
import SocialLinks from '@/components/SocialLinks'
export default {
    name: 'BeSocial',
    title: 'Be Social',
    components: {
        SocialLinks
    }
}
</script>

<style></style>
