import React,{ Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import PropTypes from 'prop-types';

import Cat1 from '../cats/cat-1.gif';
import Cat2 from '../cats/cat-2.gif';
import Cat3 from '../cats/cat-3.gif';

const kittenByType = {
    bank_draft: Cat1,
    bill_of_lading: Cat2,
    invoice: Cat3
}


class Document extends Component {
    render() {
        const { document, index } = this.props;
        return (
            <Draggable
            draggableId={document.id}
            index={index}
            >
                {
                    (provided) => (
                        <div className="column-item"
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                        >
                            <span className="title">{document.title}</span>
                            <img src={kittenByType[document.type]}
                            className="img"
                            alt="kitten-image"
                            />
                        </div>
                    )
                }

            </Draggable>
        );
    }
}

Document.propTypes = {
    document: PropTypes.object,
    index: PropTypes.number,
}

export default Document;