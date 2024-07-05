
type BtnProps = {
    text: string,
    small_width?: boolean,
    href?: string 
}

export default function ({text, small_width, href}: BtnProps) {
    return (
        <>

            <div className={`w-100 d-flex justify-content-center align-items-center small-btn`}>
                <a 
                href={href}
                    className={`btn d-flex btn-outline-warning border-0 bg-light shadow align-items-center justify-content-center gap-2 animation-hover-scale ${small_width? 'w-50' : ''}`}
                >
                    <b className="text-uppercase">{text}</b>
                    <i className="bi bi-arrow-up-right-circle"></i>
                </a>
            </div>
        </>
    )
}