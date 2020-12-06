import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Modal} from 'react-bootstrap'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      firstName:"",lastName:"",age:"",gender:"",city:"",
      chinese:false,italian:false,gujarati:false
    }
  }

  handleChange = (e) => {
    const {name,value,type,checked} = e.target;
    type==="checkbox"?
    this.setState({
        [name]:checked
    }):
    this.setState({
        [name]:value            
    })
}   

handleClose = (e) => {
  this.setState({show:false})
  window.location.reload()
  
}

handleShow = () =>{
  this.setState({show:true})

} 
  render(){
    
    return (
      <div className="App container">
           <nav className="navbar navbar-light bg-primary mt-1 pt-3 text-center">
             <p className="navbar-brand text-light" href="#">Register User</p>
          </nav>
          <hr />
          <div className="row">
            
            <div className="col-sm-3"></div>
            <div className="col-sm-6">
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                      <label>FirstName:</label>
                      <input 
                        className="form-control" type="text" name="firstName" placeholder="Enter First Name" onChange={this.handleChange}/>
                    
                    </div>
                    <div className="form-group">
                      <label>LastName:</label>
                      <input 
                        className="form-control" name="lastName"  type="text" placeholder="Enter Last Name" onChange={this.handleChange}/>
                      
                    </div>
                    <div className="form-group">
                      <label>Age:</label>
                      <input 
                        className="form-control" name="age"  type="text" placeholder="Enter Your Age" onChange={this.handleChange} />
                      
                    </div>
                    <div className="form-group">
                      <label>Gender:</label> <br />
                      <input 
                         name="gender"  type="radio" className="mr-3"  onChange={this.handleChange} value="male" checked={this.state.gender === "male"}/>Male
                         <br />
                      <input 
                        name="gender"  type="radio"  onChange={this.handleChange}  className="mr-3" value="female" checked={this.state.gender === "female"}/>Female
                    </div>
                    <div className="form-group">
                      <label>Choose City:</label>
                      <select onChange={this.handleChange} className="form-control" name="city">
                        <option value="Vapi">Vapi</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Valsad">Valsad</option>
                        <option value="Ahemedabad">Ahemedabad</option>
                      </select>
                      
                    </div>
                    <div className="form-group">
                      <label>Foods:</label>
                      <br />
                      <input onChange={this.handleChange} className="mr-3" type="checkbox" name="chinese" checked={this.state.chinese}/>Chinese<br />
                      <input onChange={this.handleChange} className="mr-3" type="checkbox" name="italian" checked={this.state.italian}/>Italian<br />
                      <input onChange={this.handleChange} className="mr-3" type="checkbox" name="gujarati" checked={this.state.gujarati}/>Gujarati<br />
                    </div>
                    <hr />
                    <div className="text-center">
                    <Button variant="primary" onClick={this.handleShow}>
              Register
            </Button>
    
            <Modal
            show={this.state.show}
            onHide={this.handleClose}
            backdrop="static"
            keyboard={false}
            >
            <Modal.Header closeButton>
                <Modal.Title>::You Application Data::</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p><b>Name:</b>{this.state.firstName +" "+this.state.lastName}</p>
                <p><b>Age:</b>{this.state.age}</p>
                <p><b>Gender:</b>{this.state.firstName +" "+this.state.lastName}</p>
                <p><b>City:</b>{this.state.firstName +" "+this.state.lastName}</p>
                <p><b>Foods:</b>{this.state.chinese?"Chinese":""}{this.state.italian?"Italian":","}{this.state.gujarati?"Gujarati":""}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                Close
                </Button>
            </Modal.Footer>
            </Modal>
            </div>
                </div>
                <div className="card-footer">
               
                </div>
                
            </div>
            </div>
            <div className="col-sm-3">
                                  
            </div>
            </div>
          </div>
    );  
  }
  
}

export default App;
