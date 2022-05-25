import '../../styles/stylesLibrary.css';
import React, { useState } from 'react';
function Description({bookDescription, shortedDescription }) {
    const [showAll, setShowAll] = useState(false);
    const readMore = () => {
        setShowAll(true)
    }
    const readLess = () => {
        setShowAll(false)
    }
    return (
        <>
        
            {showAll === false &&
            <> 
            {bookDescription.length<200&&
                <p className="description-paragraph">  {shortedDescription}</p>
            
            }
                 
                    {bookDescription.length >= 200 &&
                    <>
                     <p className="description-paragraph">  {shortedDescription}...</p>
                        <button className='read-more-button' onClick={readMore}> Read more</button>
                        </>
                    }
                </>
            }
            {showAll &&
                <>
                    <p className="description-paragraph">  {bookDescription}</p>
                    <button className='read-less-button' onClick={readLess}> Read Less</button>
                </>
            }
        </>
    )
}
export default Description;