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

                    <img className = "deco-bit deco-bit1"
                    src = '/assests/fem_fox.png'
                    alt = "asset of female version of my fox vtuber in chibi form"
                    />

                    <img className = "deco-bit deco-bit2"
                    src = '/assests/masc_fox.png'
                    alt = "asset of male version of the male fox vtuber in chibi form"
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