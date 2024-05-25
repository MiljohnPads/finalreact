import  { useState } from 'react';

const ConditionalList = () => {
  const [showList, setShowList] = useState(false);

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div>
      <button onClick={() => setShowList(!showList)}>
        {showList ? 'Hide List' : 'Show List'}
      </button>
      {showList && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ConditionalList;
