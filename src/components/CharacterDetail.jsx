import { Link, useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import image from '../images/harry-potter-favic.webp';

function CharacterDetail({ searchDetail }) {
  const { figure } = useParams();

  console.log(figure);
  const oneFigure = searchDetail(figure); /* .replace(/-/g, ' ')*/

  //const { name, species, status, gender, house, alternate_names } = oneFigure;
  return (
    <div className="completCard">
      <h2 className="titleDetail">{figure}</h2>
      <div className="individualCard">
        <img className="card-image" src={image} alt="name" />
        <ul className="detail-list">
          <li className="card-details">Species: {} </li>
          <li className="card-details">Status</li>
          <li className="card-details">Gender</li>
          <li className="card-details">House</li>
          <li className="card-details">Alternate-names:</li>
        </ul>
      </div>
      <Link className="linkDetail" to="/">
        <i class="fa-solid fa-arrow-left"></i> HOME
      </Link>
    </div>
  );
}

CharacterDetail.propTypes = {
  searchDetail: PropTypes.func.isRequired,
};

export default CharacterDetail;
