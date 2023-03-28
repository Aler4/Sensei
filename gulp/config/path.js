import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        fonts: `${buildFolder}/assets/fonts`,
        images: `${buildFolder}/assets/`,
    },
    src: {
        js: `${srcFolder}/js/**/*.js`,
        scss: [`${srcFolder}/scss/**/*.scss`, `${srcFolder}/scss/**/main.scss`,`${srcFolder}/scss/**/reset.scss` ],
        images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/assets/**/*.svg`,
        fonts: `${srcFolder}/assets/fonts/*.*`,
        modules: `${srcFolder}/js/modules/`,
        html: `${srcFolder}/**/*.html`,

    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/assets/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
