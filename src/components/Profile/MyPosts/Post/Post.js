import React from 'react'
import s from './Post.module.css'

const Post = (props) => {
    return <div className={s.item}>
        <img src='https://i.pinimg.com/originals/73/61/94/736194e93dc947184738143db9dfcae6.jpg'/>
        {props.message}
        <div>
            <span>like</span> {props.likesCount}
        </div>
    </div>
}

export default Post