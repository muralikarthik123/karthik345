import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
    <div style={{backgroundColor:'#152D43',width:1280,height:1600}}>
        <div style={{paddingTop:50,paddingLeft:650}}>
            <div style={{border:'1px solid black',width:400,height:100,backgroundColor:'#3572A9',border:'none'}}>
                <br></br>
                <Link style={{marginLeft:70,fontSize:30,color:'white',textDecoration:'none'}}to="/">Login</Link>
                <Link style={{marginLeft:100,fontSize:30,color:'white',textDecoration:'none'}} to="/blogs">Sign Up</Link>
            </div>
        </div>
    </div>
    <Outlet />
    </>
  )
};

export default Layout;