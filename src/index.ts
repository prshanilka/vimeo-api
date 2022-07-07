import { Stream } from 'stream';
import { AuthHeaders, GetVimeoUploadLinkResponse, IVimeo, IVimeoOptions, VimeoUploadLinkResponse } from './types';
import { VideoSize } from './enum';
import deleteVimeoVideo from './helpers/deleteVimeoVideo';
import getVimeoUploadLink from './helpers/getVimeoUploadLink';
import uploadBlobToVimeo from './helpers/uploadBlobToVimeo';
import getTranscodingStatus from './helpers/getTranscodingStatus';
import getVimeoThumbnailForPrivateVideo from './helpers/getVimeoThumbnailForPrivateVideo';
import getVimeoThumbnailForPublicVideo from './helpers/getVimeoThumbnailForPublicVideo';
import moveToFolder from './helpers/moveToFolder';

class Vimeo implements IVimeo {
  authHeaders: AuthHeaders;
  constructor(config: IVimeoOptions) {
    this.authHeaders = {
      Authorization: `bearer ${config.token}`,
    };
  }
  async vimeoUploadLink(fileLength: number, fileName: string): Promise<GetVimeoUploadLinkResponse> {
      return getVimeoUploadLink(fileLength, fileName, this.authHeaders);
  }
  async uploadBlob(file: Buffer, url: string, s:() => void , e:(error:string) => void): Promise<void> {
    return uploadBlobToVimeo(url, file, s, e);
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
}

export = (token: IVimeoOptions) => {
  return new Vimeo(token);
};
