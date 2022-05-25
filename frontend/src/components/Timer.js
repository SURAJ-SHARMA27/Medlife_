import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMinutes, setTimerMinutes] = useState('00');
    const [timerSeconds, setTimerSeconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date('june 12, 2022 00:00:00').getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMinutes(minutes);
                setTimerSeconds(seconds);
            }
        }, 1000);
    }

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current)
        }
    })

    return (
        <>
            <div className='timer-div'>
                <div class="row">
                    <div class="col timer-colon">{timerDays}</div>
                    <div class="col timer-colon">:</div>
                    <div class="col timer-colon">{timerHours}</div>
                    <div class="col timer-colon">:</div>
                    <div class="col timer-colon">{timerMinutes}</div>
                    <div class="col timer-colon">:</div>
                    <div class="col timer-colon">{timerSeconds}</div>
                    <div class="col timer-colon">left</div>
                </div>

            </div>

        </>
    )
}

export default Timer