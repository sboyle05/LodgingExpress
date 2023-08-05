import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import  {useDispatch} from 'react-redux';
import { createSpot, updateSpot } from '../../store/spots';
import './NewSpotForm.css';

const SpotForm = ({spot, spotImages, formType}) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [country, setCountry] = useState(spot?.country);
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state);
    const [lat, setLat] = useState(spot?.lat);
    const [lng, setLng] = useState(spot?.lng);
    const [description, setDescription] = useState(spot?.description);
    const [name, setName] = useState(spot?.name);
    const [price, setPrice] = useState(spot?.price);
    const [previewImage, setPreviewImage] = useState(spot?.previewImage);
    const [image1, setImage1] = useState(spot?.image1)
    const [image2, setImage2] = useState(spot?.image2)
    const [image3, setImage3] = useState(spot?.image3)
    const [image4, setImage4] = useState(spot?.image4)
    const [errors, setErrors] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formErrors = {};
        const isImage = (url) => {
            return url && (url.endsWith('.jpeg') || url.endsWith('.jpg') || url.endsWith('.gif') || url.endsWith('.png'));
        };

        if (!previewImage || !isImage(previewImage)) {
            formErrors = {...formErrors, previewImage: "Preview image is required and must be an image file (.jpg, .jpeg, .gif, .png)"};
        }

        if (image1 && !isImage(image1)) {
            formErrors = {...formErrors, image1: "Image URL must be an image file (.jpg, .jpeg, .gif, .png)"};
        }

        if (image2 && !isImage(image2)) {
            formErrors = {...formErrors, image2: "Image URL must be an image file (.jpg, .jpeg, .gif, .png)"};
        }

        if (image3 && !isImage(image3)) {
            formErrors = {...formErrors, image3: "Image URL must be an image file (.jpg, .jpeg, .gif, .png)"};
        }

        if (image4 && !isImage(image4)) {
            formErrors = {...formErrors, image4: "Image URL must be an image file (.jpg, .jpeg, .gif, .png)"};
        }

        spot = {...spot, country, address, city, state, lat: parseFloat(lat), lng: parseFloat(lng), description, name, price: parseFloat(price)}
        spotImages = [
            {url: previewImage,
            preview: true
            },
            {url: image1,
            preview: false
            },
            {url: image2,
            preview: false
            },
            {url: image3,
            preview: false
            },
            {url: image4,
            preview: false
            },
        ];

        let submitSpot;
        if(formType === "Update Spot"){
            submitSpot = await dispatch(updateSpot(spot))

        } else{
            submitSpot = await dispatch(createSpot(spot, spotImages))

        }

        if(submitSpot.errors) {
            formErrors = ({...formErrors, ...submitSpot.errors})
        }

        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        if (submitSpot){
            history.push(`/spots/${submitSpot.id}`)
        }
    }
    useEffect(() => {},[errors])
    return (
        <>
        <section className='formContainer'>
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
        Country</h3><span className="errors">{errors.country}</span>
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
        value={address}
        placeholder='Address'
        onChange={(e)=> setAddress(e.target.value)}></input>

        </section>
        <section className='cityState'>
        <span>
        City</span><span className="errors">{errors.city}</span>
        <input
        type='text'
        value={city}
        placeholder='City'
        onChange={(e)=> setCity(e.target.value)}></input>

        <span>
        State</span><span className="errors">{errors.state}</span>
        <input
        type='text'
        value={state}
        placeholder='STATE'
        onChange={(e)=> setState(e.target.value)}></input>

        </section>
        <h3>
        Latitude</h3><span className="errors">{errors.lat}</span>
        <input
        type='number'
        value={lat}
        placeholder='Latitude'
        onChange={(e)=> setLat(e.target.value)}></input>

        <h3>
        longitude</h3><span className="errors">{errors.lng}</span>
        <input
        type='number'
        value={lng}
        placeholder='lngitude'
        onChange={(e)=> setLng(e.target.value)}></input>

        </section>
        <section className='description'>
        <h2>
        Describe your place to guests </h2>
        <h3>Mention the best features of your space, any special amenities like
            fast wifi or parking, and what you love about the neighborhood.
        </h3>
        <textarea
        value={description}
        placeholder='Please write at least 30 characters'
        onChange={(e)=> setDescription(e.target.value)}></textarea>

        </section><span className="errors">{errors.description}</span>
        <section className='spotName'>
        <h2>
        Create a title for your spot</h2>
        <h3>Catch guests' attention with a spot title that highlights what makes your place special.</h3>
        <input
        type='text'
        value={name}
        placeholder='Name of your spot'
        onChange={(e)=> setName(e.target.value)}></input><span className="errors">{errors.name}</span>

        </section>
        <section className='price'>
        <h2>
        Set a base price for your spot</h2>
        <h3>Competitive pricing can help your listing stand out and rank higher in search results.</h3>
        <input
        type='number'
        value={price}
        placeholder='Price per night (USD)'
        onChange={(e)=> setPrice(e.target.value)}>

        </input>
        <span className="errors">{errors.price}</span>
        </section>
        <section className='urls'>
        <h2>
        Liven up your spot with photos </h2>
        <h3>Submit a link to at least one phot to publish your spot.</h3>
        <input
        type='text'
        value={previewImage}
        placeholder='Preview Image URL'
        onChange={(e)=> setPreviewImage(e.target.value)}></input><span className="errors">{errors.previewImage}</span>
        <br></br><input
        type='text'
        value={image1}
        placeholder='Image URL'
        onChange={(e)=> setImage1(e.target.value)}></input><span className="errors">{errors.image1}</span>
         <br></br><input
        type='text'
        value={image2}
        placeholder='Image URL'
        onChange={(e)=> setImage2(e.target.value)}></input><span className="errors">{errors.image2}</span>
         <br></br><input
        type='text'
        value={image3}
        placeholder='Image URL'
        onChange={(e)=> setImage3(e.target.value)}></input><span className="errors">{errors.image3}</span>
         <br></br><input
        type='text'
        value={image4}
        placeholder='Image URL'
        onChange={(e)=> setImage4(e.target.value)}></input><span className="errors">{errors.image4}</span>
        </section>
        <button type="submit">{formType}</button>
        </form>
        </section>
        </section>
        </>
    )

}


export default SpotForm;
