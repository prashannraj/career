import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                <a href="./officer">
                    <BsCart3 className='icon_header' /> ONLINE RECRUITMENT SYSTEM
                    </a>
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href=" ">
                        <BsGrid1X2Fill className='icon' /> PASSWORD MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="./officer/requision">
                        <BsMenuButtonWideFill className='icon' /> REQUISION MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
                        <BsFillGearFill className='icon' /> Setting
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar