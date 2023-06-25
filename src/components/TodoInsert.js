import { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'
import './TodoInsert.scss';



const TodoInsert = ({ onInsert }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onChange = useCallback(e => {
    setTitle(e.target.value);
  }, []);

  const onContent = useCallback(e => {
    setContent(e.target.value);
  }, []);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();

      let blank_pattern = /^\s+|\s+$/g;
      const trimmedTitle = title.replace(blank_pattern, '');
      const trimmedContent = content.replace(blank_pattern, '');

      if (trimmedTitle && trimmedContent) {
        let processedContent = trimmedContent;
        if (trimmedContent.length > 24) {
          processedContent = trimmedContent.slice(0, 23).padEnd(26, '.');
        }

        onInsert(trimmedTitle, processedContent);
        setTitle('');
        setContent('');

      }
    },
    [onInsert, title, content],
  )

  return (

    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="제목을 입력하세요"
        value={title}
        onChange={onChange}
      />

      <input
        placeholder="내용을 입력하세요"
        value={content}
        onChange={onContent}
      />

      <button type="submit">
        <MdAdd />
      </button>
      <div className="done"> 👍 Working!</div>
    </form>
  );
};

export default TodoInsert;