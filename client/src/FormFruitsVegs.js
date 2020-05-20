import React, { Component } from 'react'
// import Api from './ApiRecipe'



export default class FormFruitsVegs extends Component {
    constructor(props) {
        super(props)
        this.state = {

            fruits: "",
            vegetables: "",
            name: "Fruits & Vegs",
            itemList: [],
            
           
            
        }

        this.changeFruit = this.changeFruit.bind(this)
        this.changeVeg = this.changeVeg.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
        }
    
        
    

    changeFruit(e) {

        this.setState({fruits: e.target.value})
 }

    changeVeg(e) {

        this.setState({vegetables: e.target.value})
    }

    handleSubmit() {
        let list = {fruits: this.state.fruits, vegetables: this.state.vegetables}
        this.setState({
            itemList: [...this.state.itemList, list],
            fruits: "",
            vegetables: "",
            loading: false,
     
      calories: null,
      error: false
            
        })
    }

   

    
    render() {
        return (
            <div className="bg-light">
           <div className="container p-5">
               <h2 className="mb-4 ml-4">{this.state.name}</h2>
               <div className="container text-left align-left">

                   <input type="text" className="form-control mb-4" placeholder="FRUITS" value={this.state.fruits} onChange={this.changeFruit}/>
                   <button className="mb-4 btn btn-info" onClick={this.handleSubmit}>ADD</button><br></br>
                   
                   <input type="text"className="form-control mb-4" placeholder="VEGETABLES"value={this.state.vegetables} onChange={this.changeVeg} />
                   <button className="btn btn-info" onClick={this.handleSubmit}>ADD</button><br></br><br></br>

             


            <div className="list-group shadow border-0 list-group-item list-group-item-action d-flex justify-content-between">
              
                   {/* <input type="text" className="mb-4 flex-grow-1" placeholder="TOTAL" />  */}
                   <div className="card card-body">
                   <h5>TOTAL</h5>
                   {this.state.itemList.map((item, index) => (
           <p> key={item.index}{item.vegetables}{item.vegetables}</p>
        )).length}

</div>

<ul className="mt-4 list-group">
        {this.state.itemList.map((item, index) => (
           <li className="list-group-item font-weight-bold ml-4"key={item.fruits}>{item.fruits}{item.vegetables}</li>
           ))}
 </ul>

 {/* <Api /> */}

           </div>
             </div>    
                   
                   <br></br>

               
              </div>
            
           </div>
          
           
          
         )
    

 }
}