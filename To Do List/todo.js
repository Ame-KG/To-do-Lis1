const text = document.querySelector('.textBar')
const btn = document.querySelector('.btn')
const ul = document.querySelector('ul')


// Text submission event:
btn.addEventListener('click', ()=>{

	// error handeling:
	if (text.value == ''){
		alert('Text Bar Empty!')
	}

	// list item creation:
	else{
		const li = document.createElement('li')
		li.textContent = text.value
		ul.appendChild(li)
		text.value = ''



	}

})


// deletion event:
ul.addEventListener('click', (e)=>{
	if (e.target.matches('li')){
		e.target.remove()
	}
})