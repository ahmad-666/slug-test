'use client';
import { usePathname, useParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
    const pathname = usePathname();
    const params = useParams();
    console.log('client page pathname', pathname);
    console.log('client page encode pathname', encodeURI(pathname));
    console.log('client page decode pathname', decodeURI(pathname));
    console.log('client page params', params);
    console.log('client page encode params', encodeURI(JSON.stringify(params)));
    console.log('client page decode params', decodeURI(JSON.stringify(params)));
    useEffect(() => {
        console.log('use effect client page pathname', pathname);
        console.log('use effect client page encode pathname', encodeURI(pathname));
        console.log('use effect client page decode pathname', decodeURI(pathname));
        console.log('use effect client page params', params);
        console.log('use effect client page encode params', encodeURI(JSON.stringify(params)));
        console.log('use effect client page decode params', decodeURI(JSON.stringify(params)));
    });

    return (
        <div className='my-section-lg'>
            <h1>client page pathname: {pathname}</h1>
            <h1>client page encode pathname: {encodeURI(pathname)}</h1>
            <h1>client page decode pathname: {decodeURI(pathname)}</h1>
            <h1>client page params: {JSON.stringify(params)}</h1>
            <h1>client page encode params: {encodeURI(JSON.stringify(params))}</h1>
            <h1>client page decode params: {decodeURI(JSON.stringify(params))}</h1>
        </div>
    );
}
