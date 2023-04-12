import { useState } from "react"
import "./App.css"

function App() {
	return (
		<div className='App'>
			<button className='accordion'>Section 1</button>
			<div className='panel'>
				<p>Lorem ipsum...</p>
			</div>

			<button className='accordion'>Section 2</button>
			<div className='panel'>
				<p>Lorem ipsum...</p>
			</div>

			<button className='accordion'>Section 3</button>
			<div className='panel'>
				<p>Lorem ipsum...</p>
			</div>
		</div>
	)
}

export default App
