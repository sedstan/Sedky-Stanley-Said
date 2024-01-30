<script setup>
import Header from '@/components/Header'
import HeaderSkeleton from '@/components/HeaderSkeleton'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import AboutMe from '@/views/AboutMe.vue'
import BeSocial from '@/views/BeSocial.vue'
import Footer from '@/components/Footer.vue'
import MobileNav from '@/components/MobileNav.vue'
</script>

<template>
    <!-- Header -->
    <Suspense>
        <template #default>
            <Header />
        </template>
        <template #fallback>
            <HeaderSkeleton />
        </template>
    </Suspense>
    <!-- Main -->
    <main>
        <Home />
        <Projects title="Projects" subtitle="Selected Projects" />
        <AboutMe title="About Me" />
        <BeSocial title="Be Social" subtitle="Let's Chat" />
    </main>
    <!-- Footer -->
    <Footer />
    <!-- Bottom Navigation -->
    <MobileNav />
</template>

<style>
#app {
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
