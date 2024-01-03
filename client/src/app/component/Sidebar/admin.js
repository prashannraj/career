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
                    <BsCart3 className='icon_header' /> ONLINE RECRUITMENT SYSTEM
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <a href="./admin/users">
                        <BsGrid1X2Fill className='icon' /> USER MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/admin/vacancies">
                        <BsFillArchiveFill className='icon' /> VACANCIES MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="./admin/universities">
                        <BsFillGrid3X3GapFill className='icon' /> UNIVERSITY MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/quatas">
                        <BsPeopleFill className='icon' /> QUATA MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/levels">
                        <BsListCheck className='icon' /> LEVEL MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/posts">
                        <BsListCheck className='icon' /> POST MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/qualification">
                        <BsListCheck className='icon' /> QUALIFICATION MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="/services">
                        <BsListCheck className='icon' /> SERVICE MANAGEMENT
                    </a>
                </li>
                <li className='sidebar-list-item'>
                    <a href="">
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