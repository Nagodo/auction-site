import Image from "next/image";

interface ImageInputProps {
    
}

export default function ImageInput({}: ImageInputProps) {
    return (
        <div className="image-input">
            <div className="images">
                <div className="main-image">
                    <Image src={"/images/testimage1.webp"} alt="" fill = {true}></Image>
                </div>

                <div className="other">
                    <div className="image">
                        <Image src={"/images/testimage1.webp"} alt="" fill = {true}></Image>
                    </div>
                    <div className="image">
                        <Image src={"/images/testimage1.webp"} alt="" fill = {true}></Image>
                    </div>
                    <div className="image">
                        <Image src={"/images/testimage1.webp"} alt="" fill = {true}></Image>
                    </div>
                    <div className="image">
                        <Image src={"/images/testimage1.webp"} alt="" fill = {true}></Image>
                    </div><div className="image">
                        <Image src={"/images/testimage1.webp"} alt="" fill = {true}></Image>
                    </div>
                    <div className="image">
                        <Image src={"/images/testimage1.webp"} alt="" fill = {true}></Image>
                    </div>
                </div>
            </div>
            
        </div>
    )
}