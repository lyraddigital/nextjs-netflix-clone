import clsx from "clsx";
import Image from "next/image";

import NetflixLogo from "@/app/ui/shared/icons/netflix-logo/netflix-logo";
import PopcornIcon from "@/app/ui/shared/icons/popcorn/popcorn";
import LeftArrowIcon from '@/app/ui/shared/icons/left-arrow/left-arrow';
import MediumFormButton from '@/app/ui/shared/buttons/medium-form-button';
import SmallLinkButton from '@/app/ui/shared/buttons/small-link-button';
import Accordion from '@/app/ui/shared/accordions/accordion';
import { getFAQItems } from '@/app/ui/data/faq';

import styles from "@/app/ui/home/home.module.css";

const faqItems = getFAQItems();

export default function Home() {
  return (
    <main>
      <div className="min-h-[504px] bg-[url('/home/top-banner-small.jpg')] bg-cover">
        <div className="min-h-[504px] bg-gradient-to-t from-neutral-950 from-1% via-transparent via-70% to-neutral-950 to-96%">
          <header>
            <div className="p-6 flex items-center">
              <div className="flex-auto mr-4">
                <NetflixLogo />
              </div>
              <SmallLinkButton text="Sign In" link="/sign-in" />
            </div>
            <div className="px-6 pt-10 text-center">
              <h1 className="text-[32px] leading-10">Unlimited movies, TV shows and more</h1>
              <div className="p-4 leading-7">
                <p>
                  Watch anywhere. Cancel at any time.
                </p>
                <p className="mt-6">
                  Ready to watch Netflix? Enter your email to create or restart your membership.
                </p>
              </div>
              <form className="mt-2 px-6 flex flex-col items-center">
                <div className="max-w-[586px] w-full bg-[#161616]/[0.7] rounded relative border-gray-500 border border-solid">
                  <label htmlFor="email-address" className="absolute top-3 left-4 text-white/[0.7]">Email address</label>
                  <input type="email" id="email-address" className="bg-transparent w-full px-4 pt-5 pb-1 text-base relative border-transparent" />
                </div>
                <div className="mt-3">
                  <MediumFormButton text="Get started" />
                </div>
              </form>
            </div>
          </header>
        </div>
      </div>
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
      <section className="mx-6 my-16 text-center">
        <h2 className="text-[32px] font-bold">Enjoy on your TV</h2>
        <p className="pt-4">
          Watch titles on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
        </p>
        <div className="relative">
          <Image src="/home/tv.png" width="342" height="256" alt="Desktop TV" />
          <div className="overflow-hidden absolute left-0 top-12 -z-10 mx-10 w-[262px] h-[186px]">
            <video className="transform scale-[2] origin-top-left" data-uia="nmhp-card-animation-asset-video" autoPlay playsInline muted loop>
              <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
      <section className="mx-6">
        <h2>Frequently Asked Questions</h2>
        <div className="mt-6">
          <Accordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
