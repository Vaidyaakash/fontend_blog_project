import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [is, setIs] = useState(false)

    const navigation = () => {
        setIs(!is)
    }
    const trunof = () => {
        setIs(false)
    }

    return (
        <>
            <div className='head__one'>
                <div className='top'><span id='h3'>The</span> <span id='h1'>Siren</span></div>
                <div className='head__one_'>
                    <div id='head_child_'>
                        <i onClick={navigation} className="fa-solid fa-bars"></i>
                        <div className='top_'><b>The Siren</b> </div>
                    </div>
                    {/* <div></div> */}
                </div>
            </div>
            <div id='nav_center'>
                <div className='head__two'>
                    <ul>
                        <Link to='/home'> <li>Home</li> </Link>
                        <Link to='/tourism'> <li>Tourism</li> </Link>
                        <Link to='/sports'> <li>Sports</li> </Link>
                        <Link to='/technology'> <li>Technology</li> </Link>
                        <Link to='/health'> <li>Health</li> </Link>
                        <Link to='/bollywood'> <li>Bollywood</li> </Link>
                    </ul>
                </div>
                <hr />
            </div>
            <div>
                {is &&
                    <div className='nav_res'>
                        <div className='nav_res_child'>
                            <Link to='/home'> <div onClick={trunof}>Home</div> </Link>
                            <Link to='/tourism'> <div onClick={trunof}>Tourism</div> </Link>
                            <Link to='/sports'> <div onClick={trunof}>Sports</div> </Link>
                            <Link to='/technology'> <div onClick={trunof}>Technology</div> </Link>
                            <Link to='/health'> <div onClick={trunof}>Health</div> </Link>
                            <Link to='/bollywood'> <div onClick={trunof}>Bollywood</div> </Link>
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default Nav