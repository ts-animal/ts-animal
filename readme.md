# ts-animal

![GitHub](https://img.shields.io/github/license/ts-animal/.github) [![npm version](https://img.shields.io/npm/v/ts-animal.svg?style=square)](https://www.npmjs.org/package/ts-animal)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=ts-animal&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=ts-animal)
[![npm downloads](https://img.shields.io/npm/dm/ts-animal.svg?style=square)](https://npm-stat.com/charts.html?package=ts-animal)

![ascii_terminal_tiger](https://github.com/ts-animal/ts-animal/assets/33365719/48218f8c-2bbc-41fc-845f-dcf6914ad0bd)

## Introduction

`ts-animal` is a sophisticated Command Line Interface (CLI) package designed to showcase captivating ASCII animation art within the animal category. We invite you to immerse yourself in our TypeScript-powered animal world, where creativity meets technology. Welcome to a realm where animated artistry comes to life in the command line environment. 🌐🦁

## Our animals

- tiger: https://asciiart.cc/view/12694
- rabbit: https://bento.me/tolluset

## Installation

```shell
$ npm i -g ts-animal
```

## Getting started

```shell
$ ts-animal dance tiger
```

## Run locally with repository

```shell
$ pnpm i
$ pnpm dance {animal}

# ex
$ pnpm dance tiger
$ pnpm dance rabbit
```

## Options

```shell
$ ts-animal dance tiger --repeat=3 --speed=1800
```

<table>
    <thead>
        <tr>
            <th>Option</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>--speed</code></td>
            <td>
                Set the speed of frame of your animation.
            </td>
            <td><code>1800</code></td>
        </tr>
        <tr>
            <td><code>--repeat</code></td>
            <td>
                Set how long to repeat the animation.
            </td>
            <td><code>Infinity</code></td>
        </tr>
        <tr>
            <td><code>--color</code></td>
            <td>
                Set the color of the animation.
            </td>
            <td><code>white</code></td>
        </tr>
    </tbody>
</table>

### `Skeleton` and `SkeletonTheme`

<table>
    <thead>
        <tr>
            <th>Prop</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>baseColor?: string</code></td>
            <td>The background color of the skeleton.</td>
            <td><code>#ebebeb</code></td>
        </tr>
        <tr>
            <td><code>highlightColor?: string</code></td>
            <td>The highlight color in the skeleton animation.</td>
            <td><code>#f5f5f5</code></td>
        </tr>
        <tr>
            <td><code>width?: string | number</code></td>
            <td>The width of the skeleton.</td>
            <td><code>100%</code></td>
        </tr>
        <tr>
            <td><code>height?: string | number</code></td>
            <td>The height of each skeleton line.</td>
            <td>The font size</td>
        </tr>
        <tr>
            <td><code>borderRadius?: string | number</code></td>
            <td>The border radius of the skeleton.</td>
            <td><code>0.25rem</code></td>
        </tr>
        <tr>
            <td><code>inline?: boolean</code></td>
            <td>
                By default, a <code>&lt;br /&gt;</code> is inserted after each skeleton so
                that each skeleton gets its own line. When <code>inline</code> is true, no
                line breaks are inserted.
            </td>
            <td><code>false</code></td>
        </tr>
        <tr>
            <td><code>duration?: number</code></td>
            <td>The length of the animation in seconds.</td>
            <td><code>1.5</code></td>
        </tr>
        <tr>
            <td><code>direction?: 'ltr' | 'rtl'</code></td>
            <td>
                The direction of the animation, either left-to-right or right-to-left.
            </td>
            <td><code>'ltr'</code></td>
        </tr>
        <tr>
            <td><code>enableAnimation?: boolean</code></td>
            <td>
                Whether the animation should play. The skeleton will be a solid color when
                this is <code>false</code>. You could use this prop to stop the animation
                if an error occurs.
            </td>
            <td><code>true</code></td>
        </tr>
    </tbody>
</table>

## How to contribute

- make animal named folder in src/zoo.
- make frames as text files in zoo folder. No matter txt files name, but make sure files name and frames are sorted.
- please check first npx run list, to prevent duplicated name.

## Contributors

<a href="https://github.com/ts-animal/ts-animal/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ts-animal/ts-animal" />
</a>

<!--
## How to publish

````shell
$ pnpm script:publish
``` -->

## Stay in touch

E-mail - team.ts.animal@gmail.com

## License

ts-animal with [MIT licensed](LICENSE).
