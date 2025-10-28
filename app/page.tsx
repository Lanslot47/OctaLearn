import Footer from "./component/foooter"
import Navbar from "./component/Navbar";
import Hero from "./component/Hero"
import Num from "./component/Num"
import Section from "./component/Section"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Section />
            <Num />
            <Footer />
        </div>
    )
}
export default Home