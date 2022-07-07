import { AxiosRequestHeaders } from 'axios';
import { VideoSize } from '../enum';

export interface AuthHeaders extends AxiosRequestHeaders {
  Authorization: string;
}

export interface PostHeaders extends AuthHeaders {
  Accept: string;
  'Content-Type': string;
}

export interface GetVimeoUploadLinkResponse {
  uploadLink: string;
  uri: string;
  videoUrl: string;
}
export interface VimeoUploadLinkResponse {
  status: string;
  uri: string;
  videoUrl: string;
}
export interface IVimeoOptions {
  token: string;
}

export interface IVimeo {
  // uploadFileBuffer(file: any, fileName: string): Promise<VimeoUploadLinkResponse>;
  // uploadFile(file: any, fileName: string): Promise<VimeoUploadLinkResponse>;
  transcodeStatus(id: string): Promise<string>;
  thumbnailForPrivateVideo(id: string, thumbnailWidth: number): Promise<string>;
  thumbnailForPublicVideo(id: string, thumbnailWidth: VideoSize): Promise<string>;
  deleteVideo(id: string): Promise<string>;
  moveToFolder(id: string, folderId: string): Promise<string>;
  vimeoUploadLink(fileLength: number, fileName: string): Promise<GetVimeoUploadLinkResponse>;
  uploadBlob(file: Buffer, fileName: string,  s:() => void , e:(error:string) => void): Promise<void>;
}