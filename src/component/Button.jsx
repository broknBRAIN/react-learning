import React from 'react';

const Button = (props) => {
    return (
        <div>
            {props.children}
            <button onClick={props.onclickFn}>Click me</button>
            {/* ***here you pass function without () in whole javascript*** */}
        </div>
    )
}

export default Button;

//in button parameters we could have entered props
//then use props.onclickFn
//but here we did de-structuring after puttin {} brackets, in c++ we ue []