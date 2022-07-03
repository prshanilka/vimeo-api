import { readFileSync } from 'fs';
import Vimeo from '../index';

let data = readFileSync('./lib/example/mnv.mp4');
const t = Vimeo({
  token: '',
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
