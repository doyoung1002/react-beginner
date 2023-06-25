import {
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked, content } = todo;

  return (
    <div className="TodoListItem">
      <div className='text'>
        <div className="title">{text}</div>
        <div className="content">{content}</div>
      </div>

      <div className="remove" onClick={() => onRemove(id)}>
        삭제
      </div>
      <div className={cn('text-box', { checked })} onClick={() => onToggle(id)}>
        {checked ? <span>완료</span> : <span>미완료</span>}
      </div>
    </div>
  );
};

export default TodoListItem;