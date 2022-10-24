import React from 'react'
import pict1 from './images/menu.png';
import pict2 from './images/resturant.png';
import pict3 from './images/pic1.png';
import pict4 from './images/pic2.png';
import pict5 from './images/pic3.png';
import pict6 from './images/pic4.png';
import pict7 from './images/pic5.png';
import pict8 from './images/pic6.png';
import dish1 from './images/dish1.jpeg';
import dish2 from './images/dish2.jpeg';
import dish3 from './images/dish3.jpeg';
import './Resturant.css';

function Resturant() {
    return (
        <div>
            <section className="container-fluid px-0 home">
                <div className="row mx-0 px-0">
                    <div className="col-12 px-0">
                        <nav className="navbar navbar-expand-lg fixed-top ">
                            <div className="container-fluid justify-content-center ">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="pic">
                                        <img src={pict1} alt="" />
                                    </span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <a className="nav-link text-white fs-5 px-2" href="#">Home</a>
                                        <a className="nav-link text-white fs-5 px-2" href="#">About US</a>
                                        <a className="nav-link text-white fs-5 px-2" href="#">Service</a>
                                        <a className="nav-link text-white fs-5 px-2" href="#">Contact Us</a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div className="container home-2 ">
                    <div className="home2 text-center">
                        <img className="pic-2 py-5 " src={pict2} alt="" />
                        <h1 className=" text-white ">One Step to Making a Good Start</h1>
                        <p className=" text-white py-2 m-auto">
                            Mauris fermentum tortor non enim aliquet condimentum. Nam aliquam pretium feugiat. Duis
                            sem est, viverra eu interdum ac, suscipit nec mauris. Suspendisse commodo tempor sagittis! In
                            justo est, sollicitudin eu scelerisque pretium, placerat eget elit.
                        </p>
                        <i className="fa-solid fa-caret-down text-white  "></i>


                    </div>
                </div>
            </section>
            {/* <!----------------------- Menu Section ----------------------------------> */}
            <section className="menu">
                <div className="container py-5">

                    <div className="row pb-5">
                        <div className="col-12 text-center pt-5 pb-3  menu-1">
                            <h6 className="py-2">OUR MENU</h6>
                            <h1>Delicious From The Cheif</h1>
                        </div>

                        <div className="col-12 col-lg-6 px-4 py-0 text-center menu-2-a">

                            <div className="p-3">
                                <h6 className="mb-0">PEAR SALAD / $ 11</h6>
                                <p className="mt-4 mb-0">
                                    Reid’s Orchard Pears / Bitter Greens / Granola / Big Firefly / Farms Black and Blue / Pine
                                    Nut Vinaigrette
                                </p>
                            </div>
                            <div className="p-3">
                                <h6 className="mb-0">FARM GREENS / $9</h6>
                                <p className="mt-4 mb-0">
                                    Honey Vinaigrette / House Cheese Crouton / Fine Herb
                                </p>
                            </div>
                            <div className="p-3">
                                <h6 className="mb-0">RICOTTA GNUD / $18</h6>
                                <p className="mt-4 mb-0">
                                    Marinated Sardine / Red Currant / Chanterelles / Pine Nuts / Mantecato Vitello / Fennel /
                                    Olive / Pepitase
                                </p>
                            </div>

                        </div>

                        <div className="col-12 col-lg-6 px-4 py-0 text-center menu-2-b">
                            <div className="p-3">
                                <h6 className="mb-0">BRODETTO DI PESCE / $9</h6>
                                <p className="mt-4 mb-0">
                                    Adriatic Seafood Soup / Clams / Prawns / Livornese / Langoustine Scallop / Celery / Olive
                                </p>
                            </div>
                            <div className="p-3">
                                <h6 className="mb-0">GRILLED KALE / $9</h6>
                                <p className="mt-4 mb-0">
                                    Bitter Greens / House Cheese Crouton / Kamon Ibericoe
                                </p>
                            </div>
                            <div className="p-3">
                                <h6 className="mb-0">CANESTRELLI / $18</h6>
                                <p className="mt-4 mb-0">
                                    Reid Orchatd Pears / Bitter Greens / House Cheese Crouton / Marinated Sardine / Chanterelles
                                    /
                                    Clams
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-----------------------------ice cream section -----------------------------> */}
            <section className="container-fluid ice-cream ">
                <div className="row ice-creams align-items-center">
                    <div className="col-12 col-sm-8 offset-sm-4 col-md-7 offset-md-5 col-lg-7 offset-lg-5">
                        <div
                            className="row justify-content-center justify-content-lg-start align-items-center ps-sm-5 ps-lg-0 pe-0 ice-sec">

                            <div className="col-5 col-sm-5 col-lg-3 px-0 py-4 py-lg-5  ice">
                                <img src={pict3} alt="" />
                                <h6>TOP ICE-CREAM</h6>
                            </div>
                            <div className="col-5 col-sm-5 col-lg-3 px-0 py-4 py-lg-5  ice">
                                <img src={pict4} alt="" />
                                <h6>FRUIT SORBETS</h6>
                            </div>
                            <div className="col-5 col-sm-5 col-lg-3 px-0 py-4 py-lg-5  ice">
                                <img src={pict5} alt="" />
                                <h6>CHIP FLAVORS</h6>
                            </div>
                            <div className="col-5 col-sm-5 col-lg-3 px-0 py-4 py-lg-5  ice">
                                <img src={pict6} alt="" />
                                <h6>SUNDAES</h6>
                            </div>
                            <div className="col-5 col-sm-5 col-lg-3 px-0 py-4 py-lg-5  ice">
                                <img src={pict7} alt="" />
                                <h6>SMOOTHIES</h6>
                            </div>
                            <div className="col-5 col-sm-5 col-lg-3 px-0 py-4 py-lg-5  ice">
                                <img src={pict8} alt="" />
                                <h6>DRINKS & MORE</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* <!-------------------------------- detail section ---------------------------------> */}
            <section className="container py-sm-5 py-md-5 my-5">
                <div className="row">
                    <div className="col-12 col-md-4  detail-1"></div>

                    <div className="col-12 col-md-4 detail-4 align-items-center py-3 py-lg-5">

                        <h6>HISTORY</h6>
                        <h3>
                            Strange story of the emergence of healthy food
                        </h3>
                        <p>
                            Sample text. Click to select the text box. Click again or double click to start editing the text.
                        </p>
                        <a href="">READ MORE</a>
                    </div>

                    <div className="col-12 col-md-4 detail-2"></div>

                    <div className="col-12 col-md-4 detail-4  align-items-center py-3 py-lg-5">
                        <h6>COMMUNITY</h6>
                        <h3>
                            Healthy food in social networks, with us interesting
                        </h3>
                        <p>
                            Sample text. Click to select the text box. Click again or double click to start editing the text.
                        </p>
                        <a href="">READ MORE</a>
                    </div>
                    <div className="col-12 col-md-4 detail-3"></div>

                    <div className="col-12 col-md-4 detail-4 align-items-center py-3 py-lg-5">
                        <h6>PHILOSOPHY</h6>
                        <h3>
                            Only the best food, the best musicians the best guests
                        </h3>
                        <p>
                            Sample text. Click to select the text box. Click again or double click to start editing the text.
                        </p>
                        <a href="">READ MORE</a>
                    </div>
                </div>
            </section>
            {/* <!----------------------------------- merit ------------------------------------> */}
            <section className="merit py-5">
                <div className="container">

                    <div className="row  pb-5">
                        <div className=" col-12 col-md-6    merit-1-a ">
                            <h1>Health is the most precious</h1>
                            <p className="mb-0">While it is important to have naturally occurring sugars in your diet, many foods contain
                                harmful
                                added sugars that contain no nutritional value.</p>
                            <p>According to a study conducted by the University of Florida, the brain releases heroin-like
                                chemicals called endogenous opioids when an individual indulges on sweet, salty or fatty foods.
                            </p>
                            <a href="">READ MORE</a>
                        </div>
                        <div className="col-12 col-md-6 merit-1-b"></div>
                    </div>


                    <div className="row  pt-5">
                        <div className=" col-12 col-md-6 merit-2-a"></div>
                        <div className=" col-12 col-md-6 merit-2-b">
                            <h4>BAKERY</h4>
                            <h2>Reviews</h2>
                            <i className="fa-solid fa-quote-left"></i>
                            <p>
                                We bring the season’s best mix of organic produce and hand-crafted farm products conveniently to
                                your door by growing and partnering with local farms and artisans in your area.
                            </p>
                            <h6>– LOO HUDSON</h6>
                        </div>
                    </div>

                </div>
            </section>
            {/* 
      <!-- dishes --> */}
            <section className="container-fluid px-0 ">
                <div className="row px-0 mx-0">
                    <div className="col-12 col-sm-6 col-md-4 dish px-0">
                        <img src={dish1} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 dish px-0">
                        <img src={dish2} alt="" />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 dish px-0">
                        <img src={dish3} alt="" />
                    </div>
                </div>
                <div className="dish-sec-2">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-10 offset-md-1 px-md-5  py-5 dish-1-a ">
                                <h2 className="text-center px-2 px-md-0 ">
                                    We bring the season’s best mix of organic produce and hand-crafted farm products conveniently to
                                    your door by growing and partnering with local farms and artisans in your area.
                                </h2>
                                <div className="dish-2-a d-flex justify-content-center py-3">
                                    <i className="fa-brands fa-facebook-f m-2"></i>
                                    <i className="fa-brands fa-instagram m-2"></i>
                                    <i className="fa-brands fa-twitter m-2"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- address --> */}
            <div className="address">
                <section className="container-fluid">
                    <div className="row" >
                        <div className="col-12 col-sm-6 offset-sm-3 col-md-4 offset-md-4 text-center">
                            <div className="add-sec py-5">
                                <p className="text-center">
                                    Sample text. Click to select the text box. Click again or double click to start editing the text.
                                </p>
                                <div className="pt-3">
                                    <a href="">Website template</a> <span>created with</span> <a href="">Website builder software.</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    )
}

export default Resturant
