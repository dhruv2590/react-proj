import "./styles.css"
import styles from "./css_style.module.css"
import reactImg from "../../assets/react.svg"
function Header(){
    const navItem=["Home","Quote","Restaurent","Food","Contact"];

    return(
        <div style={{ backgroundColor: "#111827",color:"#fff",padding: "20px 40px"}}>
            <nav className="navBarItem">
                <section className={styles.sectionContainer}>
                    <img src={reactImg} alt="logo"></img>
                    <h2>GeekFoods</h2>
                </section>
                <section>
                    <ul>
                    {navItem.map((item, index) => (
                    <li key={index}>{item}</li>
                     ))}
                    </ul>
                </section>
                <section>
                <button>Get Started</button>
                </section>
            </nav>
        </div>
    )
}
export default Header