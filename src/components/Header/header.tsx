import "./header.scss";
import SearchBar from "./searchbar";
import HeaderActions from "./header-actions";
import HeaderLogo from "./header-logo";

const Header = () => {
    
    return (
        <div className="header">

            <div className="header-content">
                <HeaderLogo />

                <div className="searchbar-container">
                    <SearchBar />
                </div>

                <HeaderActions />

                
            </div>

            

        </div>
    );
}

export default Header;