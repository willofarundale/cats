import React from 'react';
import DocumentsList from '../containers/DocumentsList';
//Styles
import '../styles/index.scss';

const App = () => {
    return (
        <div className="view-container" style={{ marginTop : 10 }}>
            <DocumentsList/>
        </div>
    )
}

export default App;