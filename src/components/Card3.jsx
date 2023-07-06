
import './../styles/cards.css'


export const Card3 = () => {
  return (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        height: '100%',
        backgroundImage: `linear-gradient(0deg, rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url("https://galeriamonicasaucedo.com/assets/uploads/publicaciones/Kandinski.Composicion_IV.jpg")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',

        width: '100%',
        fontfamily: 'Lucida Sans',
        borderRadius: '20px'
      }}>

        <h1 style={{color: 'white', fontSize:"2rem"}}>
        Protect your artistic works with an immutable and indelible certificate of authenticy
        </h1> 

    </div>
  )
}
