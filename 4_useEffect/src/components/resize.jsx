import { useState, useEffect, use } from "react";


function WindowResize() {

    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const screenSize = () => {
            setScreenWidth(window.innerWidth);
        }

        window.addEventListener('resize', screenSize);

        return () => {
            window.removeEventListener('resize', screenSize);
        }
    }, []);


    useEffect(() => {
        document.title = `Screen width: ${screenWidth}`;
    }, [screenWidth]);


    return (
        <section className="center">
            <div>
                <h1>{screenWidth} pixels</h1>
            </div>
        </section>
    )
}

export default WindowResize;