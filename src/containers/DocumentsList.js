import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions/fetchData';
import { 
    getData, 
    getDataPending, 
    getDataError 
} from '../reducers/dataReducer';

import Cat1 from '../cats/cat-1.gif';
import Cat2 from '../cats/cat-2.gif';
import Cat3 from '../cats/cat-3.gif';

const kittenByType = {
    bank_draft: Cat1,
    bill_of_lading: Cat2,
    invoice: Cat3
}

class DocumentList extends Component {
    componentDidMount() {
        const { fetchData } = this.props;
        fetchData();
    }

    render() {
        const { error, pending, data } = this.props;
        console.log(data)
        if (error) {
            return <div> error </div>
        }

        if (pending) {
            return <div>Loading...</div>
        }

        return (
            <ul className="document-list">
                {data.map(item => 
                    <li className="list-item" key={item.type}>
                        <h1>{item.title}</h1>
                        <img className="img" 
                        src={kittenByType[item.type]}
                        />
                    </li>
                )}
            </ul>
        );
    }
}

const mapStateToProps = state => ({
    data: getData(state),
    pending: getDataPending(state),
    error: getDataError(state)
})

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps,mapDispatchToProps)(DocumentList);