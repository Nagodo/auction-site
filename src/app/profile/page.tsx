import "@/style/profile.scss"
import Header from '@/components/Header/header'
import React from 'react'
import ProfilePicture from "./profilepicture/profilepicture"

export const metadata = {
    title: 'Min side',
}

async function Profile() {

    return (
        <div className="profilepage bg-zinc-50"> 

            <Header />

            <div className="content">
                <ProfilePicture />
            </div>
        </div>
    )
}

export default Profile