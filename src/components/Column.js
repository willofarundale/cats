import React,{ Component, Fragment } from 'react';
import Document from './Document';
import { Droppable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

class Column extends Component {
    render() {
        const { column, documents } = this.props;
        return (
            <Fragment>
                <Droppable droppableId={column.id}>
                    {(provided)=> (
                        <div className="column"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        >
                            <h1>{column.title}</h1>
                            {documents.map((doc, index) => <Document key={doc.id} document={doc} index={index}/>)}
                        </div>
                        )
                    }
                </Droppable>
            </Fragment>
        )
    }
}

Column.propTypes = {
    column: PropTypes.array,
    documents: PropTypes.array,
}

export default Column;