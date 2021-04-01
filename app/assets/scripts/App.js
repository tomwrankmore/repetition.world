import '../styles/styles.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function initCharacterTilt() {

    // when moving mouse over header run moveCharacters
    document.querySelector('main').addEventListener('mousemove', moveCharacters)

}

const header = document.querySelector('.repetition');

    const { chars } = new SplitText(header, {
        type: "lines,words,chars",
        charsClass: 'charChild',
      });

    chars.forEach((c,index) => {
        console.log('c: ', c, 'index: ', index)
    })

function moveCharacters(e) {
    const {offsetX, offsetY, target} = e;
    const {clientWidth, clientHeight} = target;

    // gets 0 0 in the middle of the screen & 0.5 on one edge, -0.5 on the other left right top bottom.
    const xPos = offsetX / clientWidth - 0.5;
    const yPos = offsetY / clientHeight - 0.5;

    const modifier = (index) => index * 1.4 + 0.5;

    console.log(Math.round(yPos * 10 * 10))

    // chars.forEach((character, index) => {
    //     gsap.to(character, {
    //         duration: 1.2,
    //         x: xPos * 10 * modifier(index),
    //         y: yPos * 10 * modifier(index),
    //         rotationY: xPos * 100,
    //         rotationX: yPos * 20 * modifier(index),
    //     })
    // })

    gsap.to('.charChild', {
        duration: 1.2,
        x: xPos * 10,
        y: yPos * 10,
        rotationY: xPos * 120,
        rotationX: yPos * 80
    })
    

   
    // console.log('xPos:', xPos)
    // console.log('yPos:', yPos)

}

function init() {
    initCharacterTilt()
}

window.addEventListener('load', function(){
    init();
});