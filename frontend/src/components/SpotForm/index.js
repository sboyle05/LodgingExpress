import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import  {useDispatch} from 'react-redux';
import { createSpot, updateSpot } from '../../store/spots';
import './NewSpotForm.css';

const SpotForm = ({spot, formType}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [country, setCountry] = useState(spot?.country);
    const [streetAddress, setStreetAddress] = useState(spot?.streetAddress);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state);
    const [lat, setLat] = useState(spot?.lat);
    const [long, setLong] = useState(spot?.long);
    const [description, setDescription] = useState(spot?.description);
    const [name, setName] = useState(spot?.name);
    const [price, setPrice] = useState(spot?.price);
    const [previewImage, setPreviewImage] = useState(spot?.previewImage);
    const [image, setImage] = useState(spot?.image)
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({});

        spot = {...spot, country, streetAddress, city, state, lat, long, description, name, price, previewImage, image}
        let submitSpot;
        if(formType === "Update Spot"){
            submitSpot = await dispatch(updateSpot(spot))
        } else{
            submitSpot = await dispatch(createSpot(spot))
        }
        if(submitSpot.errors) return setErrors(submitSpot.errors)
        if (submitSpot){
            history.push(`/spots/${submitSpot.id}`)
        }
    }

    return (
        <>
        <section className='newSpotForm'>


        <form onSubmit={handleSubmit}>
        <div>
        <h1>Create a new Spot</h1>
        </div>
        <h2>Where's your place located?</h2>
        <h3>Guests will only get your exact address once they booked a reservation</h3>

        <div className="errors">{errors.country}</div>
        <section className='locationDetails'>
        <section className='country'>
        <h3>
        Country</h3>
        <input
        type="text"
        value={country}
        placeholder='Country'
        onChange={(e)=> setCountry(e.target.value)}/>
        </section>
        <section className='address'>
        <h3>
        Street address</h3>
        <input
        type='text'
        value={streetAddress}
        placeholder='Address'
        onChange={(e)=> setStreetAddress(e.target.value)}></input>

        </section>
        <section className='cityState'>
        <span>
        City
        <input
        type='text'
        value={city}
        placeholder='City'
        onChange={(e)=> setCity(e.target.value)}></input>
        </span>
        <span>
        State
        <input
        type='text'
        value={state}
        placeholder='STATE'
        onChange={(e)=> setState(e.target.value)}></input>
        </span>
        </section>
        <h3>
        Latitude
        <input
        type='text'
        value={lat}
        placeholder='Latitude'
        onChange={(e)=> setLat(e.target.value)}></input>
        </h3>
        <h3>
        Longitude
        <input
        type='text'
        value={long}
        placeholder='Longitude'
        onChange={(e)=> setLong(e.target.value)}></input>
        </h3>
        </section>
        <section className='description'>
        <h2>
        Describe your place to guests </h2>
        <h3>Mention the best features of your space, any special amenities like
            fast wifi or parking, and what you love about the neighborhood.
        </h3>
        <textarea
        value={description}
        placeholder='What makes your spot, THE SPOT?'
        onChange={(e)=> setDescription(e.target.value)}></textarea>

        </section>
        <section className='spotName'>
        <h2>
        Create a title for your spot</h2>
        <input
        type='text'
        value={name}
        placeholder='Name of your spot'
        onChange={(e)=> setName(e.target.value)}></input>

        </section>
        <section className='price'>
        <h2>
        Set a base price for your spot</h2>
        <input
        type='text'
        value={price}
        placeholder='Price per night (USD)'
        onChange={(e)=> setPrice(e.target.value)}>

        </input>

        </section>
        <section className='urls'>
        <h2>
        Liven up your spot with photos </h2>
        <h3>Submit a link to at least one phot to publish your spot.</h3>
        <input
        type='text'
        value={previewImage}
        placeholder='Preview Image URL'
        onChange={(e)=> setPreviewImage(e.target.value)}></input>
        <br></br><input
        type='text'
        value={image}
        placeholder='Image URL'
        onChange={(e)=> setImage(e.target.value)}></input>
         <br></br><input
        type='text'
        value={image}
        placeholder='Image URL'
        onChange={(e)=> setImage(e.target.value)}></input>
         <br></br><input
        type='text'
        value={image}
        placeholder='Image URL'
        onChange={(e)=> setImage(e.target.value)}></input>
         <br></br><input
        type='text'
        value={image}
        placeholder='Image URL'
        onChange={(e)=> setImage(e.target.value)}></input>
        </section>
        <button type="submit">{formType}</button>
        </form>
        </section>

        </>
    )

}


export default SpotForm;
