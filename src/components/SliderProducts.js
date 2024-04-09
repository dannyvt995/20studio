"use client"
import '@/styles/slider-products.css'
import gsap from 'gsap'
import $ from 'jquery';
import React from 'react';
/* https://codepen.io/Em-An/pen/LyxZaR */
const SliderProducts = () => {

    const firstSlideRef = React.useRef(null)
    let i_of_slider = 999
    const sliderItem = 1

    React.useEffect(() => {
        if (firstSlideRef.current) {
            firstSlideRef.current.style.left = '0%';
        }
    }, [firstSlideRef]);

    function runSlider(what) {
        what.addClass("active").siblings("li, span").removeClass("active");
    }
    //slider gsap
    function gsapSlider(whose, left) {
        i_of_slider++;
        if (whose.hasClass("active")) {
            gsap.timeline({
                ease: "power2.in"
            }).fromTo(
                ".SLIDER_PRODUCTS ul li.active",
                sliderItem,
                { zIndex: i_of_slider, left: left },
                { left: 0 },
                "<"
            );
        }
    }
    function handleClickPrev() {
        var slide = $(".SLIDER_PRODUCTS ul li.active, .SLIDER_PRODUCTS ol li.active").is(
            ":first-of-type"
        )
            ? $(".SLIDER_PRODUCTS ul li:last, .SLIDER_PRODUCTS ol li:last")
            : $(".SLIDER_PRODUCTS ul li.active, .SLIDER_PRODUCTS ol li.active").prev("li");
        runSlider(slide);
        gsapSlider(slide, "100%");
    }
    function handleClickNext() {
        var slide = $(".SLIDER_PRODUCTS ul li.active, .SLIDER_PRODUCTS ol li.active").is(
            ":last-of-type"
        )
            ? $(".SLIDER_PRODUCTS ul li:first, .SLIDER_PRODUCTS ol li:first")
            : $(".SLIDER_PRODUCTS ul li.active, .SLIDER_PRODUCTS ol li.active").next("li");
        runSlider(slide);
        gsapSlider(slide, "-100%");
    }
    function handleClickIcon(e,targetId) {
        var start = $(".SLIDER_PRODUCTS ul li.active").index();
        var slide = $(".SLIDER_PRODUCTS ul li").eq($(e.target).index());
        console.log($(e.target).index())
        runSlider(slide);
        var end = $(".SLIDER_PRODUCTS ul li.active").index();
        if (start > end) {
            gsapSlider(slide, "100%");
        }
        if (start < end) {
            gsapSlider(slide, "-100%");
        }
    }
    return (


        <div className="SLIDER_PRODUCTS">

            <ul>
                <li className="active" ref={firstSlideRef}></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <ol>

                <li className="active" onClick={handleClickIcon}>1</li>
                <li onClick={handleClickIcon}>2</li>
                <li onClick={handleClickIcon}>3</li>
                <li onClick={handleClickIcon}>4</li>
                <li onClick={handleClickIcon}>5</li>

                <i className="fa playpause fa-pause-circle-o" title="pause"></i>
            </ol>

            <span className="controll active" onClick={handleClickPrev}></span>
            <span className="controll" onClick={handleClickNext}></span>
        </div>
    )
}

export default SliderProducts