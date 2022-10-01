var main = document.querySelector('.main')
var btn = document.querySelector('#btn')
var data1 = document.querySelector('#data1')
var data2 = document.querySelector('#data2')
var data3 = document.querySelector('#data3')

data1.innerHTML = '3'
btn.addEventListener('click', () => {
	userAction()
})

const userAction = async () => {
	console.log('here')
	const response = await fetch('https://api.henrikdev.xyz/valorant/v1/account/soda/XVII')
	const myJson = await response.json()
	console.log(myJson)
}
