import { ReactNode } from "react";

type ColumnProps = {
    gap: string,
    margin: string,
    children: ReactNode
}

export default function Column({ gap, margin, children }: ColumnProps) {
    return (
        <div className={`mb-${margin} flex flex-col gap-${gap} mb-5`}>{children}</div>
    );
}
