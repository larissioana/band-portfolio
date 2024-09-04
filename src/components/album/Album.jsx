import './album.scss'
import img1 from '../../assets/Behemoth_TheSatanist_02_87eb5bb7-5932-4431-956a-6a0c432dc949 copy 2.png'
import img2 from '../../assets/Behemoth_TheSatanist_03_1621259b-bbc3-438c-bb34-7c08e4bf2dff copy.png'

const tracklistTheSatanist = [
    {
        song: 1,
        title: "Blow your trumpets Gabriel"
    },
    {
        song: 2,
        title: "Furor Divinus"
    },
    {
        song: 3,
        title: "Messe Noire"
    },
    {
        song: 4,
        title: "Ora Pro Nobis Lucifer"
    },
    {
        song: 5,
        title: "Amen"
    },
    {
        song: 6,
        title: "The satanist"
    },
    {
        song: 7,
        title: "Ben Sahar"
    },
    {
        song: 8,
        title: "In the absence ov light"
    },
    {
        song: 9,
        title: "O father o satan o sun"
    },
];

const Album = () => {
    return (
        <>
            <div className="album-title">
                <h1>Behemoth</h1>
                <h1>The Satanist</h1>
            </div>
            <div className="flex-container">

                <div className="album-container">
                    <div className="album">
                        <img src={img1} alt="Album" className="album-image" />
                        <img src={img2} alt="CD" className="cd" />
                    </div>
                </div>
                <div className="album-tracklist2">

                    {
                        tracklistTheSatanist.map((track) => {
                            return <div key={track.song} className="songs2">
                                <p>{track.song}.</p>
                                <p>{track.title}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </>

    )
}

export default Album
