"use client"
import Image from 'next/image'
import PictureEditor from './pictureEditor';
import { useEffect, useState } from 'react';

const ProfilePicture = () => {
    const [profileImage, setProfileImage] = useState<string>("");
    const [showEditor, setShowEditor] = useState<boolean>(false);

    //TODO: This is currently being called twice, fix this
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
            const profileImagePath = await fetchAvatar();
            console.log(profileImagePath);
            if (profileImagePath) {
                setProfileImage(profileImagePath);
            }
        }
      
        getAvatar();
    }, []); 

    function handleEditImageClicked() {
        setShowEditor(true);
    }

    function handleProfileImageChanged(newImage: string) {
        setProfileImage(newImage);
        setShowEditor(false);
    }

    function handleCloseBtnClicked() {
        setShowEditor(false);
    }

    return (
        <div className="profilepicture">
            <div className='profileimage'>
                <Image src={profileImage === "" ? "/images/profile-default.svg" : profileImage} alt="Profile picture" fill = {true} sizes=''/>

            </div>

            <div className='editimage-btn'>
                <button onClick={handleEditImageClicked} className='btn'>Rediger billede</button>
            </div>

            {showEditor && <PictureEditor currentImage = {profileImage} setImageCallback = {handleProfileImageChanged} closeBtnCallback = {handleCloseBtnClicked} />}
        </div>

    )
}

export default ProfilePicture