const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&ststus=active');

// Serialized URL
console.log(myUrl.href);