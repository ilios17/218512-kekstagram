'use strict';

var MIN_LIKES = 15;
var MAX_LIKES = 201;
var PICTURES_AMOUNT = 25;
var COMMENTS_ARRAY = ['Всё отлично!', 'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
var DESCRIPTIONS_ARRAY = ['Тестим новую камеру!', 'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...', 'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!'];

var pictures = [];
var pictiresList = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture__link');
var avatars = document.querySelectorAll('.social__picture');


var generateRandom = function (min, max) {
  var item = Math.floor(Math.random() * (max - min) + min);
  return item;
};

function PictureConstructor(url, likes, comments, description) {
  this.url = url;
  this.likes = likes;
  this.comments = comments;
  this.description = description;
}

var createPicturesArray = function (array) {
  for (var i = 1; i <= PICTURES_AMOUNT; i++) {
    var randomComment = COMMENTS_ARRAY[generateRandom(0, COMMENTS_ARRAY.length)];
    var randomLikes = generateRandom(MIN_LIKES, MAX_LIKES);
    var randomDescription = DESCRIPTIONS_ARRAY[generateRandom(0, DESCRIPTIONS_ARRAY.length)];
    var CreatePicture = new PictureConstructor('photos/' + i + '.jpg', randomLikes, randomComment, randomDescription);

    pictures.push(CreatePicture);
  }
  return array;
};

var createPicture = function (image) {
  var singlePicture = pictureTemplate.cloneNode(true);
  singlePicture.querySelector('.picture__img').src = image.url;
  singlePicture.querySelector('.picture__stat--likes').image = image.likes;
  singlePicture.querySelector('.picture__stat--comments').textContent = image.comments;

  return singlePicture;
};

var drawPicturesList = function (array) {
  var fragment = document.createDocumentFragment();
  for (var i = 1; i < array.length; i++) {
    fragment.appendChild(createPicture(pictures[i]));
    pictiresList.appendChild(fragment);
  }
};

var showBigPicture = function(image) {
  var mainPicture = document.querySelector('.big-picture');
  mainPicture.classList.remove('hidden');
  mainPicture.querySelector('img').src = image.url;
  mainPicture.querySelector('.likes-count').textContent = image.likes;
  mainPicture.querySelector('.comments-count').textContent = commentsArray.length;
};

var showAvatars = function(array) {
  for (var i = 0; i < array.length; i++) {
     array[i].src = 'img/avatar-' + generateRandom(1, 7) + '.svg';
  }
};

var hideElement = function (element) {
  element.setAttribute('class', 'visually-hidden');
};

showAvatars(avatars)
createPicturesArray(pictures);
drawPicturesList(pictures);
showBigPicture(pictures[0]);
hideElement(document.querySelector('.social__comment-count'));
hideElement(document.querySelector('.social__comment-loadmore'));
