import MediumFormButton from '@/app/ui/shared/buttons/medium-form-button';

export default function Hero() {
    return (
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
    );
}