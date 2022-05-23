let obj = {
	a:13,
	b:33
};
let obj2 = {...obj};
let obj3 = {obj};
console.log(obj2); //{a : 13, b: 33}
console.log(obj3); 
