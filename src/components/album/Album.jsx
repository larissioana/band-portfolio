import './album.scss'
import img1 from '../../assets/Behemoth_TheSatanist_02_87eb5bb7-5932-4431-956a-6a0c432dc949 copy 2.png'
import img2 from '../../assets/Behemoth_TheSatanist_03_1621259b-bbc3-438c-bb34-7c08e4bf2dff copy.png'
import Artist from '../artist/Artist'

const Album = () => {
    return (
        <div className="album-container">
            <Artist title="Behemoth" subTitle={"The Satanist"} />
            <div className="album">
                <img src={img1} alt="Album" className="album-image" />
                <img src={img2} alt="CD" className="cd" />
            </div>
        </div>

    )
}

export default Album
