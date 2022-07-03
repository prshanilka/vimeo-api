import * as tus from 'tus-js-client';

const uploadBlobToVimeo = async (uploadLink: string, blob: any): Promise<any> => {
  const uploadPromise = new Promise((resolve, reject) => {
    const upload = new tus.Upload(blob, {
      uploadUrl: uploadLink,
      onError: (error: any) => {
        reject(error);
      },
      onSuccess: () => {
        resolve(true);
      },
    });
    upload.start();
  });
  return uploadPromise;
};

export default uploadBlobToVimeo;
