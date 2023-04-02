/**
 *
 * @param {KeyboardEvent} event
 */
const onDocumentKeyDown = (event) => {
  if(event.key.startsWith('Esc')) {
    /**
     *  @type {HTMLElement}
     */
    const popup = document.querySelector('.success, .error');

    popup.click();
    event.stopPropagation();
  }
};
/**
 * @param {MouseEvent & {target: Element, currentTarget: HTMLElement}} event
 */
const onPopupClick = (event) => {
  if(event.target.matches('section, button')){
    event.currentTarget.remove();

    document.removeEventListener('keydown', onDocumentKeyDown, true);
  }
};
/**
 * @param {'success'|'error'} type
 * @param {{title?: string, button?: string}} data
 */
const openStatusPopup = (type, data = {}) => {
  /**
   *  @type {HTMLTemplateElement}
   */
  const popupTemplate = document.querySelector(`#${type}`);

  const popup =
  /**
   * @type {HTMLElement}
   */
  (popupTemplate.content.querySelector(`.${type}`).cloneNode(true));

  Object.keys(data).forEach((key) => {
    popup.querySelector(`.${type}__${key}`).textContent = data[key];
  });

  popup.addEventListener('click', onPopupClick);
  document.addEventListener('keydown', onDocumentKeyDown, true);

  document.body.append(popup);
};

export default openStatusPopup;
