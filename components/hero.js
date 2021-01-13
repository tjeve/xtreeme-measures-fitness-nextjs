import Jumbotron from 'react-bootstrap/Jumbotron'
import Image from 'next/Image'
// import Layout from '../components/layout'
import Button from 'react-bootstrap/Button'


function hero () {
    return(
    
        <Jumbotron>
            <Image
                src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.39.21 PM.png"
                alt="xtreeme fitness logo"
                className="hero-image" 
                width={1400}
                height={1500}
            />
            <h1>Xtreeme Measures Fitness</h1>
            <p>
                Sometimes it takes Xtreeme Measures. Believe in yourself and you will be unstoppable.
            </p>
            <p>
                <Button variant="primary">Subscribe</Button>
            </p>
        </Jumbotron>
    
    )

}

export default hero