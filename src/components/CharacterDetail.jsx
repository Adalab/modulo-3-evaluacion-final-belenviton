import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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
          src={oneFigure.image}
          alt={oneFigure.name}
        />
        <ul className="detail-list">
          <li className="card-details">
            Species: {oneFigure.species.toUpperCase()}
          </li>
          <li className="card-details">
            Status: {oneFigure.alive === true ? 'Alive' : 'Dead'}
          </li>
          <li className="card-details">Gender: {oneFigure.gender}</li>
          <li className="card-details">House: {oneFigure.house}</li>
          <li className="card-details">
            Alternate-names: {alternateNames || 'Unknown'}
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
