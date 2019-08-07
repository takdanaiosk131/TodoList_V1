import React from 'react'

const Button = (props) => {
    return (
        <button type="button" className={props.bClassName} onClick={props.handleClick}>
            {props.children}
        </button>
    )
}

export default Button