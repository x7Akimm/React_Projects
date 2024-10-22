
import ProfilePic from '../assets/Profile1.jpg'


function Card()
{
    return(
        <div className="card">
            <img className='card-image' src={ProfilePic} alt="profile picture" />
            <h2>Akim</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis quisquam delectus incidunt vitae iure debitis fugiat.</p>
        </div>
    );
}
export default Card