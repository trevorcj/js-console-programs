var tweet = prompt('Compose your tweet:');
alert('You have written ' + tweet.length + ' ' + 'charcters' + ', you have ' + (140-tweet.length) + ' ' + 'characters left');

alert('Output: ' + tweet.slice(0,140));

// PERSONAL TEST
// Form words using the slice keyword
// var test = 'Transfiguration';
// test.slice(9,14);
