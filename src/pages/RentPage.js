import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchHeader from "../components/SearchHeader";

function RentPage() {
    const { id } = useParams();
    return (
        <>
         <Header idParam={id} />
         <SearchHeader idParam={id} />
        </>
    )
}

export default RentPage;