import './music.scss';
import Album from '../album/Album';
import Album2 from '../album2/Album2';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation';
import Artist from '../artist/Artist';

gsap.registerPlugin(ScrollTrigger);

const Music = ({ isMobileNavOpen }) => {

    useEffect(() => {
        const tlIntro = gsap.timeline({
            scrollTrigger: {
                trigger: '.album2-wrapper',
                start: 'top top',
                end: 'bottom top',
                pin: true,
                pinSpacing: false,
                scrub: 1,
            }
        });

        return () => {
            if (tlIntro.scrollTrigger) {
                tlIntro.scrollTrigger.kill();
            }
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            style={{
                opacity: isMobileNavOpen ? ".3" : "1",
            }}
            className="music-wrapper"
        >
            <div className="album2-wrapper" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "120vh",
                zIndex: "10",
                position: "relative",

            }}>
                <Album2 />
            </div>
            <div className="album1-wrapper"
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "rgb(2, 2, 2)",
                    zIndex: "10",
                    position: "relative",
                    paddingTop: "6rem",
                }}
            >

                <Album />
            </div>
        </motion.div >
    )
}

export default Music
