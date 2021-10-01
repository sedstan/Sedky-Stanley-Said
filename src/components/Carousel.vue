<template>
    <div class="carousel">
        <ul
            class="flex flex-wrap lg:flex-nowrap lg:overflow-x-auto"
        >
        <!-- TODO: Fix height of li -->
            <li
                class="lg:flex-shrink-0 lg:flex-grow-0"
                v-for="repo in repos"
                :key="repo.node"
            >
                <app-link isExternal :to="`${repo.node.url}`">
                    <article
                        class="relative bg-cultured p-5 border border-solid mx-1 rounded text-left group h-full"
                    >
                        <div class="align-left max-w-400">
                            <img
                                class="relative mx-auto mb-4"
                                v-bind:src="`${repo.node.openGraphImageUrl}`"
                                alt=""
                            />
                            <div class="mb-4 border-b border-barnRed w-full">
                                <h3
                                    class="text-3xl md:2xl sm:xl font-titillium text-barnRed"
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
                                    v-for="language in repo.node.languages
                                        .edges"
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
                                class="hidden group-hover:flex flex-col justify-center items-center bg-barnRed mb-4"
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
                                        >{{
                                            repo.node.primaryLanguage.name
                                        }}</span
                                    >
                                </p>
                            </div>
                        </div>
                    </article>
                </app-link>
            </li>
        </ul>
    </div>
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

export default {
    name: 'Carousel',
    components: {},
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
