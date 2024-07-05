import SkillsBox from "../skillsBox"
import { Container } from "reactstrap"

export default function () {

    return (
        <>
            <section className="bg-section">
                <Container className="d-flex align-items-center flex-wrap
                justify-content-center">
                    <h1 className="w-75">
                        Descubra como investir em drop shipping de forma segura e prática:
                    </h1>
                    <div className="d-flex gap-2 flex-wrap align-items-center
                    justify-content-center pt-5 pb-4  w-75">
                        <SkillsBox src={'cash-coin'}
                            description="RendaTop" />
                        <SkillsBox src={'bank'}
                            description="Direto" />
                        <SkillsBox src={'wallet'}
                            description="Econômico" />
                        <SkillsBox src={'piggy-bank'}
                            description="Simples" />
                        <SkillsBox src={'globe-americas'}
                            description="Global" />
                        <SkillsBox src={'bar-chart-fill'}
                            description="Lucros" />

                    </div>
                </Container>
            </section>
        </>
    )
}