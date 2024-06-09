import Img3 from '../images/sign.png'
const Blogs = () => {
    return(
      <div style={{display:'flex'}}>
        <div className='mainimg' style={{border:'1px solid black',marginTop:-1550,marginLeft:160,height:1000}}>
            <img style={{width:400,height:430,paddingTop:500}}src={Img3} alt='Img3'/>
            <div style={{marginLeft:70,marginTop:-900,color:'white',fontSize:30}}>
                <b >Welcome to the Sign Up page!</b>
                <br>
                </br>
                <br></br>
                <p style={{width:350}}>To achieve your goals, set specific targets, create a plan with actionable steps, and stay committed through perseverance and adaptability. Consistent effort and a positive mindset will propel you towards success.</p>
            </div>
        </div>
        <div className='backcolor' style={{marginTop:-1450,border:'1px solid black',width:399,height:902}}>
          <div>
              <input className="user" type='text' placeholder='Enter your Name'style={{marginLeft:10,marginTop:50}} />
          </div>
        <div style={{display:'flex'}}>
            <div>
                <input className="user" type='text' placeholder='Enter Your Email 'style={{marginLeft:10,marginTop:30}} />
            </div>
            <div>
              <button style={{marginTop:35,width:100,height:30,borderRadius:5,background:'darkblue',color:'white',border:'none'}}>Send OTP</button>
            </div>
        </div>
        <div>
            <input className="user" type='text' placeholder='Enter your Email OTP'style={{marginLeft:10,marginTop:30}} />
        </div>
        <div style={{display:'flex'}}>
            <div>
                <input className="user" type='text' placeholder='Enter Your Mobile Number 'style={{marginLeft:10,marginTop:30}} />
            </div>
            <div>
              <button style={{marginTop:35,width:100,height:30,borderRadius:5,background:'darkblue',color:'white',border:'none'}}>Send OTP</button>
            </div>
        </div>
        <div>
            <input className="user" type='text' placeholder='Enter your Mobile OTP'style={{marginLeft:10,marginTop:30}} />
        </div>
        <div>
            <input className="user" type='text' placeholder='Choose your Qualification'style={{marginLeft:10,marginTop:30}} />
        </div>
        <div>
            <input className="user" type='text' placeholder='Create Your Password'style={{marginLeft:10,marginTop:30}} />
        </div>
        <div>
            <input className="user" type='text' placeholder='Confirm Your Password 'style={{marginLeft:10,marginTop:30}} />
        </div>
        <div>
            <input type='checkbox' style={{marginLeft:10,marginTop:30}} />
            <p style={{color:'white',paddingLeft:35,marginTop:-20}}>I Agree To The User Agreement And Privacy Policy</p>
        </div>
        <div>
            <button style={{ width:300,height:40,marginLeft:30,marginTop:50,backgroundColor:'#51c2a9',border:'none',borderRadius:10}}>Sign Up</button>
        </div>
        <hr style={{width:100,marginTop:50,marginLeft:60}}></hr>
        <div style={{paddingLeft:170,marginTop:-25}}>
            <p style={{color:'white'}}>or</p>
        </div>
        <hr style={{width:100,marginTop:-26,marginLeft:200}}></hr>
        <button className='button' style={{color:'white',marginLeft:50,width:260,height:40,borderRadius:5,marginTop:30}}><p>Login with Google</p></button>
    </div>

      </div>
    )
  };
  
  export default Blogs;