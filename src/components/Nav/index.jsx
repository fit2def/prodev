import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li key={1}><NavLink to="/">Landing</NavLink></li>
                <li key={2}><NavLink to="/other">Other></NavLink></li>
            </ul>
        </nav>
    );
};
