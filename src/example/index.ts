import { readFileSync } from 'fs';
import { Readable } from 'stream';
import Vimeo from '../index';

// console.log(file);
let data = readFileSync('./lib/example/mnv.mp4');
const t = Vimeo({
  token: '6131dbbec5e508b70236a80c52c7088f',
});

// (async () => {
//   try {
//     const c = await t.uploadFileBuffer(data, 'ddd');
//     console.log('ddd', c);
//   } catch (error) {
//     console.log(error);
//   }
// })();

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
