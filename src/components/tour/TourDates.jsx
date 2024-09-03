import './tourDates.scss';
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation';
import { useEffect } from 'react';

const tourDates = [
    {
        date: "Apr 4 Fri",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Wien, Austria",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 5 Sat",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Munich, Germany",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 6 Sun",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Berlin, Germany",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 8 Tue",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Zürich, Switzerland",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 11 Fri",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Paris, France",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 12 Sat",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "London, United Kingdom",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 13 Sun",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Tillburg, Netherlands",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 15 Tue",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Cologne, Germany",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 16 Wed",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Wiesbaden, Germany",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 18 Fri",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Stockholm, Sweden",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 22 Tue",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Helsinki, Finland",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 23 Wed",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Rīga, Latvia",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 25 Fri",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Wroclaw, Poland",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        date: "Apr 27 Sun",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Hlavní Město Praha, Czechia",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
];

const TourDates = ({ isMobileNavOpen }) => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <motion.div
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            className="tourDates-container"
            style={{
                opacity: isMobileNavOpen ? ".3" : "1",
            }}>
            <div className="dates">
                {
                    tourDates.map((tour, index) => {
                        const { date, name, title, location, tickets } = tour;
                        return <div key={index} className="tours">
                            <p className="date"> {date}</p>
                            <div className="name-of-tour">
                                <p className="name">{name}</p>
                                <p className="title">{title}</p>
                            </div>
                            <p className="location">{location}</p>
                            <div className="tickets">
                                {tickets.map((ticket, index) => {
                                    return <button key={index}>{ticket}</button>
                                })}
                            </div>
                        </div>
                    })
                }
            </div>
        </motion.div>
    )
}

export default TourDates
