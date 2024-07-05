
import { Container } from "reactstrap"
import DefaultBox from '../defaultBox'
import OrangeButton from "../OrangeButton"
export default function () {

    return (
        <>
            <section className="bg-section d-flex 
            flex-column gap-5 pt-5 pb-5 bg-dark-transparent text-light">
                <div className="d-flex w-100 container flex-column ">
                    <h2>
                        É um completo iniciante…
                    </h2>
                    <p>
                        … que só ouviu falar sobre o mercado da Amazon americana,
                        mas não sabe bem como transformar essa oportunidade em uma fonte de renda.
                    </p>
                </div>
                <Container className='d-flex align-items-center
                justify-content-center flex-wrap gap-3 '>
                    <DefaultBox
                        src="https://rendagringa.com.br/wp-content/uploads/2024/06/Note-card-2.png"
                        alt="Notebook informando uma mente milionária"
                        title="Domine as técnicas de DropShipping"
                        description="Aprenda as estratégias para se tornar um especialista em DropShipping e aumentar sua renda."
                    />

                    <DefaultBox
                        src="https://rendagringa.com.br/wp-content/uploads/2024/06/Note-card-3.png"
                        alt="Notebook informando alta rentabilidade"
                        title="Siga os passos para alcançar a perfeita rentabilidade"
                        description="Descubra o caminho para obter alta rentabilidade e maximize seus ganhos de forma eficiente."
                    />

                    <DefaultBox
                        src="https://rendagringa.com.br/wp-content/uploads/2024/06/Note-card-1.png"
                        alt="Notebook informando alta rentabilidade"
                        title="Comece a faturar o quanto antes"
                        description="Inicie seu negócio agora e veja os lucros crescerem rapidamente com nossas dicas especializadas."
                    />

                </Container>
                <OrangeButton text="Confira!" 
                href="#purchase"
                small_width/>
            </section>
        </>
    )
}