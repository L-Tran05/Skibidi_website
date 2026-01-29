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

            {/* omg i made a comment wowie*/}
            <main className = "main-content">
                <div className = "image-container">
                    
                    {/* persona image of my sona in the smack middle*/}
                    <img
                    className= "persona-animation"
                    src = '/assests/Allo_everyone!.gif'
                    alt = "sprite of character"
                    />

                    {/* deco-bit by itself is the size of the chibis and 1 and 2 are the chibis*/}
                    <img className = "deco-bit fox_white"
                    src = '/assests/White_fox.png'
                    alt = "asset of female version of my fox vtuber in chibi form"
                    />

                    <img className = "deco-bit black_fox"
                    src = '/assests/Black_Fox.png'
                    alt = "asset of male version of the male fox vtuber in chibi form"
                    />

                    {/* Border without foxes*/}

                    <img className = "border bord_leftbottom"
                        src = '/assests/Bord_L.png'
                        alt = "border at the bottom left"
                    />

                    <img className = "border bord_topR"
                        src = '/assests/bord_R.png'
                        alt = "top right flowery border"
                    />

                </div>

                {/*button to take people to do homepage :3*/}
                <Link href="/HomePage">
                    <button className = "start"> Welcome All! &lt;3</button>
                </Link>
            </main>
        </div>
        
        </>
    );
}