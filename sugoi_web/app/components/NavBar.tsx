// nav bar of about, experience, art, light and dark mode, music 
'use client';
import { useState } from 'react';
import Link from "next/link";

import "./Navbar.css";
import "./darkmode.css";

export default function NavBar() {
    const [darkMode, setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
        document.documentElement.classList.toggle("dark");
    }

    return (
        <nav className="naviBar">
            <div className="naviBar-left">
                <img
                    className="logo_image"
                    src="/assests/fem_fox.png"
                    alt="Logo"
                />

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
                aria-label="Toggle dark mode"
            >
                <img
                    className="Moontoggle"
                    src="/assests/masc_fox.png"
                    alt="Toggle dark mode"
                />
            </button>
        </nav>
    );
}
