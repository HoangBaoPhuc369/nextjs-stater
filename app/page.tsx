'use client';

import _ from 'lodash';
import Image from 'next/image';

export default function Home() {
    const name = 'World';   
    const string = _.concat('Hello', ' ', name);
    return (
        <>
            <div className="h1-bold">{string}</div>
        </>
    );
}
