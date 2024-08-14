type SelectListProps = {
    options: Array<string>
}

export default function SelectList({ options }: SelectListProps) {
    return (
        <select title="select" className="w-full text-white bg-transparent border-2 rounded-[4px] border-gray-d9 py-1 px-4 outline-none">
            {
                options.map((opt, i) => <option key={i}>
                    {opt}
                </option>)
            }
        </select>
    );
}
