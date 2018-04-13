'use strict';

var MIN_LIKES = 15;
var MAX_LIKES = 201;
var PICTURES_AMOUNT = 25;

var commentsArray =['Всё отлично!','В целом всё неплохо. Но не всё.',
'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

var descriptionsArray = ['Тестим новую камеру!','Затусили с друзьями на море',
'Как же круто тут кормят',
'Отдыхаем...','Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
'Вот это тачка!'];

var generateRandom = function(min, max) {
  var item = Math.floor(Math.random() * (max - min) + min);
  return item;
};

var pictures = [];

function picture(url,likes,comments,description) {
  this.url = url;
  this.likes = likes;
  this.comments = comments;
  this.description = description;
};

var createPicturesArray = function(pictures) {
  for (var i = 1; i<=PICTURES_AMOUNT; i++) {
  var randomComment = commentsArray[generateRandom(0, commentsArray.length)];
  var randomLikes = generateRandom(MIN_LIKES, MAX_LIKES);
  var randomDescription = descriptionsArray[generateRandom(0, descriptionsArray.length)];
  var newPicture = new picture('photos/'+i+'.jpg',randomLikes,randomComment,randomDescription);

  pictures.push(newPicture);
 }
 return pictures;
};

createPicturesArray(pictures);

var pictiresList = document.querySelector('.pictures');
var pictureTemplate = document.querySelector('#picture').content.querySelector('.picture__link');

var createPicture = function(picture) {
  var singlePicture = pictureTemplate.cloneNode(true);
  singlePicture.querySelector('.picture__img').src = picture.url;
  singlePicture.querySelector('.picture__stat--likes').textContent = picture.likes;
  singlePicture.querySelector('.picture__stat--comments').textContent = picture.comments;

  return singlePicture;
};

var drawPicturesList = function(pictures) {
  var fragment = document.createDocumentFragment();
  for (var i = 1; i < pictures.length; i++) {
    fragment.appendChild(createPicture(pictures[i]));
    pictiresList.appendChild(fragment);
 }
};

drawPicturesList(pictures);

var mainPicture = document.querySelector('.big-picture');
mainPicture.classList.remove('hidden');
mainPicture.querySelector('img').src = 'photos/1.jpg';
mainPicture.querySelector('.likes-count').textContent = pictures[0].likes;
mainPicture.querySelector('.comments-count').textContent = commentsArray.length;

var avatars = document.querySelectorAll('.social__picture');

for (var i = 0; i < avatars.length; i++) {
avatars[i].src="img/avatar-"+ generateRandom(1,7)+".svg";
};

var hideElement = function(element) {
  element.setAttribute('class','visually-hidden');
};

hideElement(document.querySelector('.social__comment-count'));
hideElement(document.querySelector('.social__comment-loadmore'));
