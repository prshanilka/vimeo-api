import { AxiosRequestHeaders } from 'axios';

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

export interface IVimeoOptions {
  token: string;
}
