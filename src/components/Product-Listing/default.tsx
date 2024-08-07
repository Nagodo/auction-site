import "./style/default.scss"

interface ListingProps {
    title: string;
    description: string;
}

const DefaultListing = ({title, description}: ListingProps) => {
    return (
        <div className="defaultlisting">

            <div className="image">
                <img src="https://styles.redditmedia.com/t5_6q5v2f/styles/communityIcon_r5j8626w5ec91.jpeg?format=pjpg&s=4a7c176c8ec7b4794a0248863576bf4884ad1784"></img>
            </div>

            <div className="title">
                <p>{title}</p>
            </div>

            <div className="description">
                {description}
            </div>

        </div>
    )
}

export default DefaultListing;