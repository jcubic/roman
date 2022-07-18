import { useState, ChangeEvent } from 'react';

const ReactConverter = () => {
    const [roman, setRoman] = useState<string>('none');
    const convertToRoman = (e: ChangeEvent<HTMLInputElement>) => {
        const arabic = Number(e.currentTarget.value);
        if (!arabic) {
            setRoman('none');
        }
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
