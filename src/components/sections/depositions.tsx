import CarouselSection from '../Carousel'
import { Container } from "reactstrap"

export default function () {

    return (
        <>
            <section className="bg-section pt-5 bg-orange text-white" >
                <Container>
                    <div>
                        <h1>
                            Confira alguns clientes que assinaram:
                        </h1>
                    </div>
                    <div className='pb-4'>
                        <CarouselSection />
                    </div>
                </Container>
            </section>
        </>
    )
}