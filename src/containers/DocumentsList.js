import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../components/Column';
import { fetchData } from '../actions/fetchData';
import { setColumns } from '../actions/index';
import { 
    getDataPending, 
    getDataError,
    getDocuments,
    getColumns,
    getColumnOrder
} from '../reducers/dataReducer';


class DocumentList extends Component {

    componentDidMount() {
        const { fetchData } = this.props;
        fetchData();
    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result;
        const { columns } = this.props;

        if(!destination) {
            return;
        }
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = columns[source.droppableId];
        const finish = columns[destination.droppableId];

        // Enable re-ordering within same column
        if (start === finish) {
        const newDocIds = Array.from(start.documentIds);
        newDocIds.splice(source.index, 1);
        newDocIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...start,
            documentIds: newDocIds,
        };

        // TODO
        // Save columns to local state to enable re-ordering
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            }
        }

        // this.setState(newState);

        // TODO
        // Enable column order persisting. Requires a POST
        // request(action) to ensure order is updated within the endpoint
        setColumns(newState);

        }

        // Moving from one list to another
        const startDocumentIds = Array.from(start.documentIds);
        startDocumentIds.splice(source.index, 1);

        const newStart = {
            ...start,
            documentIds: startDocumentIds,
        };

        const finishDocumentIds = Array.from(finish.documentIds);
        finishDocumentIds.splice(destination.index, 0, draggableId);

        const newFinish = {
            ...finish,
            documentIds: finishDocumentIds,
        }

        const newState = {
            ...this.state,
            columns: {
                ...columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        }

        // this.setState(newState);

        // TODO 
        // As above
        setColumns(newState);
    }

    render() {
        const { error, pending, documents, columns, columnOrder } = this.props;
        if (error) {
            return <div> error </div>
        }

        if (pending) {
            return <div>Loading...</div>
        }

        return (
        <div className="column-container">
            <DragDropContext onDragEnd={this.onDragEnd}>
                {columnOrder.map(columnId => {
                const column = columns[columnId];
                const docs = column.documentIds.map(docId => documents[docId]);
                return <Column key={column.id} column={column} documents={docs}/>
                })}
            </DragDropContext>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    documents: getDocuments(state),
    columns: getColumns(state),
    columnOrder: getColumnOrder(state),
    pending: getDataPending(state),
    error: getDataError(state)
})

const mapDispatchToProps = {
    fetchData,
    setColumns
}

export default connect(mapStateToProps,mapDispatchToProps)(DocumentList);