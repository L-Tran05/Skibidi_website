// art showcase page is a big book (png) that gets opened via a button 
// when book opens it has a carasel of artworks, background is the opened book
// Book that gets flipped through showcasing art: oc section (maybe a way to interact with my ocs with a basic visual novel style), my professional works, my fan arts, art market stuff
// KH art, fan art, exhibition art

'use client';

import { useState } from 'react';
import "./Art.css";
import NavBar from '../components/NavBar';

// type for union for the chapters of the bokks
type ArtBook =
    | 'OriginalCharacters'
    | 'Professional'
    | 'Fanart'
    | 'Personal';

// contents for the art book 
const artData: Record<ArtBook, string[]> = 
{
    OriginalCharacters:[
        '/images.png'

    ],

    Professional: [
        '/assests/pterodactyl.png'
    ],

    Fanart: [
        '/assests/fem_fox.png'
    ],
    Personal: [
        '/assests/masc_fox.png'
    ],
};

// opening book
// closing book is it or nah
// page count/spot/curr image on book
export default function Art(){

    const [bookOpen, setBookOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<ArtBook>('OriginalCharacters');
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = artData[activeSection];

    const nextImage = () => {
    setCurrentIndex((prev) => prev === images.length - 1 ? 0 : prev + 1);
    };

    const prevImage = () => {
    setCurrentIndex((prev) =>
        prev === 0 ? images.length - 1 : prev - 1);
    };

    return(
        <>
        {/*yiopppppeee nav bar nav bar nav bar*/}
        <NavBar />
            <div className = "Art-FullPage">
                <main className = "Art-Content">
                    {/*Close bookth*/}
                    {bookOpen && (
                        <section className = "Closed-Book">
                            
                        </section>
                    )}
                </main>
            </div>
        
        </>

    );

}