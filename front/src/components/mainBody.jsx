import React, { Component } from 'react';
import '../CSS/mainBody.css';


class MainBody extends Component {
    
    render() { 
        return ( 
            <div className="mainBody--wrapper">
                <div className="mainBody">
                    <div className="batch-1--wrapper">
                        <div className="batch-1">
                            <h1>Batch:</h1>
                            <h1>No. 1</h1>
                            <div className="shop-Btn">Shop Now <hr/></div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default MainBody;