"use client"
import { useRouter } from "next/navigation";

const HeaderLogo = () => {
    const router = useRouter();

    const handleLogoClicked = () => {
        router.push("/");
    };

    return (
        <div className="logo" onClick={handleLogoClicked}>
            <img src="/images/logo.png" alt="logo" />
        </div>
    );
}

export default HeaderLogo;