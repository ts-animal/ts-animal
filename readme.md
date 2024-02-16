# ts-animal

![GitHub](https://img.shields.io/github/license/ts-animal/.github) [![npm version](https://img.shields.io/npm/v/ts-animal.svg?style=square)](https://www.npmjs.org/package/ts-animal)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=ts-animal&query=$.install.pretty&label=install%20size&style=square)](https://packagephobia.now.sh/result?p=ts-animal)
[![npm downloads](https://img.shields.io/npm/dm/ts-animal.svg?style=square)](https://npm-stat.com/charts.html?package=ts-animal)

<img src="https://github.com/ts-animal/ts-animal/assets/33365719/48218f8c-2bbc-41fc-845f-dcf6914ad0bd" width="500">

## 🤹‍♀️ Introduction

[`ts-animal`](https://www.npmjs.com/package/ts-animal) is a sophisticated Command Line Interface (CLI) package designed to showcase captivating ASCII animation art within the animal category. We invite you to immerse yourself in our TypeScript-powered animal world, where creativity meets technology. Welcome to a realm where animated artistry comes to life in the command line environment. 🌐🦁

## Installation

> If you want to try it out before installing globally, you can (1) start with npx (2) or check out [codesandbox](https://codesandbox.io/p/devbox/ts-animal-devbox-j4c3tn)

```shell
$ npm i -g ts-animal

# or start with npx
$ npx ts-animal dance tiger
```

## ⭐️ Getting started

```shell
$ ts-animal dance tiger
```

## 🔍 Options

```shell
$ ts-animal dance tiger --repeat=3 --speed=1800 --color=red
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
            <td>
                <code>--speed</code>
            </td>
            <td>
                Set the speed of frame of your animation.
            </td>
            <td>
                <code>1800</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>--repeat</code>
            </td>
            <td>
                Set how long to repeat the animation.
            </td>
            <td>
                <code>Infinity</code>
            </td>
        </tr>
        <tr>
            <td>
                <code>--color</code>
            </td>
            <td>
                Set the color of the animation.
            </td>
            <td>
                <code>white</code>
            </td>
        </tr>
    </tbody>
</table>

## ⭐️ Progress getting started

Below example is showing how to add progress feature with your cli.

```ts
const { update, done, show } = makeProgress({ animal: 'tiger', start: 30 });

show();

const something = () =>
  new Promise((resolve) => {
  setTimeout(() => {
    resolve(Math.round(Math.random()));
  }, 1000);
});

(async () => {
  const items = Array.from({ length: 50 });
  for (const _ of items) {
    const res = await something();
    update();

    if (res) {
      done();
      return;
    }
  }
})();
```

## 🏰 Run locally with repository

```shell
$ pnpm i
$ pnpm dance {animal}

# ex
$ pnpm dance tiger
$ pnpm dance rabbit
```

## ✨ How to contribute

- make animal named folder in src/zoo.
- make frames as text files in zoo folder. No matter txt files name, but make sure files name and frames are sorted.
- please check first npx run list, to prevent duplicated name.

## 🔖 Our animals

- 🐯 tiger: https://asciiart.cc/view/12694
- 🐰 rabbit: https://bento.me/tolluset
- 🐱 cat


## 🤖 Contributors

<a href="https://github.com/ts-animal/ts-animal/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ts-animal/ts-animal" />
</a>



## 🫶 Support

### ascii-animal generator 
> We have GPTs that help us draw ASCII art.
- https://chat.openai.com/g/g-e3MZC7wjL-ascii-animal-generator
<img src="https://github.com/ts-animal/ts-animal/assets/94776135/eb1298c1-b1f2-409e-9059-2f5c8854257c" width="300" />

### ts-animal Devbox 
> There is CodeSandbox where you can try out packages without global installation.
> 1. fork the devbox
> 2. use terminal
- [https://codesandbox.io/p/devbox/ts-animal-devbox-j4c3tn](https://codesandbox.io/p/devbox/ts-animal-devbox-j4c3tn)
<img src="https://github.com/ts-animal/ts-animal/assets/94776135/b09ac0a0-d98e-436a-b1e0-a82d17b3ec0a" width="400" />

## 💌 Stay in touch

E-mail - team.ts.animal@gmail.com

## 💎 License

ts-animal with [MIT licensed](LICENSE).

