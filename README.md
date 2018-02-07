# budousan - frontend

> ブドウさん - フロントエンド

## 1. install softwares

- install git

- install node.js(version >= 8.4)

- install yarn

- install visual studio code

- install jdk(for e2e test)

## 2. download source code

``` bash
cd /your/path/like/desktop
git clone https://your-git-account@github.com/mrm-xiefan/budousan-front.git
```

## 3. install dependencies

``` bash
cd /your/path/like/desktop/budousan-front
yarn install
```

## 4. boot frontend

``` bash
cd /your/path/like/desktop/budousan-front
npm run dev
```

this only boots frontend, you also need to boot backend even development enviroment.

## 5. development

### run unit tests

``` bash
npm run unit
```

### run e2e tests

``` bash
npm run e2e
```

### run all tests

``` bash
npm test
```

## 6. deploy to production enviroment

``` bash
cd /your/path/like/desktop/budousan-front
npm run build
```

then dist folder will be created. move it to budousan-back.
