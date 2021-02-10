
import Link from 'next/link'
import Image from 'next/Image'
import Head from 'next/head'
import Layout from '../components/layout'
import Navb from '../components/Nav'

// import NavDropdown from 'react-bootstrap/NavDropdown'

// var elem = document.querySelector('.grid');
// var msnry = new Masonry( elem, {
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// // element argument can be a selector string
// //   for an individual element
// var msnry = new Masonry( '.grid', {
//   // options
// });

function GalleryPhotos () {
    
  return (
    <div>
      <Layout>
          <Head>
              <title>Gallery</title>
              <link rel="icon" href="/faviconLogo.ico"/>
              <script src="/path/to/masonry.pkgd.min.js"></script>
          </Head>
          <Navb/>
            <h1>Gallery</h1>
            <div class="grid">
                <div class="grid-item">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.38.09 PM.png"
                        alt="1" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item grid-item--width2">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.38.42 PM.png"
                        alt="2" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.39.02 PM.png"
                        alt="3" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.39.21 PM.png"
                        alt="4" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item grid-item--width2">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.40.21 PM.png"
                        alt="5" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.40.40 PM.png"
                        alt="6" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.41.34 PM.png"
                        alt="7" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item grid-item--width2">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.42.00 PM.png"
                        alt="8" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.39.02 PM.png"
                        alt="xtreeme fitness logo" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.38.09 PM.png"
                        alt="xtreeme fitness logo" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item grid-item--width2">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.38.42 PM.png"
                        alt="xtreeme fitness logo" 
                        width={500}
                        height={500}
                    />
                </div>
                <div class="grid-item">
                    <Image
                        src="/images/xtreeme_fitness_insta_screenshots/Screen Shot 2021-01-07 at 9.39.02 PM.png"
                        alt="xtreeme fitness logo" 
                        width={500}
                        height={500}
                    />
                </div>
            </div>

            <h2>
                <Link href='/'>
                    <a>Back to Home</a>
                </Link>
            </h2>
        
        </Layout>

      <style jsx global>{`
        .grid-item { 
            width: 400px; 
        }
        .grid-item--width2 { 
            width: 800px; 
        }
      `}</style>
    <script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
    <script src="https://kit.fontawesome.com/21961517fb.js"></script>
  </div>  
  )
}

export default GalleryPhotos