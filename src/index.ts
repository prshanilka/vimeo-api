import { Stream } from 'stream';
import { AuthHeaders, GetVimeoUploadLinkResponse, IVimeoOptions } from './types';
import { VideoSize } from './enum';
import deleteVimeoVideo from './helpers/deleteVimeoVideo';
import getVimeoUploadLink from './helpers/getVimeoUploadLink';
import uploadBlobToVimeo from './helpers/uploadBlobToVimeo';
import getTranscodingStatus from './helpers/getTranscodingStatus';
import getVimeoThumbnailForPrivateVideo from './helpers/getVimeoThumbnailForPrivateVideo';
import getVimeoThumbnailForPublicVideo from './helpers/getVimeoThumbnailForPublicVideo';
import moveToFolder from './helpers/moveToFolder';

class Vimeo {
  authHeaders: AuthHeaders;
  constructor(config: IVimeoOptions) {
    this.authHeaders = {
      Authorization: `bearer ${config.token}`,
    };
  }
  async uploadFileBuffer(file: any, fileName: string): Promise<GetVimeoUploadLinkResponse> {
    try {
      const { uploadLink, uri, videoUrl } = await getVimeoUploadLink(file.length, fileName, this.authHeaders);
      const status = await uploadBlobToVimeo(uploadLink, file);
      if (!status) {
        throw new Error('Sorry! Failed to Upload Vimeo at the moment');
      }
      return { uploadLink, uri, videoUrl };
    } catch (error: any) {
      throw new Error(error.message || 'Sorry! Failed to Upload Vimeo at the moment');
    }
  }

  async uploadFile(file: any, fileName: string): Promise<GetVimeoUploadLinkResponse> {
    const fileBuf = await this.stream2buffer(file.stream);
    try {
      const { uploadLink, uri, videoUrl } = await getVimeoUploadLink(fileBuf.length, fileName, this.authHeaders);
      const status = await uploadBlobToVimeo(uploadLink, file);
      if (!status) {
        throw new Error('Sorry! Failed to Upload Vimeo at the moment');
      }
      return { uploadLink, uri, videoUrl };
    } catch (error: any) {
      throw new Error(error.message || 'Sorry! Failed to Upload Vimeo at the moment');
    }
  }

  async transcodeStatus(id: string): Promise<string> {
    return getTranscodingStatus(id, this.authHeaders);
  }

  async thumbnailForPrivateVideo(id: string, thumbnailWidth: number): Promise<string> {
    return getVimeoThumbnailForPrivateVideo(id, thumbnailWidth, this.authHeaders);
  }

  async thumbnailForPublicVideo(id: string, thumbnailWidth: VideoSize): Promise<string> {
    return getVimeoThumbnailForPublicVideo(id, thumbnailWidth);
  }

  async deleteVideo(id: string): Promise<string> {
    return deleteVimeoVideo(id, this.authHeaders);
  }

  async moveToFolder(id: string, folderId: string): Promise<string> {
    return moveToFolder(id, folderId, this.authHeaders);
  }

  private async stream2buffer(stream: Stream): Promise<Buffer> {
    return new Promise<Buffer>((resolve, reject) => {
      const _buf = Array<any>();
      stream.on('data', (chunk) => _buf.push(chunk));
      stream.on('end', () => resolve(Buffer.concat(_buf)));
      stream.on('error', (err) => reject(`error converting stream - ${err}`));
    });
  }
}

export = (token: IVimeoOptions) => {
  return new Vimeo(token);
};
