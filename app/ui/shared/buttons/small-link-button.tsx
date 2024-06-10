import Link from "next/link";

interface SmallLinkButtonProps {
    text: string;
    link: string;
}

export default function SmallLinkButton({ link, text }: SmallLinkButtonProps) {
    return (
        <Link className="px-4 py-[2px] rounded bg-red-600 text-white text-[14px] font-bold" href={link}>
            {text}
        </Link>
    );
}