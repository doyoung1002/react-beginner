import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className='TodoTemplate'>
      <div className='app-title'>도영이의 족쇄 리스트</div>
      <div className='content'>{children}</div>
    </div>
  );
};

export default TodoTemplate;