
import { Container } from 'reactstrap'

export default function dropdolarPresentation() {
    return (
        <>
            <footer className='bg-dark text-white bg-orange p-3 text-center' id='#footer'>
                <Container className='d-flex'>
                    <a href="#top" className='fs-1'>
                        <i className="bi bi-currency-rupee text-white"></i>
                    </a>
                    <p>
                        Este website é apenas uma ilustração de uma landing page
                         para apresentação, com conteúdo relacionado ao DropShipping.
                        Todas as imagens e textos utilizados que possuem direitos autorais 
                        vinculados serão devidamente creditados. Nada presente foi ou será utilizado 
                        para custear ou acumular capital; o propósito da criação deste website 
                        é apresentar as habilidades de um desenvolvedor para o mercado de trabalho.
                    </p>
                </Container>
            </footer>
        </>
    )
}