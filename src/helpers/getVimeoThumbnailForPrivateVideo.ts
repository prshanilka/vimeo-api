import axios, { AxiosResponse } from 'axios';
import { AuthHeaders } from '../types';

interface Image {
  width: number;
  link: string;
}

const getVimeoThumbnailForPrivateVideo = async (
  videoId: string,
  thumbnailWidth = 640,
  authHeaders: AuthHeaders,
): Promise<string> => {
  try {
    const response: AxiosResponse = await axios.get(`https://api.vimeo.com/videos/${videoId}`, {
      headers: authHeaders,
    });
    const data = await response.data;
    const thumbnail: Image[] = data?.pictures?.sizes?.filter((img: Image) => img.width === thumbnailWidth);

    if (thumbnail?.length) {
      return thumbnail[0].link;
    }
    throw new Error(
      'Sorry! No thumbnail for the specified width found. Please try again with a different width (or use default).',
    );
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to reach Vimeo at the moment.');
  }
};

export default getVimeoThumbnailForPrivateVideo;
