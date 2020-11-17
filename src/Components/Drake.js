import React, { Component } from 'react';
import { yes, no } from '../objects';

class Drake extends Component {

    state = {
        clicked: false,
        yes: yes,
        no: no
    };


    // renderMessage = () => {
    //   console.log(this.state)
    //   return (<div>
    //     <h1>You Can Do This!</h1>
    //     <h1>Are you sure?
    //       {this.state.yes} {this.state.no} </h1>
    //   </div>);

    // }

    // render() {
    //   return (
    //     <div>
    //       {this.renderMessage()}
    //     </div>
    //     )
    // }
    clickHandler = () => {
        this.setState((prevState) => ({ clicked: !prevState.clicked }));
    };

    render() {
        return (
            <>
                <h1>{this.state.clicked ? this.state.yes["yes-statement"] : this.state.no["no-statement"]}</h1>
                <img alt="Drake" src={this.state.clicked ? this.state.yes["yes-image"] : this.state.no["no-image"]} onClick={this.clickHandler} style={{ width: "40%", height: "40%" }} />
            </>
        );
    }
  }

  export default Drake;
