// import react useState
import React, {useState} from 'react';

// appointments component
const Appointments = () => {

    // appointments
    const appointments_data = [
        {
            id: 1,
            image: 'img/tizio-palestra_naoqwo.jpg',
            person: 'Fabio Robiola',
            text: 'No pain no Gain XOXO PALESTRA MUSCOLI POTENZA'
        },
        {
            id: 2,
            image: 'img/tizia-cuffie_xf2bae.jpg',
            person: 'Sabrina Cortelli',
            text: "La musica è per l'anima quello che la ginnastica è per il corpo."
        },
        {
            id: 3,
            image: 'img/tizio-giacca_jvzktv.jpg',
            person: 'Mike Russel',
            text: "Non permettere a nessuno di dirti che non sei capace"
        },
        {
            id: 4,
            image: 'img/tipa-occhiali_svc9jp.jpg',
            person: 'Rebecca Orlando',
            text: "La fotografia è passione e amore, è l’emozione passeggera, che arriva e subito vola via."
        },
        {
            id: 5,
            image: 'img/tizio_awlq7r.jpg',
            person: 'Christian Minerva',
            text: "Non mangerei un hamburger nemmeno se mi pagassero 40,000 dollari"
        },
    ];

    // appointments set appointments use state
    const [appointments, setAppointments] = useState(appointments_data);

    return (
        <section className='appointments pt-5'>
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
                        <div className='card bg-dark shadow-lg'>
                            {/* list appoimnets */}
                            <ul className='list-appointments'>
                                {/* appointments map */}
                                {appointments.map( (appointment) => {
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
                                            <div className='buttons align-self-start'>
                                                <button className='btn btn-danger shadow'>X</button>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

// export Appointments
export default Appointments;