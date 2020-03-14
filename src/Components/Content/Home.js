import React from 'react';

import Section from '../Section';
import Title from '../Title';

import image from  './images/screen.jpeg';
import image1 from './images/quartz.jpeg';
import image2 from './images/embMach.jpeg';

function Home() {

    return (
        <>
            <Title>Screen Printing | Embroidery | Sublimation</Title>
            <Section background={image} header='Custom Tees' body='Section body'></Section>
            <Section background={image1} header='Sweatshirts/Fleece' body='Section body'></Section>
            <Section background={image2} header='Custom Polos/Knits' body='Section body'></Section>
            <Section background={image} header='Workwear' body='Section body'></Section>
            <Section background={image} header='Activewear' body='Section body'></Section>
            <Section background={image} header='Our Vendors' body='' links={[
                {'name':'Sanmar.com', 'address':'www.Sanmar.com'},
                {'name':'Ssactivewear.com', 'address':'www.Ssactivewear.com'},
                {'name':'Slcactivewear.com', 'address':'www.Slcactivewear.com'}]}>
            </Section>
        </>
    )
}

export default Home;

/*
<a href='Sanmar.com'>Sanmar</a>
<a href='Ssactivewear.com'>Ssactivewear</a>
<a href='Slcactivewear.com'>Slcactivewear</a>
*/