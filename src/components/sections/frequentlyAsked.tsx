import { Container } from "reactstrap"
import CollasedSection from '../CollapsedSection'
export default function () {

    return (
        <>
            <section className="bg-section text-center">
                <Container>
                    <section>
                        <h1>
                            Perguntas Frequentes:
                        </h1>
                    </section>
                    <section className="pt-5 pb-4">
                        <CollasedSection titleElement={'Como irei receber meu acesso?'}
                            subtitleElement={'Você vai receber o acesso via e-mail assim que finalizar o pagamento.'} />
                        <CollasedSection titleElement={'O acesso é vitalício?'}
                            subtitleElement={'Sim.'} />
                        <CollasedSection titleElement={'Dropshipping tradicional VS Dropshipping na Amazon'}
                            subtitleElement={'Durante o tradicional, é preciso construir página de vendas, investimento em tráfego pago. Enquanto pela Amazon, não é necessário construir uma página de vendas, Não precisa de investimento em tráfego pago.'} />
                        <CollasedSection titleElement={'Como funciona o suporte?'} 
                        subtitleElement={'Temos um grupo de alunos no telegram onde terá o suporte especializado para responder suas dúvidas e também o meu acompanhamento.'} />
                        <CollasedSection titleElement={'Preciso saber falar inglês?'} 
                        subtitleElement={'Não, você pode fazer tudo pelo google tradutor.'} />
                    </section>
                </Container>
            </section>
        </>
    )
}