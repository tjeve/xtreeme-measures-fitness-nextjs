import Head from 'next/head'
import Link from 'next/link'
import Navb from '../components/Nav.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/layout'
import Image from 'next/Image'
import GalleryPhotos from '../components/GalleryPhotos'

import Hero from '../components/hero.js'
import Subscribe from '../components/subscribe'

export default function bootCamp() {
    return (
       <GalleryPhotos/> 
    )
}