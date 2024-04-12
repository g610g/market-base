import React, { useState } from 'react';
import { router, Link } from '@inertiajs/inertia-react'
const Test = ({data}) => {
    console.log(data);
    return (
       <div>
            <h1>Hello World</h1>
            <Link href='/test' method="get">Go To Test</Link>
            <Link href='/admin/login' method='post' as='button' data={{email: 'joey.denesik@example.net', password:'password'}}>
                Login admin
            </Link>

        </div>
    )
}

export default Test
