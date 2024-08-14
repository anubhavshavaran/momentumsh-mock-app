import { useState } from "react"
import check from './../assets/icons/Check.png';

function Checkbox() {
    const [checked, setChecked] = useState(false);

    const cssClass = checked ? 'bg-blue border-blue' : 'border-gray-64';

    function handleClick() {
        setChecked(c => !c);
    }

    return (
        <button
            type="button"
            title="checkbox"
            onClick={handleClick}
            className={`w-[16px] h-[16px] border-[1px] rounded-[2px] ${cssClass} flex justify-center items-center`}
        >
            {
                checked && <img src={check} alt="check" className="w-[8px] h-[8px]" />
            }
        </button>
    )
}

export default Checkbox