import { Col, Row, UncontrolledCarousel } from "reactstrap";
const TESTIMONIES = [
    {
        src: '../../public/img/img1.jpeg',
        header: ' ',
        caption: "",
        key: '1'
    },
    {
        src: '../../public/img/img2.jpeg',
        header: ' ',
        caption: "",
        key: '2'
    },
    {
        src: '../../public/img/img3.jpeg',
        header: ' ',
        caption: "",
        key: '3'
    },
    {
        src: '../../public/img/img4.jpeg',
        header: ' ',
        caption: "",
        key: '4'
    },
    {
        src: '../../public/img/img5.jpeg',
        header: ' ',
        caption: "",
        key: '5'
    },
    {
        src: '../../public/img/img6.jpeg',
        header: ' ',
        caption: "",
        key: '6'
    },
    {
        src: '../../public/img/img7.jpeg',
        header: ' ',
        caption: "",
        key: '7'
    }
];

const Carousel = () => (
    <Row className='mt-5 mb-5'>
        <Col md={8} className="mx-auto">
            <UncontrolledCarousel 
                items={TESTIMONIES} 
                style={{ borderRadius: '20px' }} 
            />
        </Col>
    </Row>
);


export default Carousel;