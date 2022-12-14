
```js
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

```
# Header 1

Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit. 

## Header 2

- list item 1
- list item 2 
- list item 3

### Header 3

Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.
Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.