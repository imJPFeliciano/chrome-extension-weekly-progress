import React from 'react';
import Chip from '../chip';

type Tag = {
  name: string
}

type TaskProps = {
  title: string
  description: string
  tags: Tag[]
}

const Card = (task: TaskProps) => {
  const { title, description, tags } = task;

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
      { 
        tags && tags.length && <div className="px-6 py-4">
          { tags.map((tag: Tag )=> {
            return <Chip name={tag.name} />
          })}
        </div>
      }
    </div>
  );
};

export default Card;
