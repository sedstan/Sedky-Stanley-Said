<script setup>
const today = new Date()
const year = today.getFullYear()
</script>

<template>
    <footer
        class="font-roboto font-black text-oldLace text-sm w-full h-full p-5 bg-bistro flex items-center justify-center">
        <div class="lg:container">
            <p class="p-3">&copy; 2016 - {{ year }} Sedky Stanley Said</p>
        </div>
    </footer>
</template>
