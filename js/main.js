const DESCRIPTIONS = ['«Пламя и кровь'];
const MESSEAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const NAME = [
  'Аарон',
  'Абрам',
  'Аваз',
  'Аввакум',
  'Август',
  'Августа',
  'Августин',
  'Августина'
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const pickIntegerInrange = (min, max) => {
  const value = min + Math.random() * (max - min);
  return Math.round(value);
};

const createImageState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = getRandomArrayElement(DESCRIPTIONS);
  const likes = pickIntegerInrange(15, 200);
  const comments = createCommentState(pickIntegerInrange(0, 20));

  return {id, url, description, likes, comments};
};

const createImageStateList = (length = 25) => {
  const list = new Array(length).fill(1);
  return list.map((start, value) => createImageState(start + value));
};

const createCommentState = (id) => {
  const avatar = `img/avatar-${pickIntegerInrange(1, 6)}.svg`;
  const message = getRandomArrayElement(MESSEAGE);
  const name = getRandomArrayElement(NAME);
  return {id, avatar, message, name};
};

createImageStateList();
