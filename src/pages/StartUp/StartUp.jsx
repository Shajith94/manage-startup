import React from 'react';
import StartUpCard from './StartUpCard';

const StartUp = () => {
    const verifiedStartups = JSON.parse(localStorage.getItem('startup-list'))?.filter(
        (startup) => startup.status === 'verified'
    );

    console.log(verifiedStartups);
    return (
        <div className='grid gap-4 my-10 grid-cols-1 lg:grid-cols-3 md:grid-cols-2 max-w-[1400px] mx-auto'>



            {verifiedStartups?.map((startup, index) => (
                <StartUpCard key={startup?.id} startup={startup} />

            ))}
        </div>
    );
};

export default StartUp;