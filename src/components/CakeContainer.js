import React from "react";
import { buyCake } from "../redux";
import { connect } from "react-redux";
function CakeContainer(props) {
  return (
    <div>
      <h1>No of Cakes:{props.numofCakes}</h1>
      <input type="button" onClick={props.buyCake} value="Buy cakes" />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    numofCakes: state.numofCakes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
