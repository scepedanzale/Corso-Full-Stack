import Container from 'react-bootstrap/Container';

export default function MyFooter(){
    return(
        <>
            <Container fluid className='bg-warning position-fixed bottom-0 m-0 text-center'>
                <p className='py-4 m-0'>&copy; EpiBooks 2023</p>
            </Container>
        </>
    )
}