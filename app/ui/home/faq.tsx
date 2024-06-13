import Accordion from '@/app/ui/shared/accordions/accordion';

import { getFAQItems } from '@/app/ui/data/faq';

const faqItems = getFAQItems();

export default function Faq() {
    return (
        <section className="mx-6">
            <h2>Frequently Asked Questions</h2>
            <div className="mt-6">
            <Accordion items={faqItems} />
            </div>
        </section>
    );
}