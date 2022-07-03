import axios, { AxiosResponse } from 'axios';
import { VideoSize } from '../enum';

const getVimeoThumbnailForPublicVideo = async (videoId: string, size: VideoSize = VideoSize.large) => {
  try {
    const response: AxiosResponse = await axios.get(`https://vimeo.com/api/v2/video/${videoId}.json`);
    return response.data[0][`thumbnail_${size}`];
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to get video thumbnail at the moment.');
  }
};

export default getVimeoThumbnailForPublicVideo;
