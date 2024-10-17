import React from 'react'

function ProfileSidebar({ children, ...props}) {
  return (
    <div className = 'w-full space-y-2'>
        {children}
    </div>
  )
}

export default ProfileSidebar