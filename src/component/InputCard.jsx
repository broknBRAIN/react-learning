import React from 'react'

const InputCard = (props) => {
    return (
        <div>
            {/* here i am creating an input field
            whatever we enter in this input field
            the name is updated in the parent section, that is app section */}
            <input type='text' onChange={(e) => props.setName(e.target.value)} />
            {/* this e used here is for event handling in js */}
        </div>
    )
}

export default InputCard;
