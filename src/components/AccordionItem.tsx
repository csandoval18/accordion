import React, { useState, useRef } from 'react';
import {
	AiOutlineClose,
	AiOutlinePlus,
} from 'react-icons/ai';

interface AccordionItemProps {
	title?: string;
	bodyContent?: string;
}

const AccordionItem: React.FC<AccordionItemProps> = (
	accordionProps: AccordionItemProps,
) => {
	const [active, setActive] = useState<true | false>(
		false,
	);
	const contentEl = useRef<HTMLDivElement>(null);
	return (
		<div className='accordion-item'>
			<div
				className={`btn-accordion ${
					active ? 'active' : ''
				}`}
				onClick={() => {
					setActive(!active);
				}}
			>
				<span className='accordion-title'>
					{accordionProps.title}
				</span>
				<span className='icon'>
					{active ? (
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 1024 1024'
							version='1.1'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<defs></defs>
							<path d='M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z'></path>
							<path d='M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z'></path>
						</svg>
					) : (
                        'test'
					)}
				</span>
				<div
					className={`accordion-panel ${
						active ? 'active' : ''
					}`}
					ref={contentEl}
				>
					<p className=''>
						{accordionProps.bodyContent}
					</p>
				</div>
			</div>
		</div>
	);
};

export default AccordionItem;
