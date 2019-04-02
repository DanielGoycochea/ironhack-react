import React, {Component} from 'react'
import AuthService from './auth-service'
import {Link, Redirect} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap';
import swal from 'sweetalert';

class Signup extends Component {
    constructor(props){
        super(props)
            this.state = {
                username: "",
                password: "",
                nombre:"",
                apellido:"",
                isLoggedin: false
               
            }
            this.service = new AuthService()
        }

    handleFormSubmit =(event) =>{
        event.preventDefault()

        const username = this.state.username
        const password = this.state.password
        const nombre = this.state.nombre
        const apellido = this.state.apellido
        

        this.service.signup(username, password, nombre, apellido)
        .then( response =>{
            this.setState({
                username: "",
                password: "",
                nombre:"",
                apellido:"",
                isLoggedin: true
               
            })
            this.props.getUser(response)
            swal("registro", "Correctamente", "success");
            
        })
        .catch(error => console.log(error))
        swal("Error", "verifique sus datos", "error");
    }

    handleChange = (event) =>{
        const { name, value}= event.target
        this.setState({[name]: value})
    }


    
        render(){
            let componente;
            if(this.state.isLoggedin)
                componente=<Redirect to="/perfil"/>
                else
                componente = ""
            return(
                <div className=" container">
                {componente} 
                    <Form onSubmit={this.handleFormSubmit}>
                        <Form.Group controlId="nombre">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name='nombre' value={this.state.nombre}type="text" placeholder="Ingresa Correo electronico" onChange={e=> this.handleChange(e)}/>
                        </Form.Group>
                        <Form.Group controlId="apellido">
                            <Form.Label>Apellido</Form.Label>
                            <Form.Control name='apellido' value={this.state.apellido}type="text" placeholder="Ingresa Correo electronico" onChange={e=> this.handleChange(e)}/>
                        </Form.Group>


                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control name='username' value={this.state.username}type="text" placeholder="Ingresa Correo electronico" onChange={e=> this.handleChange(e)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name='password' value={this.state.password}type="password" placeholder="Ingresa Contraseña" onChange={e=>this.handleChange(e)}/>
                        </Form.Group>
                      
                      
                        <Button variant="primary" type="submit" value="Signup">
                            Submit
                        </Button>
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.<Link to={"/"}> Login</Link>
                        </Form.Text>
                    </Form>

                </div>
            )
        }
}

export default Signup
