import {pickItemFromList, pickIntegerInrange} from './util.js';

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

const createCommentState = (id) => {
  const avatar = `img/avatar-${pickIntegerInrange(1, 6)}.svg`;
  const message = pickItemFromList(MESSEAGE);
  const name = pickItemFromList(NAME);
  return {id, avatar, message, name};
};

const createImageState = (id) => {
  const url = `photos/${id}.jpg`;
  const description = pickItemFromList(DESCRIPTIONS);
  const likes = pickIntegerInrange(15, 200);
  const comments = createCommentState(pickIntegerInrange(0, 20));

  return {id, url, description, likes, comments};
};

const createImageStateList = (length = 25) => {
  const list = new Array(length).fill(1);

  return list.map((start, index) => createImageState(start + index));
};


createImageStateList();

export default createImageStateList;
