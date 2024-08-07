"use client"
import "./listing.scss"
import { useState } from "react"
import Image from "next/image"

interface ImageGroupProps {
    images: string[]
}

const ImageGroup = ({images}: ImageGroupProps) => {

    const [currentImage, setCurrentImage] = useState(images[0])

    return (
        <div className="image-group">
            <div className="main">
                <div className="image-container">
                    <Image src={currentImage} alt="" fill = {true}></Image>
                </div>
            </div>
            <div className="other">

                {images.map((image, index) => {
                    return (
                        <div className="image-container" key={index}>
                            <Image src={image} onClick={() => setCurrentImage(image)} alt="" fill = {true}></Image>
                        </div>
                    )
                })}

                
            </div>
        </div>
    )
}

export default ImageGroup