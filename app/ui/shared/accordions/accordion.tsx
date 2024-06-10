'use client';

import { useState } from "react";

import { AccordionEntry } from "@/app/models/shared/accordions/accordion-entry";

import AccordionItem from "./accordion-item";
import './accordion.css';

interface AccordionProps {
    items: AccordionEntry[];
}

export default function Accordion({ items }: AccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | undefined>(undefined);

    const toggle = (index: number) => {
        if (openIndex === index) {
            return setOpenIndex(undefined);
        }

        setOpenIndex(index);
    };

    return (
        <ul>
            {items.map((item, index) => (
                <AccordionItem key={index} open={openIndex === index} title={item.title} toggle={() => toggle(index)}>{item.description}</AccordionItem>
            ))}
        </ul>
    );
}