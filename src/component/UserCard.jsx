import React from 'react'
import pic from '../assets/photo.jpg'
import './UserCard.css'

const UserCard = (props) => {
    return (
        <div className = "user-container"> 
            <p id = 'user-name'>{props.name}</p>
            <img id = 'user-image' src={pic} alt='image'></img>
            <p id = 'user-desc'>{props.desc}</p>
        </div>
    )
};

export default UserCard;