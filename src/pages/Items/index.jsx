import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import Modal from '../../components/Modal';

const Items = () => {
  const { state: { items: {items} } } = useLocation();
  const [data] = useState(items);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const handleClick = (item) => {
    setSelectedItem(item);
    setIsOpen(true);
  };

  return (
    <div className='container overflow-hidden'>
      {isOpen && (
        <Modal handleClose={() => setIsOpen(false)}>
          <div>
            <h2>{selectedItem?.Title}</h2>
            <p>Source: {selectedItem?.Source}</p>
            <p>Publishing Date: {selectedItem?.PublishDate}</p>
            <a href={selectedItem?.Link} target='_blank'>
              Link
            </a>
            <p>
              <span style={{ fontWeight: 'bold' }}>Description: </span>
              {selectedItem?.Description}
            </p>
          </div>
        </Modal>
      )}
      <h2>All Items</h2>
      <ul>
        {data.length && data?.map((item, index) => (
          <li
            key={index}
            className='list-item'
            onClick={() => handleClick(item)}
          >
            {item.Title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Items;
