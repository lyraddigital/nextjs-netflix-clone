import localFont from 'next/font/local';
import clsx from "clsx";

import NetflixLogo from "@/app/ui/shared/icons/netflix-logo/netflix-logo";
import PopcornIcon from "@/app/ui/shared/icons/popcorn/popcorn";
import MediumFormButton from '@/app/ui/shared/buttons/medium-form-button';
import SmallLinkButton from '@/app/ui/shared/buttons/small-link-button';
import Accordion from '@/app/ui/shared/accordions/accordion';
import { getFAQItems } from '@/app/ui/data/faq';

import styles from "@/app/ui/home/home.module.css";

const myFont = localFont({ src: '../public/Netflix Sans Bold.otf' });
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
              <h1 className={clsx(
                "text-[32px] leading-10",
                myFont.className
              )}>Unlimited movies, TV shows and more</h1>
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
        "mt-4 mx-6 rounded-sm p-[30px]",
        styles.richBanner
      )}>
        <div className="h-[80px] w-[80px]">
          <PopcornIcon />
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
