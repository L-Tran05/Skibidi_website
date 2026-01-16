// nav bar of about, experience, art, light and dark mode, music 
'use client';
import {useState} from 'react';
import Link from "next/link";

import "./Navbar.css";
//import darkmode.css;

export default function NavBar() {
    const [darkMode, setDarkMode] = useState(false);


function toggleDarkMode() {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
}

// omg look mom im learning T-T
    return (
        <nav className="naviBar">
            <div className="naviBar-left">
                <Link href="/" className="logoName">
                Lena Tran
                </Link>
            </div>

            <ul className="nav-links">
            
                <li>
                    <Link href="/HomePage">About</Link>
                </li>

                <li>
                    <Link href="/ExperiencePage">Experience</Link>
                </li>

                <li>
                    <Link href="/ArtPage">Art</Link>
                </li>
            </ul>
            
            <button
                className="dark-toggle"
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode">
                {darkMode ? "☾" : "☀"}
            </button>
        </nav>
    );

};