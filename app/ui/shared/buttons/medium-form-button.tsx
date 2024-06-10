interface MediumFormButtonProps {
    text: string;
}

export default function MediumFormButton({ text }: MediumFormButtonProps) {
    return (
        <button type="submit" className="py-2 px-4 bg-red-600 text-white font-large font-bold">
            {text}
        </button>
    );
}