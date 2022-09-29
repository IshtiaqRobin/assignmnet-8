import React from 'react';
import './Details.css'
import { Button } from 'react-bootstrap';

const Details = () => {
    return (
        <div className=''>
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
                <div className='my-4 d-flex justify-content-between mx-auto border border-1'>
                    <div>
                        <h2>70kg</h2>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h2>6.4</h2>
                        <p>Height</p>
                    </div>
                    <div>
                        <h2>21</h2>
                        <p>Age</p>
                    </div>
                </div>
            </section>
            <section>
                <h5 className='fw-bold'>Add A Break</h5>
                <div className='break d-flex justify-content-between mt-3'>
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
                <div className='d-flex justify-content-between mt-3'>
                    <div>
                        <h6 className='fw-bold'>Exercise time</h6>
                    </div>
                    <div>
                        00 seconds
                    </div>
                </div>
                <div className='d-flex justify-content-between mt-3'>
                    <div>
                        <h6 className='fw-bold'>Break time</h6>
                    </div>
                    <div>
                        00 seconds
                    </div>
                </div>
            </section>
            <section>
                <Button className='bg-primary mb-2 px-5 w-100 mt-5'>Activity Completed</Button>
            </section>
        </div>
    );
};

export default Details;