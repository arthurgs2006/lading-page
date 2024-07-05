import { Container } from "reactstrap";

type cardInfo = {
    icon: string,
    title: string,
    description: string
}

export default function ({icon, title, description}: cardInfo) {
    return (
        <>
            <div className="rounded bg-orange
            border-0 position-relative" style={{ minHeight: '40vh', maxWidth: '35vh' }}>
                <Container className="d-flex flex-column gap-5">
                    <header className="w-100 d-flex justify-content-center">
                        <div className="rounded-2 text-white d-flex justify-content-center 
                         position-absolute translate-middle-y bg-lightorange shadow border-warning px-2">
                            <i className={`bi bi-${icon} fs-1 text-light`}></i>
                        </div>
                    </header>
                    <main className="text-white d-flex flex-column gap-4 ">
                        <h2>
                            {title}
                        </h2>
                        <p>
                            {description}
                        </p>
                        <hr className="text-white"/>
                    </main>
                </Container>
            </div>
        </>
    );
}
