import "./seller-info.scss";
import Skeleton from "@mui/material/Skeleton";

const LoadingSellerInfo = () => {
    return (
        <div className="seller-info">
            <div className="profile-image">
                <Skeleton variant="circular" sx = {{ height: 1, width: 1}} />
            </div>

            <div className="name">
                <Skeleton variant="rectangular" sx = {{ height: 1, width: 1}} />
            </div>

        </div>
    )
}

export default LoadingSellerInfo;