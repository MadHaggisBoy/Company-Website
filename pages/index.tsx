import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../app/components/nav';
import Hero from '../app/components/hero';
import Dropdown from '../app/components/dropdown';
import Recommend from '../app/components/recommend';
import Footer from '../app/components/footer';
import DarkVariantExample from '../app/components/card';



export default function Home() {
    return (

        <div style={{backgroundColor: 'white', fontFamily:'Verdana, Arial, Helvetica'}}>
            <Nav />
            <Hero />
            <div className='container' style={{marginBottom: '6rem'}}>
                <h2  style={{textAlign: 'left', color:'#6d6875', paddingBottom: '2rem'}}>Experience the<br/><span style={{color: '#1E90FF' }}>ultimate collaboration tool</span><br/></h2>
                <Dropdown  />
            </div>



            <div className='container' style={{marginBottom: '6rem'}}>
                <h2 style={{textAlign: 'left', color:'#6d6875', paddingBottom: '2rem'}}>Work, social, play... <br/><span style={{color: '#1E90FF' }}>universal opportunities!</span></h2>
                <Recommend />
            </div>


            <div className='container'>
                <div className ="row">
                    <div className='mb-5'>
                        <h2 style={{textAlign: 'left', color:'#6d6875', paddingBottom: '2rem'}}>The <span style={{color: '#1E90FF' }}> team </span><br/>behind the scene</h2>
                        <DarkVariantExample />
                    </div>
                </div>

            </div>
            <Footer />
            
           
        </div>
      

    );
  }
  