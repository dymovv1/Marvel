import React, { useState, useEffect } from 'react';
import styles from "./events.module.scss";
import { MD5 } from 'crypto-js';

const CharacterInfo = () => {
    const [events, setEvents] = useState([]);
    const publicKey = 'fd9492c3d31039d4d056ed08856e320d';
    const privateKey = '373416865b92a61ca17108f06774383d670c8935';
    const ts = Date.now();
    const hash = MD5(ts + privateKey + publicKey).toString();

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`https://gateway.marvel.com/v1/public/events?&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
                const data = await response.json();
                const limitedEvents = data.data.results.slice(0, 20);
                console.log(response);
                setEvents(limitedEvents);
            } catch (error) {
                console.error(error);
            }
        };

        fetchEvents();
    }, []);

    if (events.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles['events']}>
            <div className='container'>
                <div className={styles['events-title__path']}>
                <h1 className={styles['events-title']}> <span className={styles['events-title__latest']}>Latest</span>&nbsp; Events </h1>
                </div>
                <div className={styles['events-body']}>
                    {events.map((event) => (
                        <div key={event.id}>
                            <div className={styles['events-post']}>
                                <img className={styles['events-img']} src={event.thumbnail.path + '.' + event.thumbnail.extension} alt={event.title} />
                                <h3 className={styles['events-name']}>Name : {event.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CharacterInfo;
