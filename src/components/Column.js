import React,{ Component, Fragment } from 'react';
import Document from './Document';
import { Droppable } from 'react-beautiful-dnd';

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

export default Column;