module.exports = {
    chainWebpack: (config) => {
        config.module
            .rule('graphql')
            .test(/\.(graphql|gql)$/)
            .use('graphql-tag/loader')
            .loader('graphql-tag/loader')
            .end()
    },
    pages: {
        index: {
            entry: '/src/main.js',
            template: 'public/index.html',
            title: 'Sedky Stanley Said',
        },
    },
}
