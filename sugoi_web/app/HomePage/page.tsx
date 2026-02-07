// home page of the about me
// use a library for the god damn sprite what the fuck
'use client'; 

import './Home.css';
import NavBar from '../components/NavBar';
import { useState, useEffect} from "react";  //this will be 4 the timer :3
import { useRouter } from "next/navigation";
import Draggable from "react-draggable";
import { useRef } from "react";

export default function Home(){
    const nodeRef = useRef(null);
    const router = useRouter();
    const [input, setInput] = useState("");
    const [showAltText, setShowAltText] = useState(false);
    
    // omg comment holy shit, this is the timer section to time after 2 mins  
    useEffect(() => 
    {
        const timer = setTimeout(() => {
            setShowAltText(true);}, 240000);
        return () => clearTimeout(timer);
    }, []);

    // for the like arg element
    function handleSubmit() 
    {
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

        // lowercase letters only lol 
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
            alert("Thank yew for visiting :3 💗");
        }
    }
    return(
        <>
        <NavBar />

        <Draggable nodeRef={nodeRef} defaultPosition={{ x: 675, y: 2085}}>
            <img ref = {nodeRef} src = './assests/fem_fox.png' 
            draggable={false}
                onDragStart={e => e.preventDefault()}
                style={{ userSelect: "none", WebkitUserSelect: "none", MozUserSelect: "none", width:"200px", height: "200px", position: 'absolute' }}>
            </img>
        </Draggable>

        <div className = "HomePage-Full">
            <main className = "Home-Content">
                {/* use the sayonara kenshi yonezu drawing you will be making*/}
                    <img className = "hero-img"
                    src = '/assests/Sayonara.png'
                    alt = "hero image first of my characters"
                    />

                <div className = "Welcome-home">
                    Welcome to my Website! :3
                </div>

                {/* either a pic of me or of my persona*/}
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

                <img className = "J"
                    src = '/assests/JJ.png'
                    alt = "a small graphic of a letter J :D"
                />

                <section className="secret-arg-comment-box">
                    <p>Leave a message owO?</p>
                    
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Saying Hello..."
                    />

                    <button onClick ={handleSubmit}>
                        Send
                    </button>

                </section>

            </main>

        </div>
        </>
    )
}