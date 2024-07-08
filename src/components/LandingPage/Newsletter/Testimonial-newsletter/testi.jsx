import './card'
import './testi.css'

function App(){
    const data=[{
        id:1,
        Name:"",
        Review:"",
        Designation:"",
        img:`ISMEI PATH DALDE`
    },{}]
    return(
        <>
        <div className='testi-container'>
            <div className='card'>
                <div className='img'>

                </div>
                <div className='for-text'>
                    <div className='review'>

                    </div>

                    <div className='Name'>

                    </div>

                    <div className='Designation'>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default App