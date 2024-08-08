
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

import LoginAction from "./login-action";
import NewListingBtn from "./new-listing-btn";

const HeaderActions = async () => {
    
    const session = await getServerSession(authConfig);
    

    return (
        <div className="header-actions">
            
            <LoginAction />

            <NewListingBtn />
            
        </div>
    )
}

export default HeaderActions;