import '../css/back.css'
import Img1 from '../images/usericon1.png'
import Img2 from '../images/password.png'
import Img3 from '../images/sign.png'
const Home = () => {
    return (
    <div style={{display:'flex',marginTop:-900}}>
        <div className='mainimg' style={{border:'1px solid black',marginTop:-650,marginLeft:248,height:550}}>
            <img style={{width:400,height:430,paddingTop:100}}src={Img3} alt='Img3'/>
            <div style={{marginLeft:30,marginTop:-480,color:'white',fontSize:25}}>
                <b>Welcome to the Login page!</b>
            </div>   
        </div>
    <div className='backcolor' style={{marginTop:-550,border:'1px solid black',width:400,height:450,border:'none'}}>
        <div style={{display:'flex'}}>
            <div>
                <img style={{width:50,height:50,paddingTop:40,paddingLeft:30}}src={Img1} alt='Img1'/>
            </div>
            <div>
                <input className="user" type='text' placeholder='User name'style={{marginLeft:10,marginTop:50}} />
            </div>
        </div>
        <div style={{display:'flex'}}>
            <div>
                <img style={{width:40,height:50,paddingTop:20,paddingLeft:40}}src={Img2} alt='Img2'/>
            </div>
            <div>
                <input className="user" type='text' placeholder='password'style={{marginLeft:10,marginTop:30}} />
            </div>
        </div>
        
        
        <br></br>
        <br></br>
        <input  style={{marginLeft:90,backgroundColor:'#098199'}}type='checkbox'/><span style={{color:'white'}}>Remember</span><span style={{color:'white',paddingLeft:40}}>Forgot Password?</span>
        <button className='button' style={{marginLeft:90,width:260,height:40,marginTop:40,borderRadius:5,color:'white'}}><b>Login</b></button>
        <hr style={{width:150,marginTop:40,marginLeft:30}}></hr>
        <div style={{paddingLeft:200,marginTop:-27}}>
            <p style={{color:'white'}}>or</p>
        </div>
        <hr style={{width:150,marginTop:-25,marginLeft:230}}></hr>
        <button className='button' style={{color:'white',marginLeft:90,width:260,height:40,borderRadius:5,marginTop:10}}><p>Login with Google</p></button>
    </div>
    </div>
    )
  };
  
  export default Home;