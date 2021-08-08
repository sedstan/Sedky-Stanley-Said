<template>
    <splide :options="options">
<!--      TODO: Remove slider on tablet view and smaller-->
        <splide-slide
            v-for="repo in repos"
            :key="repo.node"
            class="relative mr-1 pt-5 pb-5 md:w-min"
        >
            <app-link isExternal :to="`${repo.node.url}`">
                <article
                    class="relative bg-cultured p-5 border border-solid rounded mx-1 text-left h-full group"
                >
                    <div
                  class="hidden group-hover:flex flex-col justify-center items-center mx-auto mb-3 h-full w-full bg-barnRed"
                    >
                        <h4
                            class="text-2xl md:text-xl sm:text-lg font-titillium text-cultured"
                        >
                            Primary Language:
                        </h4>
                        <p class="font-robot text-bistro">
                            <span
                                :style="{
                                    color: `${repo.node.primaryLanguage.color}`,
                                }"
                                >{{ repo.node.primaryLanguage.name }}</span
                            >
                        </p>
                    </div>
                    <header
                        class="mb-4 border-b border-barnRed w-full group-hover:hidden"
                    >
                        <h3
                            class="text-3xl md:2xl sm:xl font-titillium text-barnRed"
                        >
                            {{ repo.node.name }}
                        </h3>
                    </header>
                    <main
                        class=" align-left w-full group-hover:hidden"
                    >
                        <p class="font-roboto text-bistro mb-4">
                            {{ repo.node.description }}
                        </p>
                        <div class="mb-3">
                            <h4
                                class="text-2xl md:text-xl sm:text-lg font-titillium text-barnRed"
                            >
                                Languages:
                            </h4>
                            <p
                                v-for="language in repo.node.languages.edges"
                                :key="language.node"
                                class="font-roboto flex flex-col justify-start items-start text-bistro"
                            >
                                <span
                                    :style="{
                                        color: `${language.node.color}`,
                                    }"
                                    >{{ language.node.name }}</span
                                >
                            </p>
                        </div>
                        <img
                            class="relative mx-auto"
                            v-bind:src="`${repo.node.openGraphImageUrl}`"
                            alt=""
                        />
                    </main>
                </article>
            </app-link>
        </splide-slide>
    </splide>
</template>

<script>
/**
 * @property  {Object} viewer
 * @property {Object }repositories
 * @typedef {Object} repo.node
 * @property {Object} primaryLanguage
 * @property {String} openGraphImageUrl
 */
import { useQuery, useResult } from '@vue/apollo-composable'
import lastTenRepos from '../graphql/repos.query.graphql'
import AppLink from './AppLink.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'

export default {
    name: 'ProjectCards',
    components: {
        AppLink,
        Splide,
        SplideSlide,
    },
    setup() {
        const { result } = useQuery(lastTenRepos)
        const repos = useResult(
            result,
            null,
            (data) => data.viewer.repositories.edges
        )
        // console.log(result);
        return { repos }
    },
    data() {
        return {
            options: {
                type: 'slide',
                rewind: true,
                perPage: 3,
                easing: 'ease',
                gap: '1rem',
                breakpoints: {
                  768: {
                    perPage: 2
                  },
                  640: {
                    perPage: 1
                  }
                }
            },
        }
    },
}
</script>

<style scoped="css">
/* TODO: Add skew for effects */
</style>
