import HeaderHome from "../components/HeaderHome";
import NewInvoice from "../components/NewInvoice";
import {useSelector} from "react-redux";

const Home = () => {

    return (
        <>
            <HeaderHome/>
            <NewInvoice/>
        </>

    )
}

export default Home