import Jumbotron from 'react-bootstrap/Jumbotron'
// import Image from 'next/Image'
import Layout from '../components/layout'
import Button from 'react-bootstrap/Button'

function hero () {
    return(
        <Layout>
            <Jumbotron>
                <h1>Xtreeme Measures Fitness</h1>
                <p>
                    Sometimes it takes Xtreeme Measures. Believe in yourself and you will be unstoppable.
                </p>
                <p>
                    <Button variant="primary">Subscribe</Button>
                </p>
            </Jumbotron>
        </Layout>
    )

}

export default hero