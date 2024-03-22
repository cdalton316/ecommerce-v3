import {Container,Row,Col} from 'react-bootstrap'

const Footer=()=>{
    const currentYear= new Date().getFullYear()
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col className='text-center py-3'>
                        <p>EBarter Shop No Cash &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
            </footer>

        )
}
export default Footer