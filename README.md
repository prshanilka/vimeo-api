# <img src="https://user-images.githubusercontent.com/33762/33720344-abc20bb8-db31-11e7-8362-59a4985aeff0.png" width="250" />

[![npm](https://img.shields.io/npm/v/vimeo.svg?style=flat-square)](https://www.npmjs.com/package/vimeo)
[![License](https://img.shields.io/github/license/vimeo/vimeo.js.svg)](https://www.npmjs.com/package/vimeo)

# Interacting with the Vimeo API using Node.js

## Get started with the Vimeo API

## Install the Node.js library

To install Node.js, run the following command:

     npm install @hushpoison/vimeo-api

## Advanced examples

```ts
let data = readFileSync('./lib/example/mnv.mp4');
const t = Vimeo({
  token: '--------------------',
});

(async () => {
  try {
    const c = await t.uploadFileBuffer(data, 'ddd');
    console.log('ddd', c);
  } catch (error) {
    console.log(error);
  }
})();

(async () => {
  try {
    const c = await t.transcodeStatus('726466895');
    console.log('ddd', c);
    const y = await t.thumbnailForPrivateVideo('726466895', 640);
    console.log('dddy', y);
  } catch (error) {
    console.log(error);
  }
})();
```

## Credits
  https://github.com/Applicafroguy/vimeo-uploader
