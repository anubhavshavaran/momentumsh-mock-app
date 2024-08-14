import React, { PropsWithChildren } from 'react'

export default function ControlPanelAction({ children }: PropsWithChildren) {
    return (
        <div className='controlPanelAction'>
            {children}
        </div>
    );
}