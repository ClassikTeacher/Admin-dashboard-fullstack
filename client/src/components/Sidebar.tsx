import React from 'react'

const Sidebar = ()=>{

    return(
        <div className='sidebar'>
             {/* <button type="button" className="close-btn">Burger</button> */}
            <ul>
                <li>
                    <a href="#">
                        <span className='title'>User Name</span>
                    </a>
                    
                </li>
                <li className="active">
                    <a href="#">
                        <span className='title'>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className='title'>Departments</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <span className='title'>Employyes</span>
                    </a>
                </li>
            </ul>

        </div>
    )
}
export default Sidebar