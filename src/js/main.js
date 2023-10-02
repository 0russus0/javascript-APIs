/* Comment on top of my file */
/* console.log('test gulp');

function test() {} */

fetch('https://dummyjson.com/products')
	.then((res) => res.json())
	.then(console.log);
