import React, { useEffect, useState } from 'react';
import StartUpTable from './StartUpTable/StartUpTable';

const Dashboard = () => {
    const [startups, setStartups] = useState([]);


    useEffect(() => {
        const startupData = localStorage.getItem('startup-list');
        if (startupData) {
            setStartups(JSON.parse(startupData));
        } else {
            fetch('/startup.json')
                .then((response) => response.json())
                .then((data) => {
                    setStartups(data);
                    localStorage.setItem('startup-list', JSON.stringify(data));
                })
                .catch((error) => {
                    console.error('Error loading startup data:', error);
                });
        }
    }, []);

    const handleVerify = (startup) => {
        const updatedStartup = { ...startup, status: 'verified' };
        const updatedStartups = startups?.map((s) => {
            if (s.id === startup.id) {
                return updatedStartup;
            }
            return s;
        });
        setStartups(updatedStartups);
        localStorage.setItem('startup-list', JSON.stringify(updatedStartups));
    };

    const verifiedStartups = startups?.filter((startup) => startup?.status === 'verified');

    console.log(verifiedStartups);

    console.log(startups);


    return (
        <div className=''>


            <section className="container px-4 mx-auto">
                <div className="flex items-center gap-x-3">
                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">Start Up List</h2>

                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">Total {startups?.length} </span>
                </div>

                <div className="flex flex-col mt-6">
                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">

                            </div>
                        </div>
                    </div>
                </div>
                <StartUpTable startups={startups} onVerify={handleVerify} />

            </section>
        </div>
    );
};

export default Dashboard;