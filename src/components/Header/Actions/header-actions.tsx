
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

import LoginAction from "./login-action";
import NewListingBtn from "./new-listing-btn";
import ProfileAction from "./profile-actions";
import CategoriesBtn from "./categories-btn";

const HeaderActions = async () => {
    
    const session = await getServerSession(authConfig);
    const isLoggedIn = Boolean(session?.user);

    return (
        <div className="header-actions">

            <CategoriesBtn />
            <NewListingBtn />

            
            {isLoggedIn && (
                <ProfileAction profilePicture = {session?.user?.image} />
            )}

            {!isLoggedIn && (   
                <LoginAction />
            )}

            
            
        </div>
    )
}

export default HeaderActions;