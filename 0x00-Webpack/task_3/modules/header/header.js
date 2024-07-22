import $ from 'jquery';
import '../header/header.css';

console.log('Init header');

$(document).ready(function() {
    $('#header').append('<div id="logo"></div>');
    $('#header').append('<h1>Holberton Dashboard</h1>');
});
