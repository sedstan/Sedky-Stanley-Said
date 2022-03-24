<template>
    <Splide
        :options="{
            rewind: true,
            focus: 'center',
            trimSpace: true,
            mediaQuery: 'min',
            breakpoints: {
                640: {
                    perPage: 1
                },
                768: {
                    perPage: 2
                },
                1024: {
                    perPage: 3
                },
                1280: {
                    perPage: 4
                },
              1536: {
                  perPage: 5
              }
            }
        }"
    >
        <SplideSlide v-for="repo in repos" :key="repo.node">
            <app-link isExternal :to="`${repo.node.url}`">
                <article
                    class="relative bg-cultured border border-solid mx-4 p-5 rounded text-left group min-h-75 shadow"
                >
                    <div class="align-left">
                        <div class="mb-4 border-b border-barnRed w-full">
                            <h3
                                class="text-3xl md:2xl sm:xl font-titillium text-barnRed pb-2"
                            >
                                {{ repo.node.name }}
                            </h3>
                        </div>
                        <p class="font-roboto text-bistro mb-4">
                            {{ repo.node.description }}
                        </p>
                        <div class="group-hover:hidden mb-3">
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
                        <div
                            class="hidden group-hover:flex flex-col justify-start items-start"
                        >
                            <h4
                                class="text-2xl md:text-xl sm:text-lg font-titillium text-barnRed"
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
                    </div>
                </article>
            </app-link>
        </SplideSlide>
    </Splide>
</template>

<script>
import { useQuery, useResult } from '@vue/apollo-composable'
import lastTenRepos from '../graphql/repos.query.graphql'
import AppLink from './AppLink.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/splide/dist/css/splide.min.css'

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

        return { repos }
    },
}
</script>

<style scoped="css"></style>
