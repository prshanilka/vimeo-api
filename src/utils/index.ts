import { AuthHeaders, PostHeaders } from '../types';

export const authHeaders: AuthHeaders = {
  Authorization: '',
};

export const postHeaders: PostHeaders = {
  ...authHeaders,
  Accept: 'application/vnd.vimeo.*+json;version=3.4',
  'Content-Type': 'application/json',
};

export const patchHeaders = {
  Accept: 'application/vnd.vimeo.*+json;version=3.4',
  'Tus-Resumable': '1.0.0',
  'Upload-Offset': 0,
  'Content-Type': 'application/offset+octet-stream',
};
