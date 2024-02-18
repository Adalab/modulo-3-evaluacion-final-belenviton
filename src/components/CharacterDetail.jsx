import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

function CharacterDetail({ searchDetail }) {
  const { figure } = useParams();

  console.log(figure);
  const oneFigure = searchDetail(figure); /* .replace(/-/g, ' ') */

  //const { name, species, status, gender, house, alternate_names } = oneFigure;
  return (
    <div className="individualCard">
      <img src="../public/harry-potter-favic.webp" alt={oneFigure.name} />
      <ul className="detail-list">
        <li className="card-details">{oneFigure.name} </li>
        <li className="card-details">{oneFigure.species}</li>
        <li className="card-details">{oneFigure.status}</li>
        <li className="card-details">{oneFigure.gender}</li>
        <li className="card-details">{oneFigure.house}</li>
        <li className="card-details">{oneFigure.alternate_names}</li>
      </ul>
    </div>
  );
}

CharacterDetail.propTypes = {
  searchDetail: PropTypes.func.isRequired,
};

export default CharacterDetail;
