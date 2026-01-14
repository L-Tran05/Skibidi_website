// home page of the about me
'use client'; 
import './Home.css';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home(){
    const router = useRouter();
    const[input, setInput] = useState("");
    
    function handleSubmit() {
    if (input.trim() === "Jing Yuan") 
        {
        router.push("/sugoi"); // da secret sugoi arg
        } 
    else {
        alert("Thank you for visiting :3 💗");
        }
    }

    return(
        <>
            <div className = "HomePage-Full">
                <main className = "Home-Content">
                    <div className = "hero-image">
                        <img className = "hero-img"
                        src = '/assests/images.jpg'
                        alt = "hero image first"
                        />
                    </div>

                <div className = "Welcome-home">
                    Welcome to my Website! :3
                </div>
                

                <div className = "AnotherHero-Img">
                    <img className = "who_am_I">
                    </img>
                </div>

                <div className = "AboutMe">
                    About Me
                </div>

                <section className="aboutMeText">
                    Hello everyone, my name is Lena, a Vietnamese-American artist!

                    <br /><br />

                    I am currently a third year at the University of Central Florida studying
                    Information Technology with a minor in Digital Media.

                    <br /><br />

                    I love illustration and art of all sorts! When I’m not doing school work,
                    I am learning to animate or selling prints and merch!

                </section>

                <section className="secret-arg-comment-box">
                    <p>Leave a message owO?</p>

                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type something..."
                    />

                    <button onClick={handleSubmit}>
                        Send
                    </button>

                </section>

                </main>

            </div>
        </>
    )
}