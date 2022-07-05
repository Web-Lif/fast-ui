import { defineConfig } from 'dumi'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { join } from 'path'

export default defineConfig({
    title: 'Fast UI',
    favicon: 'https://avatars.githubusercontent.com/u/91562499?s=200&v=4',
    logo: 'https://avatars.githubusercontent.com/u/91562499?s=200&v=4',
    outputPath: 'docs-dist',
    mode: 'site',
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        antd: 'antd',
        '@ant-design/icons': 'icons',
    },
    locales: [['zh-CN', '中文']],
    // mfsu: {},
    headScripts: [{ src: '/main.bundle.js', defer: true }],
    devtool: 'eval-source-map',
    targets: false,
    navs: {
        'zh-CN': [
            null,
            {
                title: 'GitHub',
                path: 'https://github.com/Web-Lif/fast-ui',
            },
        ],
    },
    chunks: [],
    chainWebpack: (config) => {
        config.output.filename('[name].bundle.js')

        config.plugin('HtmlWebpackPlugin').use(HtmlWebpackPlugin, [
            {
                template: join(process.cwd(), 'document.ejs'),
            },
        ])

        config.optimization.splitChunks({
            chunks: 'all',
            maxSize: 524288,
            minSize: 262144,
            minChunks: 1,
            maxAsyncRequests: 30,
            maxInitialRequests: 30,
            enforceSizeThreshold: 50000,
            cacheGroups: {
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    reuseExistingChunk: true,
                },
                default: {
                    name: 'umi',
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                },
            },
        })
    },
})
