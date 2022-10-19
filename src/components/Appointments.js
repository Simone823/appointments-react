// import react useState
import React, {useState} from 'react';

// appointments component
const Appointments = () => {

    // appointments data json
    const appointments_data = require('../appointmentsData.json');

    // appointments set appointments use state
    const [appointments, setAppointments] = useState(appointments_data);

    // delete appointment
    const deleteAppointment = (id) => (e) => {
        setAppointments( (appointments) => {
            return appointments.filter((appointment) => appointment.id !== id);
        });
    }

    // delete all appointments
    const deleteAllAppointments = () => (e) => {
        setAppointments( (appointments) => {
            return appointments.splice(appointments.length, 0);
        } )
    }

    // reset appointments
    const resetAppointments = () => (e) => {
        setAppointments(appointments_data);
    }

    return (
        <div className='appointments pt-5'>
            <div className='container'>

                {/* row 1 */}
                <div className='row mb-5'>
                    <div className='col-12 text-center'>
                        {/* title */}
                        <h1 className="mb-0 text-info fw-bold">Lista Appuntamenti</h1>
                    </div>
                </div>

                {/* row 2 */}
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-8'>
                        
                        {/* card appointments */}
                        <div className='card bg-dark shadow-lg mb-4'>
                            {/* list appoimnets */}
                            <ul className='list-appointments'>
                                {/* appointments map */}
                                {appointments.length ? (
                                    appointments.map( (appointment) => {
                                        return (
                                            <li className='d-flex align-items-center gap-3 px-3 py-4' key={appointment.id}>
                                                {/* image */}
                                                <figure className='user-image shadow flex-shrink-0'>
                                                    <img src={require(`../assets/${appointment.image}`)} alt={appointment.person}/>
                                                </figure>

                                                {/* description */}
                                                <div className='description flex-grow-1'>
                                                    {/* name */}
                                                    <h5 className='mb-0 fw-bold'>{appointment.person}</h5>
                                                    <p className="mb-0">{appointment.text}</p>
                                                </div>

                                                {/* btn */}
                                                <div className='button align-self-start'>
                                                    <button onClick={deleteAppointment(appointment.id)} className='btn btn-danger shadow'>X</button>
                                                </div>
                                            </li>
                                        )
                                    })   
                                ) : (
                                    <h4 className='text-center fw-bold py-3'>Non ci sono appuntamenti</h4>
                                )} 
                            </ul>
                        </div>

                        {/* btn */}
                        <div className='buttons d-flex justify-content-between'>
                            <button onClick={resetAppointments()} type='button' className='btn btn-info'>Reset</button>
                            <button onClick={deleteAllAppointments()} type='button' className='btn btn-danger'>Elimina tutti</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

// export Appointments
export default Appointments;