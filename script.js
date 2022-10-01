var main = document.querySelector('.main')
var btn = document.querySelector('#btn')
var data1 = document.querySelector('#data1')
var data2 = document.querySelector('#data2')
var data3 = document.querySelector('#data3')

var user_name

data1.innerHTML = '3'
btn.addEventListener('click', () => {
	userAction()
})

const userAction = async () => {
	console.log('here')
	// const response = await fetch('https://api.henrikdev.xyz/valorant/v3/matches/ap/soda/XVII?filter=competitive')
	// const profile_data = await response.json()
	// console.log(profile_data)
}
const axios = require('axios')

;(async () => {
	const { data } = await axios.get('https://async.scraperapi.com/jobs/0962a8e0-5f1a-4e14-bf8c-5efcc18f0953')

	console.log(data)
})()
