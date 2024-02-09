import { Link } from "react-router-dom";

const CardsContainer = () => {
    return (
        <>
            <div className="join p-[2vh] flex justify-center ">
                <Link to={'/items'}>
                <input className="join-item btn w-[20vw] focus:bg-blue-500" type="radio" name="options" aria-label="See Items" />
                </Link>

                <Link to={'/items-form'}>
                <input className="join-item btn w-[20vw] focus:bg-blue-500" type="radio" name="options" aria-label="Add Your Item" />
                </Link>
            </div>
        </>
    )
}

export default CardsContainer;