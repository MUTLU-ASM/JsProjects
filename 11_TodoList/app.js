window.addEventListener('load', () => {
	const form = document.querySelector("#new-task-form")
	const input = document.querySelector("#new-task-input")
	const listEl = document.querySelector("#tasks")

	form.addEventListener('submit', (e) => {
		e.preventDefault()

		const task = input.value

		const taskEl = document.createElement('div')
		taskEl.classList.add('task')

		const taskContentEl = document.createElement('div')
		taskContentEl.classList.add('content')

		taskEl.appendChild(taskContentEl)

		const taskınputEl = document.createElement('input')
		taskınputEl.classList.add('text')
		taskınputEl.type = 'text'
		taskınputEl.value = task
		taskınputEl.setAttribute('readonly', 'readonly')

		taskContentEl.appendChild(taskınputEl)

		const taskActionsEl = document.createElement('div')
		taskActionsEl.classList.add('actions')
		
		const taskEditEl = document.createElement('button')
		taskEditEl.classList.add('düzenle')
		taskEditEl.innerText = 'Düzenle'

		const taskDeleteEl = document.createElement('button')
		taskDeleteEl.classList.add('sil')
		taskDeleteEl.innerText = 'Sil'

		taskActionsEl.appendChild(taskEditEl)
		taskActionsEl.appendChild(taskDeleteEl)

		taskEl.appendChild(taskActionsEl)

		listEl.appendChild(taskEl)

		input.value = ''

		taskEditEl.addEventListener('click', (e) => {
			if (taskEditEl.innerText.toLowerCase() == "düzenle") {
				taskEditEl.innerText = "Kaydet"
				taskınputEl.removeAttribute("readonly")
				taskınputEl.focus()
			} else {
				taskEditEl.innerText = "Düzenle"
				taskınputEl.setAttribute("readonly", "readonly")
			}
		})

		taskDeleteEl.addEventListener('click', (e) => {
			listEl.removeChild(taskEl)
		})
	})
})