import NetflixLogo from "@/app/ui/shared/icons/netflix-logo/netflix-logo";
import SmallLinkButton from '@/app/ui/shared/buttons/small-link-button';

export default function TopBar() {
    return (
        <div className="p-6 flex items-center">
            <div className="flex-auto mr-4">
                <NetflixLogo />
            </div>
            <SmallLinkButton text="Sign In" link="/sign-in" />
        </div>
    );
}