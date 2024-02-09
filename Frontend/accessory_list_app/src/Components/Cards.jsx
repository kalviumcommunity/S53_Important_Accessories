const Cards = () => {
    return (
        <>
            <div className="card card-side bg-base-100 shadow-xl w-[70vw] m-[auto]">
                <figure><img src="https://m.media-amazon.com/images/W/MEDIAX_849526-T2/images/I/61YCWzjldDL._AC_UY218_.jpg" alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Laptops !!</h2>
                    <p>Portable computers that are light and powerful for productivity and entertainment on the go. Various OS, screen size, RAM, storage and graphics options are available</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;