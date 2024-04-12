import React, { useState } from 'react';
import { router, Link } from '@inertiajs/inertia-react'
const Test = ({data}) => {
    console.log(data);
    return (
       <div>
            <h1>Hello World</h1>
            <Link href='/test' method="get">Go To Test</Link>
        </div>
    )
}

export default Test
