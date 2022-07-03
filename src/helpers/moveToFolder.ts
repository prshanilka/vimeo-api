import axios from 'axios';
import { AuthHeaders } from '../types';

const moveToFolder = async (videoId: string, folderId: string, authHeaders: AuthHeaders): Promise<string> => {
  try {
    await axios.put(`https://api.vimeo.com/me/projects/${folderId}/videos/${videoId}`, {
      headers: authHeaders,
    });

    return 'success';
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to move video at the moment.');
  }
};

export default moveToFolder;
