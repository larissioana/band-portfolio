import './album2.scss';
import album from '../../assets/66479 copy.png';
import cd from '../../assets/66479 copy 2.png'
import Artist from '../artist/Artist';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const tracklist = [
    {
        song: 1,
        title: "Post-God Nirvana"
    },
    {
        song: 2,
        title: "Malaria Vvlgata"
    },
    {
        song: 3,
        title: "The Deathless Sun"
    },
    {
        song: 4,
        title: "Ov My Herculean Exila"
    },
    {
        song: 5,
        title: "Neo-Spatacvs"
    },
    {
        song: 6,
        title: "Disinheritance"
    },
    {
        song: 7,
        title: "Off to War!"
    },
    {
        song: 8,
        title: "Once Upon A Pale Horse"
    },
    {
        song: 9,
        title: "Thy Becoming Eternal"
    },
    {
        song: 10,
        title: "Vervs Christvs"
    }
];

const Album2 = () => {

    return (
        <>
            <Artist title="Behemoth" subTitle={"Opvs Contra Natvram"} />
            <div className="album-container2">
                <div className="album2">
                    <img src={album} alt="Album" className="album-image2" />
                    <img src={cd} alt="CD" className="cd2" />
                </div>
            </div>
            <div className="album-tracklist">

                {
                    tracklist.map((track) => {
                        return <div key={track.song} className="songs">
                            <p>{track.song}.</p>
                            <p>{track.title}</p>
                        </div>
                    })
                }
            </div>
        </>
    )
}

export default Album2
