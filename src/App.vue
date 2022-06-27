<script setup>
import Header from '@/components/Header'
import Home from '@/views/Home.vue'
import Projects from '@/views/Projects.vue'
import AboutMe from '@/views/AboutMe.vue'
import BeSocial from '@/views/BeSocial.vue'
import Footer from '@/components/Footer.vue'
import MobileNav from '@/components/MobileNav.vue'
</script>

<template>
    <!-- Header -->
    <Header />
    <!-- Main -->
    <main>
        <Home />
        <Projects title="Projects" subtitle="My last 10 repos" />
        <AboutMe />
        <BeSocial />
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
