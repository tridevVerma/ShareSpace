import { API_PUBLIC } from '../../utils/constants';

const getImage = async (imageLink) => {
  if (!imageLink) {
    return 'http://not-found-404.png';
  }
  const url = `${API_PUBLIC}${imageLink}`;

  try {
    const resp = await fetch(url);
    const blob = await resp.blob();

    return URL.createObjectURL(blob);
  } catch (err) {
    console.log('error in fetching images', err.message);
    return 'http://not-found-404.png';
  }
};

export default getImage;
