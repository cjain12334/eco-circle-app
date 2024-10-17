import React from 'react'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import ProfileCard from './Components/ProfilePageComponents/ProfileCard'
import johndoe from './assets/johndoe.jpg'
import { RiPieChart2Fill } from "react-icons/ri"
import ProfileSidebar from './Components/ProfilePageComponents/ProfileSidebar'
import ProfileSiderbarItem from './Components/ProfilePageComponents/ProfileSiderbarItem'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import {
    IoStatsChart,
    IoLocationSharp,
    IoTrendingUpSharp,
    IoCartSharp,
    IoRibbonSharp,
    IoStorefrontSharp,
    IoChatboxEllipsesSharp,
    IoExitOutline,
    IoCardSharp
} from "react-icons/io5";
import { GiProgression } from "react-icons/gi";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Profile() {
    const sidebarItems = [
        { Icon: RiPieChart2Fill, title: 'Dashboard', selected: true},
        { Icon: IoStatsChart, title: 'Earnings and Reward' },
        { Icon: IoLocationSharp, title: 'Locate E-Waste Plant' },
        { Icon: IoTrendingUpSharp, title: 'Dispatch Status' },
        { Icon: IoCartSharp, title: 'Cart' },
        { Icon: IoRibbonSharp, title: 'Badge' },
        { Icon: IoStorefrontSharp, title: 'Shop' },
        { Icon: IoChatboxEllipsesSharp, title: 'Notice Board' },
        { Icon: IoExitOutline, title: 'Sign Out' }
    ];

    const dataEWaste = {
        datasets: [
            {
                data: [34, 66], // 66% filled, 34% remaining
                backgroundColor: ['#83c867', '#d9efdb'],
                borderWidth: 0,
            },
        ],
    };

    const optionsEWaste = {
        rotation: -90, // Start angle for semi-circle
        circumference: 180, // Half circle
        cutout: '70%', // Inner radius (for the hollow part in the middle
    };

    const dataDrives = {
        labels: ['Attended', 'Not Attended'],
        datasets: [
            {
                label: 'Drives',
                data: [75, 25],
                backgroundColor: ['#83c867', '#d9efdb'],
                borderWidth: 1,
            },
        ],
    };

    const optionsDrives = {
        cutout: '80%',
        plugins: {  
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    generateLabels: (chart) => {
                        const labels = chart.data.labels;
                        const data = chart.data.datasets[0].data;

                        return labels.map((label, index) => ({
                            text: `${label}: ${data[index]}%`,
                            fillStyle: chart.data.datasets[0].backgroundColor[index],
                            hidden: false,
                            index
                        }));
                    }
                },
            },
        },
    };

    return (
        <>
            <Nav />
            <div className='bg-black text-white py-8 px-24'>
                <div>

                </div>
                <div className='flex'>
                    {/* Sidebar section */}
                    <div className='w-1/4 space-y-6'>
                        <ProfileCard image={johndoe} name='John Doe' />
                        <ProfileSidebar>
                            {sidebarItems.map((item, index) => (<ProfileSiderbarItem key={index} Icon={item.Icon} title={item.title} selected={item.selected} />))}
                        </ProfileSidebar>
                    </div>

                    {/* Dashboard section */}
                    <div className='w-3/4 overflow-hidden space-y-8 px-4'>
                        <div className='flex gap-x-4 overflow-x-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowX: 'scroll' }}>
                            <div className='bg-neutral-700 p-8 min-w-72 rounded-full flex flex-col items-center'>
                                <IoCardSharp className='text-3xl' />
                                <p className='mt-4 text-green-500'>Transfer via rewards</p>
                                <p className='text-green-500 font-bold'>$2000</p>
                            </div>
                            <div className='bg-neutral-700 p-8 min-w-72 rounded-full flex flex-col items-center'>
                                <IoCardSharp className='text-3xl' />
                                <p className='mt-4 text-green-500'>Transfer via rewards</p>
                                <p className='text-green-500 font-bold'>$2000</p>
                            </div>
                            <div className='bg-neutral-700 p-8 min-w-72 rounded-full flex flex-col items-center'>
                                <IoCardSharp className='text-3xl' />
                                <p className='mt-4 text-green-500'>Transfer via rewards</p>
                                <p className='text-green-500 font-bold'>$2000</p>
                            </div>
                        </div>

                        <div className='flex gap-x-4 overflow-x-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowX: 'scroll' }}>
                            <div className="bg-white text-black rounded-lg shadow-lg p-6 min-w-72 flex flex-col items-center">
                                <p className='text-2xl font-bold'>Plastic/E-Waste Collected</p>
                                <div className="relative w-full h-40 flex justify-center items-center">
                                    <Doughnut data={dataEWaste} options={optionsEWaste} />
                                    <div className="absolute text-xl bottom-8 font-bold text-black">66%</div>
                                </div>
                                <p className='fond-bold text-xl'>1 kg</p>
                                <div className='my-2 w-24 h-2 bg-green-500'></div>
                                <p>September</p>
                            </div>
                            <div className="bg-white text-black rounded-lg shadow-lg p-6 min-w-72 flex flex-col items-center">
                                <p className='text-2xl font-bold mb-4'>Drives Attended</p>
                                <Doughnut data={dataDrives} options={optionsDrives} />
                            </div>
                        </div>

                        <div className='flex gap-x-4 overflow-x-scroll' style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', overflowX: 'scroll' }}>
                            <div className="bg-white text-black rounded-lg shadow-lg p-6 min-w-72 flex flex-col items-center">
                                <div className='w-full flex justify-between'>
                                    <div>
                                        <p className='text-green-400 text-xl'>Overall progress</p>
                                        <p className='fond-medium'>Monthly</p>
                                    </div>
                                    <div>
                                        <GiProgression className='text-4xl text-neutral-400' />
                                    </div>
                                </div>
                            </div>
                            <div className="bg-green-500 text-white rounded-lg shadow-lg p-6 min-w-72 flex flex-col items-center">
                                <p>Badges Collected (3/100)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile