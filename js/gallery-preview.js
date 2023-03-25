/**
 * @param {HTMLElement} preview
 */
const preview = document.querySelector('.big-picture__preview');

/**
 * @type {HTMLUListElement}
 */
const discussion = preview.querySelector('.social__comments');
/**
 * @type {HTMLLIElement}
 */
const commentTemplate = discussion.querySelector('.social__comment');
/**
 *
 * @param {CommentState} data
 * @return {HTMLElement}
 */
const creatComment = (data) =>{
  const comment =
 /**
  * @type {HTMLLIElement}
  */
 (commentTemplate.cloneNode(true));
  comment.querySelector('.social__picture').setAttribute('src', data.avatar);
  comment.querySelector('.social__picture').setAttribute('src', data.name);
  comment.querySelector('.social__text').textContent = data.message;

  return comment;
};
/**
 *
 * @param {PictureState} data
 */
const updatePreview = (data) => {
  preview.querySelector('.big-picture__img img').setAttribute('src', data.url);
  preview.querySelector('.social__caption').textContent = data.description;
  preview.querySelector('.likes-count').textContent = String(data.likes);

  discussion.replaceChildren(...data.comments.map(creatComment));

};

export default updatePreview;
