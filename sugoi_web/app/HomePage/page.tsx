// home page of the about me
'use client'; 

import './Home.css';
import NavBar from '../components/NavBar';
import Foot from '../components/Footer';
import { useState } from "react";
import { useEffect } from "react"; //this will be 4 the timer :3
import { useRouter } from "next/navigation";

export default function Home(){
    const router = useRouter();
    const[input, setInput] = useState("");
    const [showAltText, setShowAltText] = useState(false);

    useEffect(() => 
    {
        const timer = setTimeout(() => {
            setShowAltText(true);
        }, 240000);

    return () => clearTimeout(timer);
    }, []);

    // for the like arg element
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

    // add custard or citch and then reply with "on hood"

    // brainrot
    else if(lowerInput ==="goon"){
        alert("I know what you are...");
    }

    else if(lowerInput === "skibidi"){
        alert("toliet🚽");
    }

    else {
        alert("Thank yew for visiting :3 💗");
    }

}
    return(
        <>
        <NavBar />
        <Foot />
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

            <img className = "who_am_I"
                src = '/assests/temp.gif'
                alt = "another image, it is of author"
            />

            <img className = "WhoAmItext"
                src={showAltText
                ? "/assests/WHO.gif"
                : "/assests/WhoAmI.png"
                }
                alt = "image of text, flickering with a glitch specifically on the I"
            />

            <section className="aboutMeText">
                Hello everyone, my name is Lena, a Vietnamese-American artist!
                <br /><br />

                I am currently a third year at the University of Central Florida studying
                Information Technology with a minor in Digital Media.
                I’m involved in many clubs such as Knight Hacks as a design team member, Girls Who Code, and UCF Art Club.
                
                <p className="invisible-text">
                    There are so many letters here to look out for. I don’t even know where to start
                </p>

                I love illustration and art of all sorts!
                When I’m not doing school work, I am learning to animate or selling prints and merch!
                I wanna get better at UX/UI design and I love learning and experiencing new things!

                <br/><br/>

                Thank you for checking out my website! It is inspired by a multitude of all of my favorite fandoms. Such as the WelcomeHomeRestorationProject,
                Honkai Star Rail, fashion, and my love for cute things!!

            </section>

            <div className = "Moveable_graphic">
                <img className = "J"
                    src = '/assests/pterodactyl.png'
                    alt = "a small graphic :D"
                />
            </div>

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