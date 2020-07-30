import React from 'react'
import {connect} from "react-redux";
import AddTruck from './AddTruck'
import TruckList from './TruckList';
import {fetchTrucks, addTruck} from "../../store/actions";
import '../components.css'


function Operator({user}, props) {
  

  return (
    <div className='operator-container'>
      <h1>{user.username}</h1>
      <p>Your Food Trucks</p>
      {/* <TruckList fetchTrucks={props.fetchTrucks}/>
      <AddTruck addTruck={props.addTruck} /> */}
      
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    data: state.data,
    error: state.error
  };
};

export default connect(
mapStateToProps, {fetchTrucks, addTruck}
)(Operator);

