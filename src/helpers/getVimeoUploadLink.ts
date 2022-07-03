import axios, { AxiosResponse } from 'axios';
import { AuthHeaders, GetVimeoUploadLinkResponse } from '../types';
import { postHeaders } from '../utils';

const getVimeoUploadLink = async (
  blobSize = 0,
  name = 'Untitled',
  authHeaders: AuthHeaders,
): Promise<GetVimeoUploadLinkResponse> => {
  let uploadLink = '';
  let uri = '';
  let videoUrl = '';
  const data = JSON.stringify({
    upload: {
      approach: 'tus',
      size: blobSize,
    },
    name: name,
  });
  const config = {
    method: 'post',
    url: 'https://api.vimeo.com/me/videos',
    headers: { ...postHeaders, ...authHeaders },
    data: data,
  };
  try {
    const response: AxiosResponse = await axios(config);
    uploadLink = response.data.upload.upload_link;
    videoUrl = response.data.link;
    uri = response.data.uri;
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to reach Vimeo at the moment');
  }
  return { uploadLink, uri, videoUrl };
};

export default getVimeoUploadLink;
