import React, {Component} from 'react'
import axios from 'axios'
import {Form} from 'react-bootstrap'

class EditTrabajos extends Component{
    constructor(props){
        super(props)
        this.state ={
            puesto: this.props.theTrabajos.puesto,
            ubicacion: this.props.theTrabajos.ubicacion,
            horario: this.props.theTrabajos.horario,
            categoria: this.props.theTrabajos.categoria,
            descripcion: this.props.theTrabajos.descripcion,
            sueldo: this.props.theTrabajos.sueldo,
            detallesEmpresa: this.props.theTrabajos.detallesEmpresa,
            nomEmpresa: this.props.theTrabajos.nomEmpresa,
            sitio: this.props.theTrabajos.sitio 
            }
    }

   
    handleFormSubmit = (event) =>{
            const puesto =this.state.puesto 
            const ubicacion =this.state.ubicacion
            const horario =this.state.horario
            const categoria =this.state.categoria
            const descripcion =this.state.descripcion
            const sueldo =this.state.sueldo
            const detallesEmpresa =this.state.detallesEmpresa
            const nomEmpresa =this.state.nomEmpresa
            const sitio =this.state.sitio

            event.preventDefault()

            axios.put(`${process.env.REACT_APP_API_SERVER}${this.props.theTrabajos._id}`,{
                puesto,
                ubicacion,
                horario,
                categoria,
                descripcion,
                sueldo,
                detallesEmpresa,
                nomEmpresa,
                sitio
            }, {withCredentials:true})
            .then(()=>{
                this.props.getTheTrabajo();
                alert('cambio realizado')
                this.props.history.push('/trabajos')
            })
            .catch(error=>console.log(error))
    }
    handleChange = (event) =>{
        const {name, value} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return(
            
            <div className="container">
                        <Form onSubmit = {this.handleFormSubmit}>
                                <Form.Group controlId="puesto">
                                    <Form.Label>Puesto</Form.Label>
                                    <Form.Control type="text" name="puesto" value={this.state.puesto} onChange={e => this.handleChange(e)}placeholder="Indique el nombre del puesto" />
                                </Form.Group>
                                <Form.Group controlId="ubicacion">
                                    <Form.Label>Ubicacion</Form.Label>
                                    <Form.Control as="select" name="ubicacion" value={this.state.ubicacion} onChange={e => this.handleChange(e)}>
                                     <option>Seleccione una opción --</option>	
                                     <option>Coyoacán</option>	
                                     <option>Azcapotzalco</option>	
                                     <option>Cuajimalpa de Morelos</option>	
                                     <option>Gustavo A. Madero</option>
                                     <option>Iztacalco</option>	
                                     <option>Iztapalapa</option>
                                     <option>La Magdalena Contreras</option>	
                                     <option>Milpa Alta</option>	
                                     <option>Álvaro Obregón</option>	
                                     <option>Tláhuac</option>	
                                     <option>Tlalpan</option>	
                                     <option>Xochimilco</option>	
                                     <option>Benito Juárez</option>	
                                     <option>Cuauhtémoc</option>	
                                     <option>Miguel Hidalgo</option>	
                                     <option>Venustiano Carranza</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="horario">
                                    <Form.Label>Horario</Form.Label>
                                    <Form.Control as="select" name ="horario" value={this.state.horario} onChange ={e=> this.handleChange(e)}>
                                     <option>Seleccione una opción ...</option>	
                                     <option>Tiempo Completo</option>	
                                     <option>Medio Tiempo</option>	
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="categoria">
                                    <Form.Label>Categoria</Form.Label>
                                    <Form.Control as="select" name ="categoria" value={this.state.categoria} onChange ={e=> this.handleChange(e)} >
                                     <option>Seleccione una opción ...</option>	
                                     <option>1</option>	
                                     <option>2</option>	
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group controlId="descripcion">
                                    <Form.Label>Descripción del Trabajo</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="descripcion" value ={this.state.descripcion} onChange={e=>this.handleChange(e)} placeholder="Describa las funciones del puesto" />
                                </Form.Group>
                                <Form.Group controlId="sueldo">
                                    <Form.Label>Sueldo</Form.Label>
                                    <Form.Control type="text" name="sueldo" value={this.state.sueldo} onChange={e => this.handleChange(e)}placeholder="Indique el sueldo (opcional)" />
                                </Form.Group>
                                <Form.Group controlId="nomEmpresa">
                                    <Form.Label>Nombre de la Empresa</Form.Label>
                                    <Form.Control required type="text" name="nomEmpresa" value={this.state.nomEmpresa} onChange={e => this.handleChange(e)}placeholder="Indique el nombre de la Empresa" />
                                </Form.Group>
                                <Form.Group controlId="detallesEmpresa">
                                    <Form.Label>Descripción de la Empresa</Form.Label>
                                    <Form.Control as="textarea" rows="3" name="detallesEmpresa" value ={this.state.detallesEmpresa} onChange={e=>this.handleChange(e)} placeholder="Describa los detalles de la empresa" />
                                </Form.Group>
                                <Form.Group controlId="sitio">
                                    <Form.Label>Sitio</Form.Label>
                                    <Form.Control type="text" name="sitio" value={this.state.sitio} onChange={e => this.handleChange(e)}placeholder="lIndique el Link del Sitio Web de la empresa" />
                                </Form.Group>
                                
                                    <input type="submit" value ="Submit"/>
                        </Form>
                </div>
        )
    }
}

export default EditTrabajos