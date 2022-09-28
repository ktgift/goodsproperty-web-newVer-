import Header from "../components/Header";
import { useParams } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";

function TotalPostPage() {
    const { id } = useParams();
    // console.log(id)

    return (
        <>
            <Header idParam={id} />
            <SearchHeader idParam={id} />


            
        </>
    )
}

export default TotalPostPage;