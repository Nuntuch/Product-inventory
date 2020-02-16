import React from 'react';
import './App.css'

const Title = (props) =>{ // a.k.a dump component
  return(
    <div>

      {/* <h1>Product List{props.name}</h1> */}
      <h1>{props.name}</h1>

    </div>
  

  )

}

const ProductCard = (props) => {
  return (
    <div class= "product-card">
      {props.item.name} ,
      {props.item.price} 
      {/* {props.item.description} */}
    </div>

  )

}


// a.k.a smart component
class ProductList extends React.Component{
 


 state = {
  //  key : value
  products: [
    {
      name: 'Oreo' ,
      description: 'Biscuit. 112g',
      price: 270.00
    },
    {
      name: '3D Mask ผู้ใหญ่' ,
      description: '3D Mask ผู้ใหญ่',
      price: 129.00
    },
    {
      name: 'กะเพรา' ,
      description: 'กะเพรา 4 ต้น',
      price: 10.50
    },
    {
      name: 'Bar-B-Plaza E-vouncher' ,
      description: 'e-vouncher',
      price: 85.00
    },

  ],
   
   user: {
    name : 'Bas'
      }
    } 
 
 
  render(){

    return(// must return
      <div> 
  
  

        <div>
          <Title name = "Chokun Shokul Zhokur!!!"></Title>
          <h1>Product List {this.state.user.name}  </h1>
            <ProductCard item={this.state.products[0]}/>
    {/* <h2>{this.state.products[1]}</h2> */}
            {/* <div class= "product-card">
              {this.state.products.map((product) => (
                // <div>
                //   {product.name},
                //   {product.description},
                //   {product.price}
                // </div>
                <div>
                  {product.name},
                  {product.description},
                  {product.price}
                </div>

          ) )}
        </div> */}
    </div>


    <div>
            <Title name = 'Old Products!!!'/>
            <div>
              {this.state.products.map(
                (product) => ( 
                <ProductCard item = {product} /> 
              
                  )
                )
              }

            </div>
      </div>
          



  </div>


           )
        }
      }

    
export default ProductList;