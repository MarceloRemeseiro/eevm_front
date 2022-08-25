
var url = "youtube.json";

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify('https://jsonplaceholder.typicode.com/posts'), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
