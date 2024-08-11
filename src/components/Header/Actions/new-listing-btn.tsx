"use client"

import { useRouter } from "next/navigation";

const NewListingBtn = () => {
    const router = useRouter();

    function handleNewListingClicked() {
        router.push("/opret-annonce");
    }

    return (
        <div className="new-listing header-action-btn" onClick={handleNewListingClicked}>
            <p>Opret annonce</p>
        </div>
    )
}

export default NewListingBtn;