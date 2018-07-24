import React, { Component } from 'react';
import Map from './cmu.PNG'

class ShopDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                <div>
                    Signature Shop
          </div>
                <div>
                    Contact: 88/4 Chiang Mai University Mueng District Chiang 50200
                </div>
                <div>
                    <img src={Map} alt="Map" height="400" width="400"/>
                </div>
            </div>
        );
    }
}

export default ShopDetail;
