# <img src="https://user-images.githubusercontent.com/33762/33720344-abc20bb8-db31-11e7-8362-59a4985aeff0.png" width="250" />

[![npm](https://img.shields.io/npm/v/vimeo.svg?style=flat-square)](https://www.npmjs.com/package/vimeo)
[![License](https://img.shields.io/github/license/vimeo/vimeo.js.svg)](https://www.npmjs.com/package/vimeo)

# Interacting with the Vimeo API using Node.js

## Get started with the Vimeo API

## Install the Node.js library

To install Node.js, run the following command:

     npm install @hushpoison/vimeo-api



### Genarate Upload Link 
     vimeoUploadLink(fileLength: number, fileName: string)
     
### Upload Video Blob (url = genarated url from above function)
     uploadBlob(file: Buffer, url: string, s:() => void , e:(error:string) => void)
     
### Get Thubnails
     thumbnailForPrivateVideo(id: string, thumbnailWidth: number)
     thumbnailForPublicVideo(id: string, thumbnailWidth: VideoSize)

### Delete video(id = vimeo video id)
     deleteVideo(id: string)
     
### Insert Video To Folder in Vimeo
     moveToFolder(id: string, folderId: string)
     
## Advanced examples     
```ts
let data = readFileSync('./lib/example/mnv.mp4');
const t = Vimeo({
  token: '--------------------',
});

(async () => {
  try {
    const {uploadLink,uri,videoUrl} = await t.vimeoUploadLink(filesize, 'filename'); //filesize is (buffer length) size of the upload file
     t.uploadBlob(file,uploadLink,()=>console.log(success),(e:string)=>console.log(error)) //file must be buffer or blob
  } catch (error) {
    console.log(error);
  }
})();

(async () => {
  try {
    const c = await t.transcodeStatus('726466895');
    const y = await t.thumbnailForPrivateVideo('726466895', 640);
  } catch (error) {
    console.log(error);
  }
})();
```

## Credits
  https://github.com/Applicafroguy/vimeo-uploader
