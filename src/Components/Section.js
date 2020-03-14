import React, {useState, useEffect} from 'react';

import * as Vibrant from 'node-vibrant';


function Section(props) {

    const [style, setStyle] = useState();

    const h2Style = {
        padding: "50px 0px 0px 50px",
        // width: 'auto',
        // background: '#0005'
    }

    const pStyle = {
        padding: "0px 0px 0px 100px",
        // background: '#0005'
    }

    // const percent = 'FF';
    const percent = 'AA';

    useEffect(() => {
        if (props.background !== undefined) {
            let v = new Vibrant(props.background)
            v.getPalette().then(palette => {
                console.log(palette)
                setStyle({
                    width: "100%",
                    height: "600px",
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    backgroundSize: "cover",
                    color: palette.LightVibrant.hex,
                    backgroundImage: `linear-gradient(${palette.DarkMuted.hex}${percent} 0%, ${palette.DarkMuted.hex}${percent} 100%), url(${props.background})`
                    // backgroundImage: `linear-gradient(${palette.DarkMuted.hex}${percent} 0%, 
                    //                                   ${palette.DarkMuted.hex}${percent} 15%, 
                    //                                   ${palette.Muted.hex}${percent} 15%, 
                    //                                   ${palette.Muted.hex}${percent} 30%, 
                    //                                   ${palette.LightMuted.hex}${percent} 30%, 
                    //                                   ${palette.LightMuted.hex}${percent} 45%, 
                    //                                   ${palette.DarkVibrant.hex}${percent} 45%, 
                    //                                   ${palette.DarkVibrant.hex}${percent} 60%, 
                    //                                   ${palette.Vibrant.hex}${percent} 60%, 
                    //                                   ${palette.Vibrant.hex}${percent} 85%, 
                    //                                   ${palette.LightVibrant.hex}${percent} 85%,
                    //                                   ${palette.LightVibrant.hex}${percent} 100%
                    //                                   ), url(${props.background})`
                });
            });
        }
    }, []);

    const links = props.links === undefined ? null : props.links.map(({name, address}) => <h3 style={pStyle}><a href={address}>{name}</a></h3>);

    return (
        <>
            {style === undefined ? <p>Loading...</p> :
            <div className='section' style={style}>
                <h1 style={h2Style}>{props.header}</h1>
                <h3 style={pStyle}>{props.body}</h3>
                {links}
            </div>
            }
        </>
    );
}

export default Section;