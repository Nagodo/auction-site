"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

interface ProfileActionProps {
   
}

const ProfileAction = ({}: ProfileActionProps) => {
    const router = useRouter();
    const [profileImage, setProfileImage] = useState<string>("/images/profile-default.svg");
    
    async function fetchAvatar() {

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/profile/getavatar`, {
                method: 'GET'
            });

            if (response.ok) {
                const data = await response.json();
                
                return data.profileImagePath;
            }
        } catch (error) {
            console.error(error);
        }

        return null;
    }

    useEffect(() => {
        async function getAvatar() {
            let profileImagePath = await fetchAvatar();
          
            profileImagePath = profileImagePath === "" ? "/images/profile-default.svg" : profileImagePath;

            setProfileImage(profileImagePath);
        }
      
        getAvatar();
    }, []); 

    function handleProfilePicClicked() {
        router.push('/profile');
    }

    return (
        <div className="profile-action">
            <div className='dropdown-arrow'>
                <FaChevronDown className='icon'/>
            </div>
            <div className='profile-image' onClick={handleProfilePicClicked}>
                <Image src = {profileImage} alt = "" fill = {true} className='image' />

            </div>
        </div>
    )
}

export default ProfileAction;