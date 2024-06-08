import localFont from 'next/font/local';
import clsx from "clsx";

import NetflixLogo from "@/app/ui/shared/logos/netflix-logo";
import SmallLinkButton from '@/app/ui/shared/buttons/small-link-button';

import styles from "@/app/ui/home/home.module.css";


const myFont = localFont({ src: '../public/Netflix Sans Bold.otf' });

export default function Home() {
  return (
    <main>
      <div className={
        clsx(
          'bg-slate-800 bg-[url("/home/top-banner-small.jpg")] bg-cover',
          styles.headerContainer
        )}>
        <div className={clsx(
          'bg-gradient-to-t from-neutral-950 from-1% via-transparent via-70% to-neutral-950 to-96%',
          styles.innerHeaderContainer
        )}>
          <header>
            <div className="p-6 flex items-center">
              <div className="flex-auto mr-4">
                <NetflixLogo />
              </div>
              <SmallLinkButton text="Sign In" link="/sign-in" />
            </div>
            <div className="px-6 pt-10 text-center">
              <h1 className={clsx(
                "text-3xl",
                myFont.className
              )}>Unlimited movies, TV shows and more</h1>
              <div className="p-4">
                <p className="mt-4">
                  Watch anywhere. Cancel at any time.
                </p>
                <p className="mt-6">
                  Ready to watch Netflix? Enter your email to create or restart your membership.
                </p>
              </div>

            </div>
          </header>
        </div>
      </div>
    </main>
  );
}
