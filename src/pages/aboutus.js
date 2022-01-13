import React from 'react'

import leaf1 from '../images/leafs/leaf1.png'
import leaf2 from '../images/leafs/leaf2.png'
import leaf3 from '../images/leafs/sun.png'

import { Background } from '../components/Leafs/elements'

import ParallaxJSXWrapper from '../components/ParallaxJSXWrapper'

const Aboutus = () => {
    const Leaf = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf1} style={styles.leaf}></img>, 0.08);
    const Leaf2 = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf1} style={styles.leafb}></img>, 0.05);
    const Leaf3 = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf1} style={styles.leafc}></img>, 0.18);
    const Leaf4 = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf1} style={styles.leafd}></img>, 0.18);
    const Leaf5 = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf1} style={styles.leafe}></img>, 0.18);
    const Leaf6 = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf1} style={styles.leaff}></img>, 0.18);
    const Orb2 = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf2} style={styles.obj2}></img>, 0.15);
    const Orb2b = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf2} style={styles.obj2b}></img>, 0.15);
    const Orb2c = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf2} style={styles.obj2c}></img>, 0.15);
    const Orb3 = ParallaxJSXWrapper(<img alt="Reload this page." src={leaf3} style={styles.obj3}></img>, 0.03);
    const Orb3b = ParallaxJSXWrapper(<div style={styles.obj3b}>Qui som?</div>, 0.03);
    return (
        <>
        
            <Background width="100%" />
            <Leaf /> 
            <Leaf2 /> 
            <Leaf3 />
            <Leaf4 /> 
            <Leaf5 /> 
            <Leaf6 />
            <Orb2 /> 
            <Orb2b /> 
            <Orb2c /> 
            <Orb3 /> 
            <Orb3b />
        </>
    )
}
const styles = {
	leaf: {
		position: 'fixed',
        width: '200px',
		top: '70%',
		left: '50px',
		transform: 'translate(0, -50%) rotate(180deg)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    leafb: {
		position: 'fixed',
        width: '200px',
		top: '120%',
		left: '40%',
		transform: 'translate(0, -50%) rotate(75deg)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    leafc: {
		position: 'fixed',
        width: '200px',
		top: '200%',
		left: '70%',
		transform: 'translate(0, -50%) rotate(135deg)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    leafd: {
		position: 'fixed',
        width: '200px',
		top: '50%',
		left: '80%',
		transform: 'translate(0, -50%) rotate(185deg)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    leafe: {
		position: 'fixed',
        width: '200px',
		top: '70%',
		left: '70%',
		transform: 'translate(0, -50%) rotate(255deg)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    leaff: {
		position: 'fixed',
        width: '200px',
		top: '100%',
		left: '20%',
		transform: 'translate(0, -50%) rotate(305deg)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    obj2: {
		position: 'fixed',
        width: '200px',
		top: '150%',
		right: '0',
		transform: 'translate(0, -50%)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    obj2b: {
		position: 'fixed',
        width: '200px',
		top: '200%',
		left: '0',
		transform: 'translate(0, -50%) rotate(180deg)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    obj2c: {
		position: 'fixed',
        width: '200px',
		top: '350%',
		left: '0',
		transform: 'translate(0, -50%) rotate(180deg)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    obj3: {
		position: 'fixed',
        width: '200px',
		top: '90%',
		right: '50%',
		transform: 'translate(50%, -50%)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	},
    obj3b: {
		position: 'fixed',
        fontSize: '4em',
        fontWeight: 'bold',
        color: 'rgba(255,255,255,.7)',
		top: '110%',
		right: '50%',
		transform: 'translate(50%, -50%)',
        filter: 'drop-shadow( 0 0 5px rgba(0,0,0,.4))'
	}
}

export default Aboutus