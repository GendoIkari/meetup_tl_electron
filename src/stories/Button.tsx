import './Button.scss'
import React from 'react'

interface ButtonProps {
    title: string
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = ({ title, onClick = () => { } }: ButtonProps) => {
    return <div className="Button" onClick={
        (event) => {
            event.preventDefault()
            onClick()
        }}>
        {title}
    </div>
}
