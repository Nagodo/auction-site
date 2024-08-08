"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FaChevronDown } from "react-icons/fa";

interface ProfileActionProps {
    profilePicture: string | null | undefined;
}

const ProfileAction = ({profilePicture}: ProfileActionProps) => {
    const router = useRouter();
    
    if (profilePicture === null || profilePicture === undefined) {
        profilePicture = "/images/testimage1.jpg";
        
    }

    function handleProfilePicClicked() {
        router.push('/profile');
    }

    return (
        <div className="profile-action">
            <div className='dropdown-arrow'>
                <FaChevronDown className='icon'/>
            </div>
            <div className='profile-image' onClick={handleProfilePicClicked}>
                <Image src = {profilePicture} alt = "" fill = {true} className='image' />

            </div>
        </div>
    )
}

export default ProfileAction;