const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation
  someAsyncOperation().then(() => {
    res.send('Hello World!');
  }).catch(err => {
    console.error(err);
    // Error handling missing: Not sending an error response
  });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
async function someAsyncOperation() {
  // Simulate an asynchronous operation that may fail
  await new Promise(resolve => setTimeout(resolve, 1000));
  throw new Error('Async operation failed');
}