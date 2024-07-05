import { Container } from "reactstrap"
import CardBox from "../CardBox"
export default function () {

    return (
        <>
            <section className="bg-section pb-5">
                <Container>
                    <h1>Conheça nossa estratégia</h1>
                    <div className="description pt-3">
                        <p>
                            No dropshipping, os vendedores listam produtos de
                            fornecedores em suas lojas online sem manter estoque
                            próprio. Quando um cliente faz um pedido, o fornecedor
                            envia diretamente ao cliente. Estratégias incluem escolher
                            nichos lucrativos, encontrar fornecedores confiáveis,
                            otimizar a loja para SEO, usar anúncios pagos para atrair tráfego,
                            e oferecer excelente atendimento ao cliente para
                            garantir satisfação e fidelidade.
                        </p>
                    </div>

                    <div className="d-flex justify-content-center
                    pt-5 gap-4 flex-wrap">
                        <CardBox
                            icon="coin"
                            title="Investimentos Inteligentes"
                            description="Saiba onde investir para maximizar seus lucros no dropshipping. Escolha os melhores nichos e produtos para garantir retornos altos."
                        />

                        <CardBox
                            icon="currency-bitcoin"
                            title="Pagamentos em Cripto"
                            description="Aproveite a tendência crescente das criptomoedas. Aceite pagamentos em Bitcoin e outras criptos para atrair um público mais amplo e moderno."
                        />

                        <CardBox
                            icon="currency-exchange"
                            title="Estratégias de Preços"
                            description="Entenda como definir preços competitivos e lucrativos. Use técnicas de ajuste de preços para garantir margens de lucro sem perder clientes."
                        />

                    </div>
                </Container>
            </section>
        </>
    )
}