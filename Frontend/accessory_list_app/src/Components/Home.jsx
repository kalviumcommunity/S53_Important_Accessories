import { Button } from 'flowbite-react';
import { Carousel } from 'flowbite-react';
const Home = ()=> {
    
    return(
        <>
        <div className="nav-container">
            <div className="flex justify-around items-center w-full md:w-6/12 mx-auto py-[2vh]">
                <p>Home</p>
                <p>List</p>
                <p>About</p>
                <Button outline gradientDuoTone="redToYellow">Sign In</Button>
            </div>
        </div>
        <div className='p-[7vh]'>
            <h1 className='text-center text-[4vmax]'>Simple Things...Big Impact</h1>
        </div>
        <div className='hero flex px-[3vw] py-[6vh]'>
            <div className='text'>
                <h2 className='text-[2.5vmax]'>Accessories that matter...</h2>
                <h3 className='text-[2vmax]'>That make your life easier!</h3>
                <h4 className='text-[1.7vmax]'>That makes you productive.</h4>
            </div>
            <div className='caraousal'>

            </div>
        </div>
        
        </>
    )
}

export default Home;