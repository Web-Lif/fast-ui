import { defineConfig } from 'dumi'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import { join } from 'path'
import { readFileSync } from 'fs'

const globalCss = readFileSync(
    join(__dirname, 'public', 'global.css')
).toString('utf-8')
const changelog = readFileSync(join(__dirname, 'CHANGELOG.md')).toString(
    'utf-8'
)

export default defineConfig({
    title: 'Fast UI',
    favicon: 'https://avatars.githubusercontent.com/u/91562499?s=200&v=4',
    logo: 'https://avatars.githubusercontent.com/u/91562499?s=200&v=4',
    outputPath: 'docs-dist',
    mode: 'site',
    styles: [globalCss],
    locales: [['zh-CN', '中文']],
    devtool: 'eval-source-map',
    targets: false,
    define: {
        _WEBPACK$DEFINE$CHANGELOG: changelog,
    },
    navs: {
        'zh-CN': [
            null,
            {
                title: 'GitHub',
                path: 'https://github.com/Web-Lif/fast-ui',
            },
        ],
    },
    chunks: process.env.NODE_ENV === 'production' ? [] : undefined,
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
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
        }
    },
})
