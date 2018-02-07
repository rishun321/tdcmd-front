# budousan

> ブドウさん - フロントエンド

## 1. installation

### install git, node.js, python, mongodb, mongodb IDE

- install git

- install node.js(version >= 8.4)

- install python(version == 2.7.x)

- install mongodb(make sure that mongodb service is on)

- i recommend to use this mongo IDE: https://studio3t.com/

- install yarn

- install visual studio code

### download source code

``` bash
cd /your/path/like/desktop
sudo git clone https://your-git-account@github.com/mrm-xiefan/budousan-front.git
```

### install dependencies

``` bash
cd /your/path/like/desktop/budousan-front
yarn install
```

### boot frontend

``` bash
cd /your/path/like/desktop/budousan-front
npm run dev
```

### development

- run unit tests

``` bash
npm run unit
```

- run e2e tests

``` bash
npm run e2e
```

- run all tests

``` bash
npm test
```

### deploy to production enviroment

``` bash
cd /your/path/like/desktop/budousan-front
npm run build
```

[^1]: Then dist folder will be created. Move it to budousan-back.
