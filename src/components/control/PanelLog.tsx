import warning from './../../assets/icons/Warning.png';
import PanelTitle from './PanelTitle';

type PanelLogProps = {
    message: string
}

export default function PanelLog({ message }: PanelLogProps) {
    return (
        <div className='w-full flex justify-start items-center gap-3'>
            <img src={warning} alt='warning' className='w-[12px] h-[12px]' />
            <PanelTitle text={message} />
        </div>
    );
}