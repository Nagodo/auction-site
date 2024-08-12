import "./header.scss";
import SearchBar from "./searchbar";
import HeaderActions from "./Actions/header-actions";
import HeaderLogo from "./header-logo";
import { GetMainCategories } from "@/data/categories";

const Header = () => {
    
    return (
        <div className="header">

            <div className="header-top">

                <div className="header-content">
                    <HeaderLogo />

                    <div className="searchbar-container">
                        <SearchBar />
                    </div>

                    <HeaderActions />

                    
                </div>
            </div>
     
            <div className="header-bottom">
                <div className="category-selector">
                    <div className="categories">
                        
                        {GetMainCategories().map((category) => {
                            return (
                            <div className="category">
                                <p>{category}</p>
                            </div>
                            )
                        })}
                        
                    </div>
                </div>
            </div>

            
            
           
        </div>
    );
}

export default Header;