import React, { useEffect, useState } from 'react'
import "../welcome/welcome.css";
import axios from 'axios';


const Welcome = () => {

    const [vacation, setVacation ] = useState([]);

useEffect(()=>{
    loadVacation();
})
const loadVacation = async()=>{
    const result  = await axios.get("http://localhost:8085/vacations")
    // console.log(result.data);
    setVacation(result.data);
}
    return (
        <div >
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                {
                    vacation.map((vac) => (
                    <tr key={vac.id}>
                        <th><img src='resource\images\pexels-julie-aagaard-2467285.jpg'></img></th>
                        <td>
                            <ul>
                                <li>Hotel Name : {vac.hotelName}</li>
                                <li>Location : {vac.city}</li>
                                <li>{vac.description}</li>
                                <li>Type : {vac.type}</li>
                            </ul>
                        </td>
                        <td>{vac.price}</td>
                        <td><button id="btn" className="btn btn-outline-success" type="submit">BuyNow</button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Welcome