import { userPhotoPlug } from 'redux/sagas/utils/constants';

export const cacheUserPhoto = async (src:string) => new Promise((resolve) => {
  const img = new Image();
  img.src = src;
  img.onload = () => resolve(src);
  img.onerror = () => resolve(userPhotoPlug);
});

export const cacheUserPhotos = async (src:string[]) => {
  const promiseArray = src.map((url) => cacheUserPhoto(url));

  return Promise.all(promiseArray);
};
