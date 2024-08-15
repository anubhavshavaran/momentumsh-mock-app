type TitlebarProps = {
    title: string
}

export default function Titlebar({ title }: TitlebarProps) {
    return (
        <div className='p-4 col-start-2 col-end-4 bg-gray border-b-2 border-light-gray flex items-center '>
            <p className="text-white font-medium text-[16px]">{title}</p>
        </div>
    );
}