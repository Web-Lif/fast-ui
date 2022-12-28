import { defineConfig } from 'dumi'
import { readFileSync } from 'fs'
import { join } from 'path'

const changelog = readFileSync(join(__dirname, 'CHANGELOG.md')).toString(
    'utf-8'
)

const styles: string[] = []

if (process.env.NODE_ENV !== 'production') {
    const globalCss = readFileSync(
        join(__dirname, 'public', 'global.css')
    ).toString('utf-8')
    styles.push(globalCss)
}

export default defineConfig({
    themeConfig: {
        name: 'Fast UI',
        logo: 'https://avatars.githubusercontent.com/u/91562499?s=200&v=4',
    },
    favicons: ['https://avatars.githubusercontent.com/u/91562499?s=200&v=4'],
    outputPath: 'docs-dist',
    // mode: 'site',
    styles,
    resolve: {
        atomDirs: [{ type: 'component', dir: 'src' }],
    },
    devtool: 'eval-source-map',
    mfsu: false,
    define: {
        _WEBPACK$DEFINE$CHANGELOG: changelog,
    },
})
