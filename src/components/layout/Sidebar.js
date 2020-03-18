import React, {useState} from 'react';
import { FaChevronDown, FaInbox, FaRegCalendar, FaRegCalendarAlt } from 'react-icons/fa';
import {UseSelectedProjectsValue} from '../../context';
import {Projects} from '../Projects';
import { AddProject } from '../AddProject';
export const Sidebar = () => {
    const {setSelectedProject} = UseSelectedProjectsValue;
    const [active,setActive] = useState('inbox');
    const [showProjects, setShowProjects] = useState(true);
    return (
        <div className="sidebar" data-testid="sidebar">
            <ul className="sidebar__generic">
                <li data-testid="inbox" className="inbox">
                    <span><FaInbox/></span>
                    <span>Inbox</span>
                </li>
                <li data-testid="today" className="today">
                    <span><FaRegCalendar/></span>
                    <span>Today</span>
                </li>
                <li data-testid="next7" className="next7">
                    <span><FaRegCalendarAlt/></span>
                    <span>Next 7 days</span>
                </li>
            </ul>
            <div className="sidebar__middle">
                <span><FaChevronDown/></span>
                <h2>Projects</h2>
            </div>
            <ul className="sidebar__projects">
            {showProjects && <Projects/>}
            </ul>
            {showProjects && <AddProject/>}
        </div>
    );
}