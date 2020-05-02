import React from 'react';
import Chip from '../chip';
import { Draggable } from 'react-beautiful-dnd';

type Tag = {
  name: string
}

type TaskProps = {
  id: string
  index: number
  title: string
}

const Card = (task: TaskProps) => {
  const { id, index, title } = task;

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div className="max-2-sm rounded overflow-hidden shadow-lg bg-white m-4"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default Card;
