import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ title, info }) => {
    const [infoShow, setInfoShow] = useState(false);
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={() => setInfoShow(!infoShow)} className='btn'>
                    {infoShow ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </header>
            {infoShow && <p>{info}</p>}
        </article>
    )
}

export default Question
