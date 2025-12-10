import {useState} from 'react';

function Toggle ({title, comp}) {
    const [display, setDisplay] = useState(true);
    function setTrue () {setDisplay(true);};
    function setFalse () {setDisplay(false);};

    if (display===false) {
        return (<button onClick={setTrue}>Open {title}</button>);
    };

    if (display===true) {
        return (
            <>
            {comp}
            <button onClick={setFalse}>Close {title}</button>
            </>
        );
    };
};

export default Toggle;