import {ReactComponent as StarFull} from 'assets/img/Stars-full.svg';
import {ReactComponent as StarEmpty} from 'assets/img/Stars-empty.svg';
import {ReactComponent as StarHalf} from 'assets/img/Stars-half.svg';
import './styles.css';

function MovieStars() {
    return (
        <div className="dsmovie-stars-container">
            <StarFull />
            <StarFull />
            <StarFull />
            <StarHalf />
            <StarEmpty />
        </div>
    );
}

export default MovieStars;