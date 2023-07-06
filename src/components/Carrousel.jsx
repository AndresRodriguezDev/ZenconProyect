
import '../styles/carrousel.css'


export const SubtopicsCarrousel = () => {




  return (
     <section id='subtopics-section'>

            <div id="carouselControls" className="carousel slide subtopics" data-bs-ride="carousel" >
            <div className="carousel-inner" id='carousel-inner'>

                <div className="carousel-item active">
                    <div className="container first">
                         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/800px-Books_HD_%288314929977%29.jpg" className="d-block w-100" alt="..." />
                        <h1>Books</h1>
                        <p>Whether you are a writer, journalist or storyteller, prove the authorship of your works with Authentia.</p>
                    </div>
                
                </div>

                <div className="carousel-item " >

                    <div className="container second">
                        <img src="https://arc-anglerfish-arc2-prod-abccolor.s3.amazonaws.com/public/VSS4W4O6EBBJZHACXTIYFRNL6Q.jpg" className="d-block w-100" alt="..." />
                        <h1>Music</h1>
                        <p>Whether you are a writer, journalist or storyteller, prove the authorship of your works with Authentia.</p>
                        <button>Try it</button>
                    </div>
                </div>


            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
</div>


                
    </section>
  )
}
