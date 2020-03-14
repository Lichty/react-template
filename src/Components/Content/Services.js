import React, {useState, useEffect} from 'react';

import Section from '../Section';
import Title from '../Title';

function Services() {

    const h1Style = {
        padding: "75px",
        textAlign: "center"
    }

    return (
        <>
            <Title>Services</Title>
            <Section background={'https://w.wallhaven.cc/full/73/wallhaven-73mq19.jpg'} header='Screen Printing' body='Custom printed apparel. Producing high quality prints ranging from a simple one color short-runs to high volume, complex multi-color prints.'></Section>
            <Section background={'https://w.wallhaven.cc/full/96/wallhaven-96e36d.jpg'} header='Embroidery' body='We embroider all kinds of apparel including hats, polos, jackets and much more. We embroider patches, leather patches, woven labels and other customization options.'></Section>
            <Section background={'https://w.wallhaven.cc/full/lm/wallhaven-lmrx3l.jpg'} header='Stickers' body='Screen print stickers are cost effect and a great promotional Item. Everyone loves them and they’re easy to distribute. They can come simple single-color square stickers to die cut multi-colored stickers.'></Section>
        </>
    )
}

export default Services;