import React from 'react'

type ButtonProps = {
    label: string,
    onClick: () => void
}

export default function Button({ label, onClick }: ButtonProps) {
    return (
        <button
            type='button'
            title='button'
            className='bg-blue py-1 px-6 rounded-[4px]'
            onClick={onClick}
        >
            <p className='text-white font-medium capitalize text-[14px]'>{label}</p>
        </button>
    );
}