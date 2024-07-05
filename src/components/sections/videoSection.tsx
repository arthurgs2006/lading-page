import video from '../../../public/videos/videotest.mp4'
import { Container } from 'reactstrap'
export default function () {

    return (
        <>
            <section className='bg-black w-100 bg-section' >
                <Container className='d-flex justify-content-center align-items-center 
                flex-column gap-3' >
                    <b className='text-light text-uppercase'>
                        <i className="bi bi-caret-down-fill"></i>
                        Acompanhe o vídeo a seguir para saber mais
                        <i className="bi bi-caret-down-fill"></i>
                    </b>
                    <div className='rounded border border-1 border-warning '>
                        <video src={video} autoPlay muted controls
                            className='img-fluid rounded p-0'>
                        </video>
                    </div>
                </Container>
            </section>
        </>
    )
}