import { MouseEventHandler, PropsWithChildren } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import { Collapse } from "react-collapse";

interface AccordionItemProps extends PropsWithChildren {
    open: boolean;
    title: string;
    toggle?: MouseEventHandler<HTMLSpanElement>
}

export default function FaqItem({ children, open, title, toggle }: AccordionItemProps) {
    return (
        <li className="mt-2" onClick={toggle}>
            <div className="flex justify-between items-center p-6 bg-neutral-800">
                <span>{title}</span>
                <span>{open ? <AiOutlineClose /> : <AiOutlinePlus />}</span>
            </div>
            <Collapse isOpened={open}>
                <div className="mt-[1px] p-6 bg-neutral-800">
                    {children}
                </div>
            </Collapse>
        </li>
    );
}