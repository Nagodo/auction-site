import "@/style/profile.scss"
import Header from '@/components/Header/header'
import React, { Suspense } from 'react'
import ProfilePicture from "./profilepicture/profilepicture"

export const metadata = {
    title: 'Min side',
}

async function Profile() {

    return (
        <div className="profilepage"> 

            <Header />

            <div className="content">
                <p>Test suspernse her</p>
                <Suspense>
                    <ProfilePicture />
                </Suspense>
            </div>

            
        </div>
    )
}

export default Profile