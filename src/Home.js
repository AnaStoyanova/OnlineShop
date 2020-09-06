import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img
                className="home_banner"
                src="https://assets.netohq.com/cms/blog/headers/4th-September-Online-Shopping-Event-blog-header.jpg"
                alt=""
            />
            <div className="home_products_row">
                <Product
                    title="Table"
                    price={149.99}
                    id="12345"
                    rating={3}
                    image="https://www.boconcept.com/on/demandware.static/-/Sites-master-catalog/default/dw9fc54f37/images/530000/533591.jpg"
                />
                <Product
                    title="Chair"
                    price={35.34}
                    id="123456"
                    rating={5}
                    image="https://www.ikea.com/gb/en/images/products/nordviken-chair-black__0714202_PE729964_S5.JPG"
                />
            </div>
            <div className="home_products_row">
                <Product
                    title="Sofa"
                    price={255.49}
                    id="17"
                    rating={4}
                    image="https://www.barkerandstonehouse.co.uk/images/swatchzoom/C0NZLSOFTURM_1_Zoom.jpg"
                />
                <Product
                    title="Carpet"
                    price={99.99}
                    id="123457"
                    rating={3}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSeKISC-8pMKzcOFrC4HWjQ8R5dLu9fb-SBTA&usqp=CAU"
                />
                <Product
                    title="Desk"
                    price={79.99}
                    id="12345"
                    rating={2}
                    image="https://cdn.shopify.com/s/files/1/0036/4806/1509/products/m100003515_85c06769-12b3-4f75-bbac-06450d823356.jpg?v=1595012484"
                />
            </div>
            <div className="home_products_row">
                <Product
                    title="TV"
                    price={999.99}
                    id="12345"
                    rating={5}
                    image="https://images.samsung.com/is/image/samsung/levant-fhd-t5300-ua43t5300auxtw-frontblack-229857917?$PD_GALLERY_L_JPG$"
                />
            </div>

        </div>
    )
}

export default Home
