import { createApp, provide, h } from 'vue'
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { setContext } from '@apollo/client/link/context'
import App from './App.vue'
import router from './router'
import './assets/styles/index.css'

// Github API v4 (GraphQL)
const githubHttpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
})

const githubAuthLink = setContext((_, { headers }) => {
    const githubToken = process.env.VUE_APP_SEDKYSTANLEYSAID_GITHUB_TOKEN
    return {
        headers: {
            ...headers,
            authorization: githubToken ? `Bearer ${githubToken}` : '',
        },
    }
})

const githubDefaultClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: githubAuthLink.concat(githubHttpLink),
})

// TODO:Bitbucket GraphQL API

createApp({
    setup() {
        provide(DefaultApolloClient, githubDefaultClient)
    },
    render() {
        return h(App)
    },
})
    .use(router)
    .mount('#app')
