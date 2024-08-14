type InputProps = {
    label: string
}

function Input({ label }: InputProps) {
    return (
        <div className="border-[1px] border-light-orange rounded-md relative">
            <input
                title="input"
                type='text'
                className='bg-transparent w-full p-2 outline-none text-white'
            />
            <p className="text-[14px] font-normal text-gray-b7 absolute top-[-12px] left-[18px] bg-gray px-2">{label}</p>
        </div>
    );
}

export default Input;