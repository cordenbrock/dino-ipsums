import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import DinoName from './js/dinoName.js';
import BabySinclair from './js/babySinclair.js';




$(document).ready(function()  {
  $('#form').submit(function(event)  {
    event.preventDefault();
    let lastname = $('#surname').val();
    let promise1 = DinoName.getDinoName();
    let promise2 = BabySinclair.getGif();
    Promise.all([promise1, promise2]).then((responseArray) => {
      const body = JSON.parse(responseArray[0]);
      const gif = JSON.parse(responseArray[1]);
      console.log(body, gif);
      $('#output').text(`How does the name ${body[0][0]} ${body[0][1]} ${lastname} sound for your baby dinosour?`);
      $('#show-gif').html(`<img src=${gif.data[0].images.original.url}>`);
    }, function(error) {
      $('#show-errors').text(`There was an error processing your request: ${error}`);    
    });
  });
});




// $(document).ready(function()  {
//   $('#form').submit(function(event)  {
//     event.preventDefault();
//     // clearFields();
//     let lastname = $('#surname').val();
//     let promise1 = DinoName.getDinoName();
//     let promise2 = BabySinclair.getGif();
//     Promise.all([promise1, promise2]).then((response) => {
//       const body = JSON.parse(promise1.response); //how do we differentiate between which response to parse for each promise
//       const gif = JSON.parse(promise2.response); //this code does not work
//       $('#output').text(`How does the name ${body[0][0]} ${body[0][1]} ${lastname} sound for your baby dinosour?`);
//       $('#showGif1').html(`<img src=${gif.data[0].images.original.url}>`);
//     }, function(error) {
//       $('#show-errors').text(`There was an error processing your request: ${error}`);    
//     });
//   });
// });



// Successful API call for Dino ipsums

// $(document).ready(function()  {
//   $('#form').submit(function(event)  {
//     event.preventDefault();
//     // clearFields();
//     let lastname = $('#surname').val();
//     let promise = DinoName.getDinoName();
//     promise.then(function(response) {
//       const body = JSON.parse(response);
//       $('#output').text(`How does the name ${body[0][0]} ${body[0][1]} ${lastname} sound for your baby dinosour?`);
//     },  function(error) {
//       $('#show-errors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });

// Successful API call for Sinclair GIF

// $(document).ready(function()  {
//   $('#form').submit(function(event)  {
//     event.preventDefault();
//     // clearFields();
//     let promise = BabySinclair.getGif();
//     promise.then(function(response) {
//       const gif = JSON.parse(response);
//       $('#show-gif').html(`<img src=${gif.data[0].images.original.url}>`);
//     },  function(error) {
//       $('#show-errors').text(`There was an error processing your request: ${error}`);
//     });
//   });
// });