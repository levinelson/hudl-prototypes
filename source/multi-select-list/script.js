// @codekit-prepend '../../bower_components/jquery/dist/jquery.min.js';

$(document).ready(function() {
  var iconUnselected = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#13293F" fill-opacity=".65" fill-rule="evenodd" d="M2,16 C2,8.28 8.281,2 16,2 C23.72,2 30,8.28 30,16 C30,23.72 23.72,30 16,30 C8.281,30 2,23.72 2,16 Z M4,16 C4,22.617 9.384,28 16,28 C22.617,28 28,22.617 28,16 C28,9.383 22.617,4 16,4 C9.384,4 4,9.383 4,16 Z"/></svg>';
  var iconSelected = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><g fill="none" fill-rule="evenodd"><path fill="#009CE3" d="M2,16 C2,23.72 8.281,30 16,30 C23.72,30 30,23.72 30,16 C30,8.28 23.72,2 16,2 C8.281,2 2,8.28 2,16 Z"/><path fill="#FFF" d="M21.265,10.281 L13.553,19.473 L10.485,16.9 C10.069,16.55 9.434,16.602 9.079,17.024 L8.436,17.792 C8.078,18.219 8.135,18.844 8.557,19.198 L13.158,23.059 C13.366,23.233 13.629,23.308 13.885,23.286 L13.887,23.288 C14.142,23.265 14.388,23.144 14.565,22.933 L23.563,12.209 C23.921,11.784 23.864,11.155 23.441,10.801 L22.674,10.156 C22.485,9.999 22.258,9.922 22.032,9.922 C21.746,9.922 21.463,10.044 21.265,10.281 Z"/></g></svg>'
  var iconSelectHover = '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="#009CE3" fill-rule="evenodd" d="M2,16 C2,8.28 8.281,2 16,2 C23.72,2 30,8.28 30,16 C30,23.72 23.72,30 16,30 C8.281,30 2,23.72 2,16 Z M5,16 C5,22.0655833 9.93533333,27 16,27 C22.0655833,27 27,22.0655833 27,16 C27,9.93441667 22.0655833,5 16,5 C9.93533333,5 5,9.93441667 5,16 Z"/></svg>';

  var fixtures = [
    {
      id: 1,
      name: 'Lincoln High School',
      number: 'team',
    }, {
      id: 2,
      name: 'Johnny Smith',
      number: '#14',
    }, {
      id: 3,
      name: 'Scott Stockton',
      number: '#16',
    }, {
      id: 4,
      name: 'James B. Goode',
      number: '#22',
    }, {
      id: 5,
      name: 'The Greatest Athlete',
      number: '#33',
    }, {
      id: 6,
      name: 'Derek Johnson',
      number: '',
    }
  ];

  fixtures.forEach(function(item) {
    $('.list').append('<li class="list-item">' +
    '<figure class="select">' + iconUnselected + '</figure>' +
    '<span class="label">' + item.number + '</span>' +
    '<span class="name">'+ item.name + '</span>' +
    '<figure class="avatar"><img src="img/avatar/image-' + item.id + '.png" alt=""></figure>' +
    '</li>');
  });

  $('.list-item').mouseenter(function() {
    if (!$(this).hasClass('is-selected')) {
      $(this).children('.select').html(iconSelectHover);
    }
  });

  $('.list-item').mouseleave(function() {
    if (!$(this).hasClass('is-selected')) {
      $(this).children('.select').html(iconUnselected);
    }
  });

  $('.list-item').click(function() {
    if ($(this).hasClass('is-selected')) {
      $(this).removeClass('is-selected');
      $(this).children('.select').html(iconUnselected);
    } else {
      $(this).children('.select').html(iconSelected);
      $(this).addClass('is-selected');
    }
  });

});
