<script>
import DesktopNav from '@/components/DesktopNav'
import { ref } from 'vue'

const loadHeaderData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                pic: "https://sed-stan-personal-site.s3.eu-west-1.amazonaws.com/images/sedky-stanley-said-updated-logo+(1).svg"
            })
        }, 2000)
    })
}
export default {
    name: 'Header',
    components: { DesktopNav },
    async setup() {
        const headerData = ref(await loadHeaderData())
        return { headerData }
    },
    data() {
        return {
            showHeader: true,
            lastScrollPos: 0,
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        onScroll() {
            const currScrollPos =
                window.pageYOffset || document.documentElement.scrollTop

            if (currScrollPos < 0) {
                return
            }

            if (Math.abs(currScrollPos - this.lastScrollPos) < 112) {
                return
            }

            this.showHeader = currScrollPos < this.lastScrollPos
            this.lastScrollPos = currScrollPos
        },
    },
}
</script>

<template>
    <header :class="{ 'header--hidden': !showHeader }"
        class="header bg-transparent text-oldLace hidden lg:flex lg:w-full lg:fixed lg:shadow-sm z-10">
        <div class="lg:w-2/12 lg:justify-start">
            <a href="/"><img class="header__logo p-3 ml-16 rounded-full" :src="headerData.pic"
                    alt="A logo with an S and a 3." width="100" height="100" /></a>
        </div>
        <DesktopNav />
    </header>
</template>

<style scoped>
.header {
    transform: translate3d(0, 0, 0);
    transition: 0.5s all ease-out;
}

.header--hidden {
    transform: translate3d(0, -100%, 0);
}

.header__logo {
    max-width: 96px;
    height: auto;
}
</style>
