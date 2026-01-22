//your JS code here. If required.
const myDiv = document.getElementById("output");

let arr = [1,2,3,4];

let promise =(data)=>{
	return new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve(data.filter(item=> item%2==0));
	},1000)
 });
}
let promise2 = (data)=>{
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			resolve(data.map(item = item*2))
		},3000)
	})
}

promise(arr).then((data)=>{
	myDiv.innerHTML = data;
	return promise2(data);
}).then((data)=>{
	myDiv.innerHTML = data;
}).catch((e)=>{
	console.log(e);
})




