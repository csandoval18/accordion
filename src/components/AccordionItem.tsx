import React, { useState, useRef } from "react"
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"

interface AccordionItemProps {
	title?: string
	bodyContent?: string
}

const AccordionItem: React.FC<AccordionItemProps> = (
	accordionProps: AccordionItemProps,
) => {
	const [active, setActive] = useState<true | false>(false)
	const contentEl = useRef()
	return (
		<div className='accordion-item'>
			<button
				className={`btn-accordion ${active ? "active" : ""}`}
				onClick={() => {
					setActive(!active)
				}}
			>
				{accordionProps.title}
				<span className='icon'>
					{active ? <AiOutlineClose /> : <AiOutlinePlus />}
				</span>
			</button>
			<div
				className={`accordion-panel ${active ? "active" : ""}`}
				ref={contentEl}
			>
				<p>{accordionProps.bodyContent}</p>
			</div>
		</div>
	)
}

export default AccordionItem
