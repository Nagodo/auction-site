import Image from 'next/image'

const ProfilePicture = () => {
    return (
        <div className="profilpicture">
            <div className='profileimage'>
                <Image src="/images/testimage1.jpg" alt="Profile picture" fill = {true}/>

            </div>

            <div className='editimage-btn'>
                <button className='btn'>Rediger billede</button>
            </div>
        </div>
    )
}

export default ProfilePicture