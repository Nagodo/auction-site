"use client";
import Image from 'next/image';
import { useRef, useState } from 'react';

interface PictureEditorProps {
    currentImage: string;
    setImageCallback: (newImage: string) => void;
}

const PictureEditor = ({currentImage, setImageCallback}: PictureEditorProps) => {
    const [imageSrc, setImageSrc] = useState<string>(currentImage);
   
        //TODO: check if this is safe
    function handleFileUploaded(event: React.ChangeEvent<HTMLInputElement>) {

        if (!event.target.files) return;

        const file = event.target.files[0] as File;
        setImage(URL.createObjectURL(file));
    }

    async function handleUploadButtonClicked(formData: FormData) {
        
        formData.append('oldImage', currentImage);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_DOMAIN}/api/profile/updateavatar`, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                const data = await response.json();
                setImageCallback(data.blobUrl);
            }
        } catch (error) {
            console.error(error);
        }

    }

    function setImage(url: string) {
        setImageSrc(url);
    }

    return (
        <div className="picture-editor">

            <div className="faded-background"></div>

            <div className='editor'>
                <div className="preview">
                    <Image src={imageSrc} alt="Profile picture" fill = {true} />
                </div>

                <form action={handleUploadButtonClicked}>
                    <input type="file" id="image" name="image"  className="inputfile" accept='.png,.jpg,.jpeg,.webp' onChange={handleFileUploaded} />
                    <button type="submit" className="btn">Upload</button>
                </form>
            </div>
 
            

        </div>
    )
}

export default PictureEditor;