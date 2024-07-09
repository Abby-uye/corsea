import background from "../../assets/theFlow/div.elementor-background-overlay.png"
import blog1 from "../../assets/theFlow/Blog-list-img-1.jpg.png"
import blog2 from "../../assets/theFlow/Blog-list-img-2.jpg.png"
import blog3 from "../../assets/theFlow/Blog-list-img-3.jpg.png"
import signup from "../../assets/theFlow/signup.elementor-section.png"
import main2 from "../../assets/theFlow/main-home-image-3-1.jpg.png"
import main1 from "../../assets/theFlow/main-home-image-4-1.jpg.png"
import instagram1 from "../../assets/theFlow/instagram-img-2.jpg.png"
import instagram2 from "../../assets/theFlow/instagram-img-3.jpg.png"
import instagram3 from "../../assets/theFlow/instagram-img-4.jpg.png"
import instagram4 from "../../assets/theFlow/instagram-img-5.jpg.png"
import instagram5 from "../../assets/theFlow/instagram-img-6.jpg.png"
import instagram6 from "../../assets/theFlow/instagram-img-7.jpg.png"
import instagram7 from "../../assets/theFlow/instagram-img-1.jpg.png"
import icon1 from "../../assets/theFlow/icon1.png"
import icon2 from "../../assets/theFlow/ICON2.png"
import icon3 from "../../assets/theFlow/icon3.png"
import icon4 from "../../assets/theFlow/icon4.png"
import logo from "../../assets/corsen-main-logo-x2.png.png"
import arrow from "../../assets/theFlow/arrow.png"
import bottomLine from "../../assets/theFlow/pseudoLine.png"
import socialIcons from "../../assets/theFlow/social-icons-group.png"

import styles from "./index.module.css"
const TheFlow = ()=>{
    return(
        <div>
            <div>
                <img className={styles.background} src={background} alt={"background"}/>
            </div>
            <div>
                <p>Read Our Blog Post</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing ectetur elit,<br/> sed do eiusmod.</p>
            </div>
            <div className={styles.blog}>
            <div>
                <div>
                    <img className={styles.images} src={blog1}/>
                    <p>SEPTEMBER 29 2022</p>
                    <p>Top 10 Winter Essentials For 2022 You Should <br/>Try</p>
                    <p>READ MORE</p>
                </div>
            </div>
            <div>
                <div>
                    <img className={styles.images} src={blog2}/>
                    <p>SEPTEMBER 29 2022</p>
                    <p>Top Complete Communication Skills Master <br/>Class For Work <br/>Try</p>
                    <p>READ MORE</p>
                </div>
            </div>
            <div>
                <div>
                    <img className={styles.images} src={blog3}/>
                    <p>SEPTEMBER 29 2022</p>
                    <p>Premium Consultant Course <br/>Try</p>
                    <p>READ MORE</p>
                </div>
            </div>
            </div>
            <div>
                <img className={styles.signup} src={signup} alt={"signup"}/>
            </div>
            <div className={styles.artist}>
                <img className={styles.main} src={main1} alt={"main 1"}/>
                <img className={styles.main} src={main2} alt={"main 2"}/>
                <div>
                    <p className={styles.meet}>Meet The Artist <br/>Behind The Corsen<br/>Maria & Sophia</p>
                    <p>Lorem ipsum dolor sit amet, consectetur elit, <br/>
                        sed do eiusmod tempor incididunt ut labore et <br/>
                        dolore magna.</p>
                    <p>SHOP COLLECTION</p>
                </div>
            </div>
            <p>Instagram</p>
            <p>Follow us on @qodeinteractive</p>
            <div className={styles.instagram}>
                <img src={instagram1} alt={"instagram image"}/>
                <img src={instagram2} alt={"instagram image"}/>
                <img src={instagram3} alt={"instagram image"}/>
                <img src={instagram4} alt={"instagram image"}/>
                <img src={instagram5} alt={"instagram image"}/>
                <img src={instagram6} alt={"instagram image"}/>
                <img src={instagram7} alt={"instagram image"}/>

            </div>
            <div className={styles.icons}>
                <div>
                    <img src={icon1} alt={"icon1"}/>
                    <p>FAST DELIVERY</p>
                </div>
                <div>
                    <img src={icon2} alt={"icon1"}/>
                    <p>FREE RETURNS</p>
                </div>
                <div>
                    <img src={icon3} alt={"icon1"}/>
                    <p>SECURE CHECKOUT</p>
                </div>
                <div>
                    <img src={icon4} alt={"icon1"}/>
                    <p>ORDER TRACKING</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={logo} alt={"logo"}/>
                    <p>Sed ut perspiciatis unde omnis iste natus<br/>
                        error sit voluptatem accusantium</p>
                </div>
                <div>
                    <p>SUPPORT</p>
                    <p>Help & Contact Us</p>
                    <p>Return & Refund</p>
                    <p>Online Stores</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p>COMPANY</p>
                    <p>Gift Offers</p>
                    <p>Return & Refund</p>
                    <p>Latest Post</p>
                    <p>F.A.Q</p>
                </div>
                <div>
                    <p>LOCATIONS</p>
                    <p>Vienna, Hansalgasse, Austria</p>
                    <p>Berlin, Buschallee, Germany</p>
                    <p>The Piazza, London, UK</p>
                </div>
                <div>
                    <p>Get The Latest News</p>
                    <d>
                    <p>E-mail address</p>
                        <img src={arrow} alt={"arrow"}/>
                    </d>
                    <img src={bottomLine} alt={"bottom line"}/>

                </div>
            </div>
            <div>
                <p>2023 <span>Qode Interactive</span>ALL RIGHTS RESERVED</p>
                <div>
                    <img src={socialIcons} alt={"social icons"}/>
                </div>
            </div>
        </div>
    )
}
export default TheFlow