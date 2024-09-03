import './tourDates.scss';
import { motion } from 'framer-motion'
import { pageAnimation } from '../../animation';
import { useEffect } from 'react';

const tourDates = [
    {
        id: 1,
        date: "Apr 4 Fri",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Wien, Austria",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 2,
        date: "Apr 5 Sat",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Munich, Germany",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 3,
        date: "Apr 6 Sun",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Berlin, Germany",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 4,
        date: "Apr 8 Tue",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Zürich, Switzerland",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 5,
        date: "Apr 11 Fri",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Paris, France",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 6,
        date: "Apr 12 Sat",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "London, United Kingdom",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 7,
        date: "Apr 13 Sun",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Tillburg, Netherlands",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 8,
        date: "Apr 15 Tue",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Cologne, Germany",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 9,
        date: "Apr 16 Wed",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Wiesbaden, Germany",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 10,
        date: "Apr 18 Fri",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Stockholm, Sweden",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 11,
        date: "Apr 22 Tue",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Helsinki, Finland",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 12,
        date: "Apr 23 Wed",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Rīga, Latvia",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 13,
        date: "Apr 25 Fri",
        name: "The Unholy Trinity 2025 @ 7:00pm",
        title: "w/Rotting Christ, Satyricon",
        location: "Wroclaw, Poland",
        tickets: ["Tickets", "VIP", "RSVP"]
    },
    {
        id: 14,
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
                    tourDates.map((tour) => {
                        const { date, name, title, location, tickets, id } = tour;
                        return <div key={id} className="tours">
                            <p className="date"> {date}</p>
                            <div className="name-of-tour">
                                <p className="name">{name}</p>
                                <p className="title">{title}</p>
                            </div>
                            <p className="location">{location}</p>
                            <div className="tickets">
                                {
                                    tickets.map((ticket, index) => {
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
