import { useLocation } from 'react-router-dom';
import './artist.scss';

const Artist = ({ title, subTitle }) => {
    const location = useLocation();
    return (
        <div className="artist-container" style={{
            top: location.pathname === "/music" ? "15%" : "50%"
        }}>
            <h2>{title}</h2>
            <h2>{subTitle}</h2>
        </div>
    )
}

export default Artist
