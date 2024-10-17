import React from 'react'

function ProfileSiderbarItem({ Icon, title, selected }) {
    const className = selected ? 'text-white bg-green-700' : 'text-green-500 hover:text-white hover:bg-green-700';

    return (
        <button className={`w-full p-4 flex rounded-lg items-center gap-x-2 font-medium text-xl ${className}`}>
            <Icon />
            <p>{title}</p>
        </button>
    )
}

export default ProfileSiderbarItem