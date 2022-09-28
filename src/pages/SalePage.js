import { useParams } from "react-router-dom";
import Header from "../components/Header";
import SearchHeader from "../components/SearchHeader";

function SalePage() {
    const { id } = useParams();

    return (
        <>
            <Header idParam={id} />
            <SearchHeader idParam={id} />
            <div>SalePage</div>
        </>
    )
}

export default SalePage;