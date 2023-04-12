import React, { useState } from "react"
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"

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
				className={active ? "btn-accordion active" : "btn-accordion"}
				onClick={() => {
					setActive(!active)
				}}
			>
				{accordionProps.title}
				<span className='icon'>
					{active ? <AiOutlineClose /> : <AiOutlinePlus />}
				</span>
			</button>
			<div className={active ? "accordion-panel active" : "accordion-panel"}>
				<p>{accordionProps.bodyContent}</p>
			</div>
		</div>
	)
}

export default AccordionItem
