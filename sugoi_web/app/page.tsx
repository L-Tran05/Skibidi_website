// landing page 
'use client'; 
import Link from "next/link";

export default function Page() {
    return(
        <>
            <div className = "Welcome-Fullscreen">  

            <header className = "welcomeHeader">
                Hallo Everyone! I'm Lena :3
            </header>

            <main className = "main-content">
                <div className = "image-container">
                    
                    <img
                    className= "persona-animation"
                    src = '/assests/Allo_everyone!.gif'
                    alt = "sprite of character"
                    />

                </div>

                <Link href="/HomePage">
                    <button className = "start"> Welcome All! &lt;3</button>
                </Link>
            </main>
        </div>
        
        </>
    );
}