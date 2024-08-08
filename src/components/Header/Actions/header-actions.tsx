
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

import LoginAction from "./login-action";
import NewListingBtn from "./new-listing-btn";
import ProfileAction from "./profile-actions";

const HeaderActions = async () => {
    
    const session = await getServerSession(authConfig);
    const isLoggedIn = Boolean(session?.user);

    return (
        <div className="header-actions">
            
            {isLoggedIn && (
                <ProfileAction profilePicture = {session?.user?.image} />
            )}

            {!isLoggedIn && (   
                <LoginAction />
            )}

            <NewListingBtn />
            
        </div>
    )
}

export default HeaderActions;