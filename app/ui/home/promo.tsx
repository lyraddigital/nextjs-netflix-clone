import clsx from "clsx";

import PopcornIcon from "@/app/ui/shared/icons/popcorn/popcorn";
import LeftArrowIcon from '@/app/ui/shared/icons/left-arrow/left-arrow';

import styles from "@/app/ui/home/home.module.css";

export default function Promo() {
    return (
        <section className={clsx(
            "md:flex mt-4 mx-6 rounded-sm p-[30px]",
            styles.richBanner
        )}>
            <div className="transform scale-[0.8] mt-[-80px] ml-[-40px]">
                <PopcornIcon />
            </div>
            <div>
                <p className="text-[20px] font-semibold leading-8">The Netflix you love for just $7.99.</p>
                <p className="text-base mt-1 mb-2">Get the Standard with ads plan.</p>
                <button className="flex gap-2 text-[#448ef4] w-[fit-content] items-center">
                    <span className="text-base font-medium underline">Learn more</span>
                    <LeftArrowIcon />
                </button>
            </div>
        </section>
    );
}