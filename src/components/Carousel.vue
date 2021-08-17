<template>
    <splide>
        <splide-slide v-for="repo in repos" :key="repo.node">
            <app-link isExternal :to="`${repo.node.url}`">
                <article
                    class="relative bg-cultured p-5 border border-solid rounded mx-1 text-left group"
                >
                    <!-- <div
                    class="hidden group-hover:flex flex-col justify-center items-center bg-barnRed"
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
                </div> -->
                    <header class="mb-4 border-b border-barnRed w-full">
                        <h3
                            class="text-3xl md:2xl sm:xl font-titillium text-barnRed"
                        >
                            {{ repo.node.name }}
                        </h3>
                    </header>
                    <main class="align-left w-full">
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

export default {
    name: 'Carousel',
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
}
</script>

<style scoped="css">
/* TODO: Add skew for effects */
</style>
