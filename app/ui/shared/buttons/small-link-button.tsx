import Link from "next/link";

interface SmallLinkButtonProps {
    text: string;
    link: string;
}

export default function SmallLinkButton({ link, text }: SmallLinkButtonProps) {
    return (
        <Link className="px-4 py-1 rounded bg-red-600 text-white font-medium" href={link}>
            {text}
        </Link>
    );
}