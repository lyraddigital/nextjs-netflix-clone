import Image from "next/image";

export default function TvPromo() {
    return (
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
    );
}