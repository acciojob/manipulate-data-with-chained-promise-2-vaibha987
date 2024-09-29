//your JS code here. If required.
let promise=new Promise((resolve,reject)=>{
	setTimeout(()=>{
			resolve([1,2,3,4])
	},3000)
})
promise.then((numbers)=>{
return number.filter((item)=>item%2==0)
}).then((numbers)=>{
return number.map((num)=>num*2)
}).then((numbers) => {
    document.getElementById('output').textContent = numbers.toString();
  });