import { defineConfig } from 'dumi';
import { readFileSync } from 'fs';
import { join } from 'path';

const globalCss = readFileSync(join(__dirname, 'site', 'global.css'));

export default defineConfig({
    title: 'Fast UI',
    favicon: 'https://avatars.githubusercontent.com/u/91562499?s=200&v=4',
    logo: 'https://avatars.githubusercontent.com/u/91562499?s=200&v=4',
    outputPath: 'docs-dist',
    mode: 'site',
    locales: [['zh-CN', '中文']],
    styles: [globalCss.toString('utf-8')],
    // mfsu: {},
    navs: {
        'zh-CN': [
            null,
            {
                title: 'GitHub',
                path: 'https://github.com/Web-Lif/fast-ui',
            },
        ],
    },
});
