type SidebarButtonProps = {
    logo: {
        source: string,
        altText: string
    },
    onClick: () => void
}

export default function SidebarButton({ logo, onClick }: SidebarButtonProps) {
    return (
        <button
        type='button'
        onClick={onClick}
        className='flex items-center justify-center'>
            <img src={logo.source} alt={logo.altText} className="w-[20px]" />
        </button>
    );
}
