import React, { ReactNode, useState } from 'react'

type Props = {
    children?: ReactNode
}

const ThemeSwitch = ({children }: Props) => {

    return (
        <>
            {children}
        </>
    )
};

export default ThemeSwitch;