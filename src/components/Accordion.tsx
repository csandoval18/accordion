import React from "react"
import AccordionItem from "./AccordionItem"

interface AccordionProps {}

const Accordion: React.FC<AccordionProps> = () => {
	return (
		<div className='Accordion accordion-wrapper'>
			<AccordionItem title='Section 1' bodyContent='lorem ipsum' />
			<AccordionItem title='Section 2' bodyContent='lorem ipsum' />
			<AccordionItem title='Section 3' bodyContent='lorem ipsum' />
		</div>
	)
}

export default Accordion
