import React from 'react';
import './Details.css'
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = (props) => {

    const notify = () => toast("Wow so easy!", {
        position: "top-center"
    });

    const { cart } = props;
    let time = 0;
    for (const times of cart) {
        time = time + times.time;
    }

    return (
        <div className='exercise-details container-fluid'>
            <div className='d-flex mt-3'>
                <div className='details'>
                    <img src="https://uplandstudio.ca/wp-content/uploads/2020/05/DSC_191120_102-3.jpg" alt="" />
                </div>
                <div className='ms-3'>
                    <h5 className='fw-bold'>Ishtiaq Robin</h5>
                    <p>Faridpur, Dhaka</p>
                </div>
            </div>

            <section>
                <div className='my-4 d-flex justify-content-between mx-auto border border-1 rounded-2 px-3 pt-2 mt-5 my-bio-data' style={{ backgroundColor: "rgb(218, 225, 227)" }}>
                    <div>
                        <h3>70kg</h3>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h3>6.4</h3>
                        <p>Height</p>
                    </div>
                    <div>
                        <h3>21</h3>
                        <p>Age</p>
                    </div>
                </div>
            </section>
            <section>
                <h5 className='fw-bold mt-5'>Add A Break</h5>
                <div className='break d-flex justify-content-between border border-1 rounded-2 p-3 mt-3' style={{ backgroundColor: "rgb(218, 225, 227)" }}>
                    <div>
                        <button>10s</button>
                    </div>
                    <div>
                        <button>20s</button>
                    </div>
                    <div>
                        <button>30s</button>
                    </div>
                    <div>
                        <button>40s</button>
                    </div>
                    <div>
                        <button>50s</button>
                    </div>
                </div>
            </section>
            <section>
                <h5 className='fw-bold mt-5'>Exercise Details</h5>
                <div className='d-flex justify-content-between mx-auto border border-1 rounded-2 p-3 mt-3' style={{ backgroundColor: "rgb(218, 225, 227)" }}>
                    <div>
                        <h6 className='fw-bold '>Exercise time</h6>
                    </div>
                    <div>
                        <span>{time}</span> seconds
                    </div>
                </div>
                <div className='d-flex justify-content-between border border-1 rounded-2 p-3 mt-3' style={{ backgroundColor: "rgb(218, 225, 227)" }}>
                    <div>
                        <h6 className='fw-bold'>Break time</h6>
                    </div>
                    <div>
                        <span>00</span> seconds
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <Button onClick={notify} className='bg-primary mb-2 py-3 px-5 w-100 mt-5'>Activity Completed</Button>
                    <ToastContainer></ToastContainer>
                </div>
            </section>

        </div>
    );
};

export default Details;