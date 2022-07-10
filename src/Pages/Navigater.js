import React from 'react'
import { useLocation } from 'react-router-dom';
import image from "../User.png"

const Navigater = () => {
  const location = useLocation();
  const { title, img, description, date, category } = location.state;
  console.log(location);
  return (
    <>
      <div id='block4'>
                <div className='block4'>
                    <h1>{title}</h1>
                    <img className='block4_img' src={img} alt="" />
                    <div className='block4_desc'>
                        <span>{description}</span><br /><span>{description}</span><br /><br />
                        <span>{description}</span>
                    </div>
                    <b>{category}</b><hr />
                    <div className='user'>
                        <img className='user_img' src={image} alt="" />
                        <div>
                            <p>Written By:</p>
                            <h4>Birla Ganvir</h4>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Navigater;
