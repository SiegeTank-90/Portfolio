import React from "react";
import gear1 from '../images/gear1.svg';
import gear2 from '../images/gear3.svg';
import gear3 from '../images/gear2.svg';

function Background() {

    return (
        <div className='Background'>
            <div className='Background--Spacer'>
                <img
                    src={gear1}
                    alt='gear'
                    className='Background--BlueGear--image
        '
                />
                <img src={gear3} alt='gear' className='Background--SmallGear--image' />
            </div>
            <div className='Background--Spacer'>
                <img src={gear2} alt='gear' className='Background--MainGear--image' />
            </div>
        </div>


    )

}

export default Background