"use client"

import { useRouter } from "next/navigation";

const LoginAction = () => {
    const router = useRouter();

    function handleLoginClicked() {
        router.push("/login");
    }

    return (
        <div className="login header-action-btn" onClick={handleLoginClicked}>
                <p>Log ind</p>
            </div>
    )
}

export default LoginAction;