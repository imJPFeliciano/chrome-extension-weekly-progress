import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../card';

type ITask = {
  id: string
  title: string
}

type ColumnProps = {
  id: string
  title: string
  tasks: ITask[]
}

const Column = (props: ColumnProps) => {
  const { id, title, tasks } = props;

  return (
    <div className="container mx-auto px-4 bg-gray-200">
      <div className="font-bold">{title}</div>
      <Droppable droppableId={id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => <Card key={task.id} id={task.id} index={index} title={task.title} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
};

export default Column;