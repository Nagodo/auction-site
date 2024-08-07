"use client"
import { useRouter } from "next/navigation";

const HeaderActions = () => {
    const router = useRouter();

    function handleLoginClicked() {
        router.push("/login");
    }

    function handleNewListingClicked() {
        router.push("/opret-annonce");
    }

    return (
        <div className="header-actions">
                
            <div className="login header-action-btn" onClick={handleLoginClicked}>
                <p>Log ind</p>
            </div>

            <div className="new-listing header-action-btn" onClick={handleNewListingClicked}>
                
            </div>
            
        </div>
    )
}

export default HeaderActions;