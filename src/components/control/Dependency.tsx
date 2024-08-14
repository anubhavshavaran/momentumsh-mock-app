import Checkbox from '../Checkbox';
import linkImg from './../../assets/icons/Link.png';

type DependencyProps = {
    link?: string,
    label: string
}

function Dependency({ link, label }: DependencyProps) {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex justify-center items-center gap-3'>
                <Checkbox />
                <p className='text-[15px] text-white font-medium'>{label}</p>
            </div>
            {
                link && <a href={link}><img src={linkImg} title='linkImg' className='w-[13px] h-[13px]' /></a>
            }
        </div>
    )
}

export default Dependency