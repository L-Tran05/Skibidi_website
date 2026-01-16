// home page of the about me
'use client'; 

import './Home.css';
import NavBar from '../components/NavBar';
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home(){
    const router = useRouter();
    const[input, setInput] = useState("");

    function handleSubmit() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const correct = "Jing Yuan";

    // takes trimmed and puts it to lowercase and checks 
    const lowerInput = trimmed.toLowerCase();
    const lowerCorrect = correct.toLowerCase();

    const sortLetters = (str: string) =>
        str.replace(/\s/g, "").split("").sort().join("");

    // if they put exactly Jing Yuan
    if (trimmed === correct) {
        router.push("/SugoiPage");
    } 

    // if wording is correct but all lowercase then this
    else if (lowerInput === lowerCorrect) {
        alert("You are so close… but these words care about how they’re written");
    }

    else if (sortLetters(lowerInput) === sortLetters(lowerCorrect)) {
        alert("I see what you're doing… you have all the pieces, they’re just not quite aligned yet :3");
    }

    // brainrot
    else if(lowerInput ==="goon"){
        alert("I know what you are...");
    }

    else if(lowerInput === "skibidi"){
        alert("toliet🚽");
    }

    else {
        alert("Thank you for visiting :3 💗");
    }
}

    return(
        <>
        <NavBar />
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
                    <img className = "who_am_I"
                        src = '/assests/temp.gif'
                        alt = "another image, it is of author"
                        />
                </div>

                <div className = "AboutMe">
                    Who am I?
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
                        placeholder="Saying Hello..."
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