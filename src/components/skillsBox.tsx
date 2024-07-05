
type boxStructare = {
    src: string,
    description: string
}

export default function ({src, description}: boxStructare) {

    return (
        <>
            <div style={{ width: '25vh', height: '25vh' }}
            className="d-flex border rounded-4 justify-content-center
            flex-column text-center bg-orange text-white box-animation border-0">
                <i className={`bi bi-${src} fs-1`}></i>
                <b>
                    {description}
                </b>
            </div>
        </>
    )
}