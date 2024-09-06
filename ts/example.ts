function add(a: number, b: number) {
  try {
    return a + b;
  } catch (error) {
    console.error('add', error);
    return 0;
  }
}

function subtract(a: number, b: number) {
  try {
    return a - b;
  } catch (error) {
    console.error('subtract', error);
    return 0;
  }
}

function clone(item: any[]) {
  try {
    return [...item];
  } catch (error) {
    console.error('clone error:', error);
    return [];
  }
}

export default { add, subtract };