import axios from 'axios';
import { AuthHeaders } from '../types';

const deleteVimeoVideo = async (videoId: string, authHeaders: AuthHeaders): Promise<string> => {
  try {
    await axios.delete(`https://api.vimeo.com/videos/${videoId}`, {
      headers: authHeaders,
    });

    return 'success';
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to reach Vimeo at the moment');
  }
};

export default deleteVimeoVideo;
