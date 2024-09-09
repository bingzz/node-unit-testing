// expect response to be an object
test('asynchronous data', async () => {
  const response = await fetch('https://dummyjson.com/users');
  expect(response).not.toBeNull();
  expect(response).not.toBeUndefined();
});
