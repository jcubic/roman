import { useState, ChangeEvent } from 'react';

import toRoman from './toRoman';

const ReactConverter = () => {
    const [roman, setRoman] = useState<string>('none');
    const convertToRoman = (e: ChangeEvent<HTMLInputElement>) => {
        const arabic = Number(e.currentTarget.value);
        if (!arabic) {
            setRoman('none');
        }
        setRoman(toRoman(arabic));
    };
    return (
        <>
          <label htmlFor="input">Arabic</label>
          <input id="input" type="number" onChange={convertToRoman} />
          <p>Roman: {roman}</p>
        </>
    );
};


export default ReactConverter;
