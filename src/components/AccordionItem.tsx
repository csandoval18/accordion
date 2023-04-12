import React, { useState } from "react"

interface AccordionItemProps {
	title?: string
	bodyContent?: string
}

const AccordionItem: React.FC<AccordionItemProps> = (
	accordionProps: AccordionItemProps,
) => {
	const [active, setActive] = useState<true | false>(false)
	return (
		<div className='accordion-item'>
			<button
				className={active ? "btn-accordion" : "btn-accordion"}
				onClick={() => {
					setActive(!active)
				}}
			>
				{accordionProps.title}
			</button>
			<div className='accordion-panel'>
				<p>{accordionProps.bodyContent}</p>
			</div>
		</div>
	)
}

export default AccordionItem
