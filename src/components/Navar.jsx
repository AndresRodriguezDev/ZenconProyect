
import './../styles/Navar.css'
import { Card1 } from './Card1'
import { Card2 } from './Card2'
import { Card3 } from './Card3'
import { Card4 } from './Card4'
import { SubtopicsCarrousel } from './Carrousel'

export const Navbar = () => {
  return (
    <>
    <div className="navbar">
       
        <figure className='navbar-img'>
            
        <nav>
            <div className="logo">
                Authentia
            </div>

            <div className="options">

                <div>About</div>
                <div>Services</div>
                <div>Login</div>
                <div className='sign-up'>Sign Up</div>
            </div>

        </nav>

            <img src="https://images.pexels.com/photos/3694516/pexels-photo-3694516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <figcaption>Header image</figcaption>

            <div className="content">

                <p>From Ideas to immutable proof: your creative legacy, safeguarded forever.</p>
                <button>Learn More</button>
            </div>
        </figure>
        
    </div>

        {/* info cards */}

    <div className="cards">

        <Card1 />
        <Card2 />
    </div>

        <h1 className='subtitle'>Introducing <a href="">Authentia</a></h1>

    <div className="cards2">
        <Card3 />
        <Card4/>
    </div>


    <SubtopicsCarrousel />
    </>

  )
}
