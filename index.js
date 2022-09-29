// const request = async () => {
// 	const response = await fetch("https://swapi.dev/api/people");
// 	const data = await response.json()
	
// 	console.log(data.results.map(num => {
// 		return num.name
// 	}))
// }
const list = document.querySelector("ul")


const request = async () => {
	const response = await fetch("https://swapi.dev/api/people");
	const data = await response.json()

	// the data is an array with objects as the elements. 
	//Map through the array and return an neww array of the names of character
	const names = data.results.map(num => {
		return num.name
	})
	// console.log(names)

	// loops through the name of characters and add each name to the unordered list
	for(let i = 0; i < names.length; i++){
		list.innerHTML += `<li><a href = '#'>${names[i]}</a></li>`
	}


	const callWithHeroId = async (id) => {
		const response = await fetch(`https://swapi.dev/api/people/${id}`);
		const data = await response.json()
		// console.log(data)
		const detail = document.getElementById("name")
		const gender = document.getElementById("gender")
		const height = document.getElementById("height")
		const image = document.querySelector("img")

		image.setAttribute("src", `${names[id - 1]}.jpg`)
		detail.innerText = data.name;
		gender.innerText = "Gender: " + data.gender.toUpperCase();
		height.innerText = "Height: " + data.height + "cm";
	}
	const listItems = document.querySelectorAll("li")
	const linkItems = document.querySelectorAll("a")
	// const id = names.indexOf(`${linkItems[1].innerText}`) + 1
	linkItems.forEach(links => {
		links.onclick = () => {

			const id = names.indexOf(`${links.innerText}`) + 1
			callWithHeroId(id)
		}
	})
	// linkItems[1].onclick = () => {callWithHeroId(names.indexOf(`${linkItems[1].innerText}`) + 1)}
	// console.log(names.indexOf(`${linkItems.innerText}`) + 1)
	// list.innerHTML += `<li><a href = '#'>${names[0]}</a></li>`
}

// console.log(list.innerHTML)
request()
