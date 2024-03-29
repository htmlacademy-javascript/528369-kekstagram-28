import openPopup from './popup.js';
import openStatusPopup from './status-popup.js';
import updatePreview from './upload-preview.js';
import {request} from './util.js';

/**
 * @type {HTMLFormElement}
 */
const form = document.querySelector('.img-upload__form');

/**
 * @type {HTMLDivElement}
 */
const popup = form.querySelector('.img-upload__overlay');

// @ts-ignore
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
});

/**
 * @param {string} message
 * @param {(tags: string[]) => boolean} validate
 */
const addHashTagValidator = (message, validate) => {
  pristine.addValidator(form.hashtags, (value) => {
    const tags = value.toLowerCase().split(' ').filter(Boolean);

    return validate(tags);
  }, message, 1, true);
};

/**
 * @param {string} message
 * @param  {(description: string) => boolean} validate
 */
const addDescriptionValidator = (message, validate) => {
  pristine.addValidator (form.description, validate, message);
};

const sendFormData = async () => {
  const url = form.getAttribute('action');
  const method = form.getAttribute('method');
  const body = new FormData(form);

  form.submitButton.setAttribute('disabled', '');

  try {
    await request(url, {method, body});

    form.resetButton.click();
    openStatusPopup('success');

  } catch (exception) {
    openStatusPopup('error');
  }

  form.submitButton.removeAttribute('disabled');
};

/**
 * @param {Event & {target: HTMLInputElement}} event
 */
const onFormChange = (event) => {
  if(event.target === form.filename) {
    const data = event.target.files.item(0);

    updatePreview(data);
    openPopup(popup);
  }
};

const onFormReset = () => {
  pristine.reset();
};

/**
 * @param {SubmitEvent} event
 */
const onFormSubmit = (event) => {
  event.preventDefault();

  if(pristine.validate()) {
    sendFormData();
  }
};

addHashTagValidator(
  'Хэштеги должны начинаться с символа(#) решетка',
  (tags) => tags.every((tag) => tag.startsWith('#'))
);

addHashTagValidator(
  'После решетки(#) идут буквы/цифры',
  (tags) => tags.every((tag) => /^#[a-zа-яё0-9]+$/.test(tag))
);

addHashTagValidator(
  'Максимальная длина одного хэштэга не более 20 символов',
  (tags) => tags.every((tag) => tag.length <= 20)
);

addHashTagValidator(
  'Не более 5 хэштегов',
  (tags) => tags.length <= 5
);

addHashTagValidator(
  'Хэштеги не должны повторятся',
  (tags) => tags.length === new Set(tags).size
);

addDescriptionValidator(
  'Длина описания не должна превышать 140 символов',
  (description) => description.length <= 140
);

form.addEventListener('change', onFormChange);
form.addEventListener('submit', onFormSubmit);
form.addEventListener('reset', onFormReset);
