import initGallery from './gallery.js';
import openStatusPopup from './status-popup.js';
import { request } from './util.js';
import './upload.js';

const url = 'https://28.javascript.pages.academy/kekstagram/data';

try {
  /**
   * @type {PictureState[]} data
   */
  const data = await request(url);

  initGallery(data);

} catch (exception) {
  const title = `Ошибка: ${exception.message}`;
  const button = 'Закрыть';

  openStatusPopup('error', {title, button});
}


