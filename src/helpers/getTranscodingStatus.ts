import axios, { AxiosResponse } from 'axios';
import { AuthHeaders } from '../types';

const getTranscodingStatus = async (videoId: string, authHeaders: AuthHeaders): Promise<string> => {
  try {
    const response: AxiosResponse = await axios.get(`https://api.vimeo.com/me/videos/${videoId}`, {
      headers: authHeaders,
    });

    if (response?.data) {
      return response.data.transcode.status;
    }
    throw new Error('Sorry! Failed to fetch the transcoding status');
  } catch (err: any) {
    throw Error('Sorry! Failed to reach Vimeo at the moment');
  }
};

export default getTranscodingStatus;
