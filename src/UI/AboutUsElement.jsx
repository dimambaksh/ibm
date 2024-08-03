import "./ui.scss";

function AboutUsElement(){
    return(
        <div className="aboutus">
            <div className="aboutus__list">
                <div className="aboutus__list__item">
                    {/* <h1 className="about-us-heading">About Us</h1> */}
                    <p className="description">Welcome to <b>Plantazon</b>, where green meets serenity!</p>
                    <p className="content">
                        At Plantazon, we are passionate about bringing nature closer to you. Our mission is to provide a wide range of 
                        high-quality plants that not only enhance the beauty of your surroundings but also contribute to a healthier and 
                        more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every 
                        plant enthusiast.
                    </p>
                    {/* <p className="plant_logo_left"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}
                    <p className="content">
                        Our team of experts is dedicated to ensuring that each plant meets our strict standards of quality and care. 
                        Whether you're a seasoned gardener or just starting your green journey, we're here to support you every step of 
                        the way. Feel free to explore our collection, ask questions, and let us help you find the perfect plant for your 
                        home or office.
                    </p>
                    {/* <p className="plant_logo_right"><img src="https://p1.hiclipart.com/preview/922/979/640/green-leaf-logo-emoji-seedling-emoticon-sticker-plant-plant-stem-flower-png-clipart-thumbnail.jpg" height='50px' width='50px' alt="" /></p> */}

                    <p className="content">
                        Join us in our mission to create a greener, healthier world. Visit <b>Plantazon</b> today and experience the 
                        beauty of nature right at your doorstep.
                    </p>
                </div>
            </div>
        </div>
    )
}



export default AboutUsElement;