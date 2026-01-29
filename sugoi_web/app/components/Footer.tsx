'use client';
import "./Footer.css";
import Link from "next/link";

export default function Foot(){
    return(
        <div className="Foot-Full">
            
            <ul className="foot_links">
                <li><Link href="https://www.linkedin.com/in/lena-tran-/">LinkedIn</Link></li>
                <p className="plus"> + </p>

                <li><Link href="mailto:Lenatran103@gmail.com">Email</Link></li>
                <p className="plus"> + </p>

                <li><Link href="https://github.com/L-Tran05">GitHub</Link></li>
                <p className="plus"> + </p>

                <li><Link href="/ExperiencePage">Resume</Link></li>
            </ul>

            <p className="Hi">
                Built with luv &lt;3 by Lena
            </p>

        </div>
    );
}
