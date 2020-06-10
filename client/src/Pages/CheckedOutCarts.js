import React, {Component} from "react";
import axios from "axios";
import {loginUser} from "../action/auth";
import 'font-awesome/css/font-awesome.css';
import LogedinHeader from "./LogedInHeader";
import Swal from "sweetalert2";
import {LOCAL_PATH} from "../constants/constants";


export default class MyCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            carts: [] ,
            userID:'',
            products:[],
            user: loginUser
            //userID: this.props.location.state.userID,
        };
        //this.productList = this.productList.bind(this);
        //const prevState = this.props.location.state
    }

    componentDidMount() {
        this.setState({userID: this.props.match.params.user})
        console.log("This is user id :" +this.props.match.params.user);

        axios.get(LOCAL_PATH + '/checkedOutCarts/')
            .then(response => {
                this.setState({carts :response.data})
                //console.log(this.state.products);
            })
            .catch(error => {
                console.log(error);
            })
    }

    /*productList() {
        const mystyle = {
            width: "100px",
            height: "150px"
        };
        //return this.props.location.state.myCart.map((product,i) =>( return this.state.products.map((product,i) =>(
        return this.state.products.map((product, i) => (
            <div className="d-flex flex-row " key={i}>

                <img src={product.PImage} className="mh-50" style={mystyle} alt="logo"/>

                <div className="figure-caption ml-3">
                    <h3>{product.PName}</h3>
                    <h4>Rs {product.PPrice}</h4>
                    <div className="clearfix">
                    </div>
                </div>

            </div>
        ));
    }*/

    deleteCart(id){
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {

                //delete product
                axios.delete(LOCAL_PATH + "/checkedOutCarts/"+id)
                    .then(res=>{
                        console.log(res.data);
                        this.setState({
                            carts: this.state.carts.filter(el => el._id !== id)
                        })
                        Swal.fire(
                            'Deleted!',
                            'Product has been deleted.',
                            'success'
                        )
                    })

            }
        })
    }

    productList(){
        //return this.state.carts.map((product,i) =>(
        return this.state.carts.filter((prod) => prod.CUser===this.props.match.params.user).map((cart,i) =>(
            <div className="d-flex flex-row m-3 rounded bg-light" key={i}>

                    <div className="ml-3 mb-3 col-md-8 pt-2">
                        <h6 style={{fontWeight:"bold"}}><i className="fa fa-calendar fa-2x"></i> {cart.createdAt}</h6>
                        {cart.CProduct.map((pro,i) => (
                            <div className="ml-3">
                                <h6>{i+1}) {pro.PName} <span className="pull-right"> Rs {pro.PPrice}</span></h6>
                            </div>
                        ))}
                        <h6 style={{fontWeight:"bold"}}>Total Amount Rs {cart.CAmount}</h6>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-danger mt-3 ml-3"
                                onClick={() => this.deleteCart(cart._id)}>Remove From Cart
                        </button>
                    </div>

            </div>
        ));
    }

    render() {
        const hrStyle = {border: "1px solid red"}
        return (
            <div>
                <LogedinHeader userID={this.state.userID}/>
                <div className="container">
                    {this.productList()}
                </div>
            </div>
        );
    }
}