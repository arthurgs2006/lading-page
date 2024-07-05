import { Col, Row, UncontrolledCarousel } from "reactstrap";
import img1 from '../../public/img/img1.jpeg'
import img2 from '../../public/img/img2.jpeg'
import img3 from '../../public/img/img3.jpeg'
import img4 from '../../public/img/img4.jpeg'
import img5 from '../../public/img/img5.jpeg'
import img6 from '../../public/img/img6.jpeg'
import img7 from '../../public/img/img7.jpeg'
const TESTIMONIES = [
    {
        src: img1,
        header: ' ',
        caption: "",
        key: '1'
    },
    {
        src: img2,
        header: ' ',
        caption: "",
        key: '2'
    },
    {
        src: img3,
        header: ' ',
        caption: "",
        key: '3'
    },
    {
        src: img4,
        header: ' ',
        caption: "",
        key: '4'
    },
    {
        src: img5,
        header: ' ',
        caption: "",
        key: '5'
    },
    {
        src: img6,
        header: ' ',
        caption: "",
        key: '6'
    },
    {
        src: img7,
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