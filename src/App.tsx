import React, { useState } from 'react';
import './App.css';
import './assets/main.scss';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './components/column';

const initialData = {
  tasks: {
    'task-01': { id: 'task-01', title: 'task 01' },
    'task-02': { id: 'task-02', title: 'task 02' },
    'task-03': { id: 'task-03', title: 'task 03' },
    'task-04': { id: 'task-04', title: 'task 04' },
    'task-05': { id: 'task-05', title: 'task 05' },
  },
  columns: {
    'column-01': {
      id: 'column-01',
      title: 'Column 01',
      taskIds: ['task-01', 'task-02', 'task-03', 'task-04', 'task-05'],
    }
  },
  columnOrder: ['column-01']
}

const App = () => {
  const [tasks, setTasks] = useState(initialData.tasks);
  const [columns, setColumns] = useState(initialData.columns);
  const [columnOrder, setColumnOrder] = useState(initialData.columnOrder);

  // @ts-ignore
  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (destination.draggableId === source.draggableId &&
      destination.index === source.index
    ) return;

    // @ts-ignore
    const column = columns[source.droppableId];
    const newTasksIds = Array.from(column.taskIds);
    newTasksIds.splice(source.index, 1);
    newTasksIds.splice(destination.index, 0, draggableId);

    const newColumn = {
      ...column,
      taskIds: newTasksIds,
    };

    setColumns({ ...columns, [newColumn.id]: newColumn });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} >
      {
        columnOrder.map(columnId => {
          // @ts-ignore
          const column = columns[columnId];

          // @ts-ignore
          const currentTasks = column.taskIds.map(taskId => tasks[taskId]);

          return (
            <Column
              key={columnId}
              id={columnId}
              title={column.title}
              tasks={currentTasks}
            />
          )
        })
      }
    </DragDropContext>
  );
}

export default App;
