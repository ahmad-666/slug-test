export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    console.log('server page id', id);
    console.log('server page encode id', encodeURI(id));
    console.log('server page decode id', decodeURI(id));

    return (
        <div className='my-section-lg'>
            <h1>server page id: {id}</h1>
            <h1>server page encode id: {encodeURI(id)}</h1>
            <h1>server page decode id: {decodeURI(id)}</h1>
        </div>
    );
}
