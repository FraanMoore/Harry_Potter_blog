import { useContext } from "react";
import { Context } from '../store/context';


const Login = () =>{
    const { actions } = useContext(Context);
    return(
    <div  className="container justify-content-center">
            <h2 style={{color:"white"}}>Login</h2>
            <form onSubmit={actions.handleUserLogin}
            style={{ width: "30%", color:"white" }}>
                
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Nombre de usuario</label>
                    <input 
                    type="text" 
                    name="username"
                    onChange={actions.handleChange}
                    className="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Constraseña</label>
                    <input 
                    type="password" 
                    name="password"
                    onChange={actions.handleChange}
                    className="form-control" 
                    id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-outline-warning text-white">Ingresar</button>
            </form>
</div>
    )
}
export default Login;