import right from './../assets/icons/RightArrow.png';

type TaskbarProps = {
    paths: Array<string>;
}

type PathTextProps = {
    text: string;
}

function Separator() {
    return <img src={right} alt='path seaparator' className='w-[9px] h-[9px]' />;
}

function PathText({ text }: PathTextProps) {
    return (
        <p className="font-medium text-[16px] text-gray-bd">{text}</p>
    );
}

export default function Taskbar({ paths }: TaskbarProps) {
    return (
        <div className='p-2 pl-4 row-start-3 row-end-4 border-2 border-b-0 bg-gray border-light-gray flex gap-2 items-center'>
            {
                paths.map((path, i) => (
                    <>
                        <PathText text={path} key={i} />
                        {i !== paths.length - 1 && <Separator/>}
                    </>
                ))
            }
        </div>
    );
}