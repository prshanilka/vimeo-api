import * as tus from 'tus-js-client';

const uploadBlobToVimeo = (uploadLink: string, blob: Buffer, s:() => void , e:(error:string) => void) => {
    new tus.Upload(blob as unknown as Blob, {
      uploadUrl: uploadLink,
      endpoint: uploadLink,
      retryDelays: [0, 3000, 6000, 12000, 24000],
      chunkSize: 10000000,
      onError: (error) => {
        e('Failed: ' + error);
      },
      onSuccess: () => {
        s();
      },
    }).start();
};

export default uploadBlobToVimeo;
