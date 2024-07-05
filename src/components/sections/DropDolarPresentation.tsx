import Header from './Header';
import { Container } from 'reactstrap';

export default function DropDolarPresentation() {
    return (
        <>
            <section className='bg-main text-white 
            d-flex flex-column align-items-center' id='top'>
                <Header />
                <Container id="description" className='text-center h-100 d-flex 
                flex-column justify-content-end pb-5' >
                    <b className='fs-1 text-uppercase'>
                        Conheça a plataforma que te levará ao sucesso
                    </b>
                    <p>
                        O Guia para Gerar de US$2.000 a US$10.000 Mensalmente Vendendo na Amazon dos Estados Unidos

                        Crie um negócio sólido, ético e rentável sem a 
                        necessidade de criar uma loja online, investir em 
                        anúncios ou falar inglês. Aprenda estratégias eficazes 
                        para encontrar produtos lucrativos, otimizar suas listagens, 
                        gerenciar estoques e atrair clientes. Descubra como aproveitar 
                        o alcance global da Amazon para alcançar compradores em todo o mundo.
                        Este guia abrangente oferece dicas práticas e insights 
                        valiosos para quem deseja ter sucesso no mercado de e-commerce.
                    </p>
                </Container>
            </section>
        </>
    );
}
