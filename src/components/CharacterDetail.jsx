import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import escoba from '../images/escoba.gif';

function CharacterDetail({ searchDetail }) {
  const { figure } = useParams();

  console.log(figure);
  const oneFigure = searchDetail(figure.replace(/-/g, ' '));

  const alternateNames = oneFigure.alternate_names.join(',  ');

  return (
    <div className="completCard">
      <h2 className="titleDetail">{oneFigure.name}</h2>
      <div className="individualCard">
        <img
          className="card-image"
          src={oneFigure.image || escoba}
          alt={oneFigure.name}
        />
        <ul className="detail-list">
          <li className="card-details">
            Species:{' '}
            <spam className="results">{oneFigure.species.toUpperCase()}</spam>
          </li>
          <li className="card-details">
            Status:{' '}
            <spam className="results">
              {oneFigure.alive === true ? 'Alive' : 'Dead'}
            </spam>
          </li>
          <li className="card-details">
            Gender: <spam className="results">{oneFigure.gender}</spam>
          </li>
          <li className="card-details">
            House: <spam className="results">{oneFigure.house}</spam>
          </li>
          <li className="card-details">
            Alternate-names:{' '}
            <spam className="results">{alternateNames || 'Unknown'}</spam>
          </li>
        </ul>
      </div>
      <Link className="linkDetail" to="/">
        <i className="fa-solid fa-arrow-left"></i> HOME
      </Link>
    </div>
  );
}

CharacterDetail.propTypes = {
  searchDetail: PropTypes.func.isRequired,
};

export default CharacterDetail;
