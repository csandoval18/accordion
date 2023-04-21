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
	const contentEl = useRef<HTMLDivElement>(null)
	return (
		<div className='accordion-item'>
			<div
				className={`btn-accordion ${active ? "active" : ""}`}
				onClick={() => {
					setActive(!active)
				}}
			>
				{accordionProps.title}
				<span className='icon'>
					{active ? <AiOutlineClose /> : <AiOutlinePlus />}
				</span>
				<div
					className={`accordion-panel ${active ? "active" : ""}`}
					ref={contentEl}
				>
					<p>{accordionProps.bodyContent}</p>
				</div>
			</div>
		</div>
	)
}

export default AccordionItem
