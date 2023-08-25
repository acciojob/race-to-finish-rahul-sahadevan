window.promises = [];
const div = document.getElementById("output");

const p1 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("a");
	},1000)
})
const p2 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("b");
	},2000)
})
const p3 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("c");
	},3000)
})
const p4 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("d");
	},4000)
})
const p5 = new Promise((resolve) =>{
	setTimeout(() =>{
		resolve("e");
	},5000)
})

promises.push(p1)
promises.push(p2)
promises.push(p3)
promises.push(p4)
promises.push(p5)

Promise.any(promises).then((val)=>{
	div.innerText = val;
})







// Do not change the code above this
// add your promises to the array `promises`
