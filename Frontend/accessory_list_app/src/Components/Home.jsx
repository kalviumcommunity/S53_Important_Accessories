import CarouselComponent from "./Carousal";
const Home = ()=> {
    
    return(
        <>
        <div className='p-[7vh] bg-[#dad3c8]'>
            <h1 className='text-center text-[4vmax]'>Simple Things...  Big Impact</h1>
        </div>
        <div className='hero flex px-[3vw] py-[5vh] justify-evenly flex-wrap-reverse bg-[#dad3c8]'>
            <div className='text pt-[3vh] sm:pt-0'>
                <h2 className='text-[2.7vmax]'>Accessories that matter...</h2>
                <h3 className='text-[2.2vmax]'>That make your life easier!</h3>
                <h4 className='text-[1.9vmax]'>That makes you productive.</h4>
            </div>
            <div className='caraousal'>
                <CarouselComponent/>
            </div>
        </div>
        
        </>
    )
}

export default Home;