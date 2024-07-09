
import styles from "./index.module.css"
import product1 from "../../assets/products/Main-product-list-1.jpg.png"
import product2 from "../../assets/products/Main-product-list-2.jpg.png"
import product3 from "../../assets/products/Main-product-list-3.jpg.png"
import product4 from "../../assets/products/Main-product-list-4.jpg.png"
import product5 from "../../assets/products/product-new-img-1.jpg.png"
import product6 from "../../assets/products/Main-product-list-6.jpg.png"
import product7 from "../../assets/products/Main-product-list-7.jpg.png"
import product8 from "../../assets/products/Main-product-list-8.jpg.png"
import pseudo from "../../assets/products/pseudo wrapper.png"
import man from "../../assets/products/main-home-category-img-4.jpg.png"
import woman from "../../assets/products/main-home-category-img-5.jpg.png"
import pseudo11 from "../../assets/pseudo11.png"
import pseudo22 from "../../assets/pseudo22.png"
import pseudo33 from "../../assets/pseudo33.png"
import pseudo44 from "../../assets/pseudo44.png"
import logo1 from "../../assets/video-clients-image-6.png.png"
import logo2 from "../../assets/Video-clients-img-1.png.png"
import logo3 from "../../assets/Video-clients-img-2.png.png"
import logo4 from "../../assets/Video-clients-img-3.png.png"
import logo5 from "../../assets/Video-clients-img-5.png.png"
import times from "../../assets/times.png"
import bars from "../../assets/bars.png"
import quick from "../../assets/products/quick-view.svg.png"
import theVector from "../../assets/products/theVector.png"



const Display =()=>{
    return(
        <div className={styles.display}>
            <p style={{textAlign: "center", marginTop: "70px", marginBottom: "70px"}}>Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod <br/>
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/>
                veniam, quis nostrud.</p>
            <div style={{display: "flex", gap: "20px"}}>
                <img style={{width: "49px"}} src={pseudo11} alt={"pseudo"}/>
                <img style={{width: "35px", height: "8px"}} src={pseudo22} alt={"pseudo"}/>
                <img style={{width: "30px", height: "8px"}} src={pseudo33} alt={"pseudo"}/>
                <img style={{width: "40px", height: "8px"}} src={pseudo44} alt={"pseudo"}/>

            </div>
            <div className={styles.outerDisplay}>
                <div>
                    <div>
                        <div className={styles.product}>
                            <img className={styles.productImage} src={product1}/>
                        </div>
                        <p className={styles.new}>NEW</p>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p>BLACK JACKET <span style={{display: "block"}}>$350.00</span></p>
                            <img style={{height: "20px", marginTop: "15px", marginLeft: "10px"}} src={pseudo}
                                 alt={"pseudo"}/>
                        </div>
                        <div className={styles.eyes1}>
                            <div>
                                <img src={quick} alt={"quick"}/>
                            </div>
                            <div>
                                <img src={theVector} alt={"vector"}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.product}>
                            <img className={styles.productImage} src={product2}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "row", gap: "120px"}}>
                            <p style={{borderRight: "1px solid black", height: "20px"}}>LEATHER JACKET <span
                                style={{display: "block"}}>$300.00</span></p>
                            <img style={{height: "20px", marginTop: "15px", marginLeft: "10px"}} src={pseudo}
                                 alt={"pseudo"}/>
                        </div>
                    </div>
                    <div className={styles.eyes1}>
                        <div>
                            <img src={quick} alt={"quick"}/>
                        </div>
                        <div>
                            <img src={theVector} alt={"vector"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.product}>
                            <img className={styles.productImage} src={product3}/>
                        </div>
                        <p className={styles.sale}>SALE</p>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p>BLACK OUTFIT <span style={{display: "block"}}>$220.00 $180.00</span></p>
                            <img style={{height: "20px", marginTop: "15px", marginLeft: "10px"}} src={pseudo}
                                 alt={"pseudo"}/>
                        </div>
                    </div>
                    <div className={styles.eyes1}>
                        <div>
                            <img src={quick} alt={"quick"}/>
                        </div>
                        <div>
                            <img src={theVector} alt={"vector"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.product}>
                            <img className={styles.productImage} src={product4}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p>T-SHIRT <span style={{display: "block"}}>$120.00</span></p>
                            <img style={{height: "20px", marginTop: "15px", marginLeft: "10px"}} src={pseudo}
                                 alt={"pseudo"}/>
                        </div>
                    </div>
                    <div className={styles.eyes1}>
                        <div>
                            <img src={quick} alt={"quick"}/>
                        </div>
                        <div>
                            <img src={theVector} alt={"vector"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.outerDisplay}>

                <div>
                    <div>
                        <div className={styles.product}>
                            <img className={styles.productImage} src={product5}/>
                        </div>

                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p>BLACK VEST <span style={{display: "block"}}>$85.00</span></p>
                            <img style={{height: "20px", marginTop: "15px", marginLeft: "10px"}} src={pseudo}
                                 alt={"pseudo"}/>
                        </div>
                    </div>
                    <div className={styles.eyes2}>
                        <div>
                            <img src={quick} alt={"quick"}/>
                        </div>
                        <div>
                            <img src={theVector} alt={"vector"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.product}>
                            <img className={styles.productImage} src={product6}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p>OTK BOOTS <span style={{display: "block"}}>$270.00</span></p>
                            <img style={{height: "20px", marginTop: "15px", marginLeft: "10px"}} src={pseudo}
                                 alt={"pseudo"}/>
                        </div>
                    </div>
                    <div className={styles.eyes2}>
                        <div>
                            <img src={quick} alt={"quick"}/>
                        </div>
                        <div>
                            <img src={theVector} alt={"vector"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.product}>
                            <img className={styles.productImage} src={product7}/>
                        </div>
                        <p className={styles.sold}>SOLD</p>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p>BIEGE T-SHIRT <span style={{display: "block"}}>$60.00</span></p>
                            <img style={{height: "20px", marginTop: "15px", marginLeft: "10px"}} src={pseudo}
                                 alt={"pseudo"}/>
                        </div>
                    </div>
                    <div className={styles.eyes2}>
                        <div>
                            <img src={quick} alt={"quick"}/>
                        </div>
                        <div>
                            <img src={theVector} alt={"vector"}/>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.product}>
                            <img className={styles.productImage} src={product8}/>
                        </div>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <p>BLACK HAT <span style={{display: "block"}}>$45.00</span></p>
                            <img style={{height: "20px", marginTop: "15px", marginLeft: "10px"}} src={pseudo}
                                 alt={"pseudo"}/>
                        </div>
                    </div>
                    <div className={styles.eyes2}>
                        <div>
                            <img src={quick} alt={"quick"}/>
                        </div>
                        <div>
                            <img src={theVector} alt={"vector"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <img className={styles.man} src={man} alt={"man"}/>
                    <div className={styles.mann}>
                        <p>MAN</p>
                        <p style={{
                            border: "1px solid black",
                            fontSize: "10px",
                            paddingRight: "10px",
                            paddingLeft: "10px"
                        }}>SHOP COLLECTION</p>
                    </div>

                </div>
                <div>
                    <img className={styles.man} src={woman} alt={"woman"}/>
                    <div className={styles.woman}>
                        <p>WOMAN</p>
                        <p style={{
                            border: "1px solid black",
                            fontSize: "10px",
                            paddingRight: "10px",
                            paddingLeft: "10px"
                        }}>SHOP COLLECTION</p>
                    </div>
                </div>
            </div>
            <div>
                <img className={styles.bars} src={bars} alt={"bars"}/>
                <p style={{textAlign: 'center'}}>Accusantium doloremque laudantium, totam rem aperiam. Sed ut <br/>
                    perspiciatis unde omnis iste natus error sit voluptatem.</p>
            </div>
            <img style={{width: "10px", height: "10px", marginLeft: "600px", marginBottom: "20px"}} src={times}
                 alt={"times"}/>
            <div className={styles.logos}>
                <img className={styles.logo} src={logo3} alt={"logo"}/>
                <img className={styles.logo} src={logo5} alt={"logo"}/>
                <img className={styles.logo} src={logo2} alt={"logo"}/>

                <img className={styles.logo} src={logo1} alt={"logo"}/>
                <img className={styles.logo} src={logo4} alt={"logo"}/>

            </div>
        </div>
    )

}
export default Display