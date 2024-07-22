import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
const button = $('<button>Click here to get started</button>');
$('body').append(button);
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;
const updateCounter = _.debounce(() => {
    count++;
    $('#count').text(`${count} clicks on the button`);
}, 500);

button.on('click', updateCounter);
