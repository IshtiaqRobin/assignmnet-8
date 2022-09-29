import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='headers container my-5'>
            <nav>
                <div>
                <i class="fa-solid fa-dumbbell text-primary fs-1 me-2"></i><span className='fs-2 fw-bold border rounded-2 headers-text px-2'>Fitness-Blender-BD</span>
                </div>
            </nav>
        </div>
    );
};

export default Header;