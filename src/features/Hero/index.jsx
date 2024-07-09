import styles from "./index.module.css"
import heroImage from "../../assets/main-home-rev-5.jpg.png"
import logo from "../../assets/corsen-main-logo-x2.png.png"
import person from "../../assets/person.png"
import search from "../../assets/search.png"
import triangle from "../../assets/triangle.png"
import cart from "../../assets/cart-svg--cart.png"
import right from "../../assets/Frame.png"
import left from "../../assets/left.png"
import progressBar from "../../assets/rs-progress.png"
const Hero = ()=>{
    return(
        <div className={styles.hero}>
            <img src={heroImage} alt={"image"}/>
            <div className={styles.nav}>
                <div className={styles.firstDiv}>
                    <div style={{marginTop: "10px", marginRight: "50px"}}>
                        <img src={logo} alt={"logo"}/>
                    </div>
                    <p>Home</p>
                    <p>Pages</p>
                    <p>Shop</p>
                    <p>Portfolio</p>
                    <p>Blog</p>
                </div>
                <div className={styles.secondDiv}>
                    <div className={styles.innerDiv}>
                        <p className={styles.sP}>Search</p>
                        <div>
                            <img style={{width: "12px", height: "10px"}} src={search} alt={"search"}/>
                        </div>
                    </div>
                    <div className={styles.innerDiv}>
                        <p className={styles.sP}>Cart</p>
                        <div>
                            <img style={{width: "10px", height: "7px"}} src={cart} alt={"search"}/>
                        </div>
                    </div>
                    <div className={styles.innerDiv}>
                        <img style={{width: "10px", height: "7px"}} src={triangle} alt={"search"}/>
                        <span className={styles.sP}>0</span>
                    </div>
                    <div className={styles.innerDiv}>
                        <img style={{width: "10px", height: "7px"}} src={person} alt={"search"}/>
                        <span className={styles.sP}>0</span>
                    </div>
                </div>
            </div>
            {/*<div>*/}
            {/*    <img className={styles.left} src={left} alt={"left"}/>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <img  className={styles.right} src={right} alt={"right"}/>*/}
            {/*</div>*/}
            <div style={{position:"absolute",top:"400px",left: "100px"}}>
                <p style={{color:"black",fontFamily:"Nato",fontSize:"35px"}}>Mixed Textiles</p>
                <p style={{color:'black',fontFamily:"Nato",fontSize:"10px",marginTop:"-30px"}}>Lorem ipsum dulor sit amet consectetur<br/>aipsing edit sed du esmond</p>
                <p style={{fontFamily:"Nato",fontSize:"10px",border:"1px solid black",width:"100px",padding:"5px"}}>SHOP COLLECTION</p>
            </div>
            <div style={{position:"absolute",top:"600px",width:"70%",left:"40px"}}>
                <img style={{height:"1px"}} src={progressBar} alt={"progress bar"}/>
            </div>
        </div>
    )
}
export default Hero