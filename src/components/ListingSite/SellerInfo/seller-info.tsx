import "./seller-info.scss";
import Link from "next/link";
import Image from "next/image";

interface SellerInfoProps {
    sellerId: number;
}

const SellerInfo = ({sellerId}: SellerInfoProps) => {

    return (
        <div className="seller-info">
            <Link href = {`/profile/${sellerId}`}>
                <div className="profile-image">
                    <Image src = {"/images/testimage1.webp"} alt="" fill = {true}/>
                </div>
            </Link>
        </div>
    )

}

export default SellerInfo;