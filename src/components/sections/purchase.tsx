import { Container } from "reactstrap";
import OrangeButton from "../OrangeButton";

export default function () {
    return (
        <>
            <section className="bg-section text-center pt-5" id="purchase">
                <section className="bg-iphone">
                    <Container className="d-flex justify-content-center align-items-center flex-column px-5 gap-5 h-100">
                        <div className="screen-padding">
                            <img loading="lazy" decoding="async"
                                src="https://rendagringa.com.br/wp-content/uploads/2024/06/Note-card-4.png"
                                className="attachment-full size-full wp-image-3666 img-fluid"
                                alt="Smartphone com foto da comunidade" />
                        </div>
                        <div className="text-center text-black small-padding">
                            <h1 className="small-title ">
                                Quer assinar nossa plataforma?
                            </h1>
                            <h6 className="small-title ">
                                Acesse o botão abaixo para prosseguir com a compra
                                do melhor curso de dropshipping que verá!
                            </h6>
                            <ul className="list-unstyled text-black small-description ">
                                <li>✅ Planilha de Cálculo de produtos.</li>
                                <li>✅ Planilha de Análise de mercado.</li>
                                <li>✅ Planilha de Gerenciamento de estoque.</li>
                                <li>✅ Planilha de Marketing digital.</li>
                                <li>✅ Planilha de Suporte ao cliente.</li>
                            </ul>
                            <OrangeButton text="Garanta o seu Já"
                                href="https://www.linkedin.com/in/arthur-gon%C3%A7alves-saldanha-375a70157/" />
                        </div>
                    </Container>
                </section>
            </section>
        </>
    );
}
