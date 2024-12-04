function foo(a) {
  if (a === null) {
    return 1;
  } else if (a === 0) {
    return 1;
  }
  return a + foo(a - 1);
}
console.log(foo(5)); // 15
console.log(foo(null)); // 1
console.log(foo(0)); // 1