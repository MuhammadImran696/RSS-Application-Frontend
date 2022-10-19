import { useState } from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdOutlineDelete } from 'react-icons/md';
import { updateUrl, deleteUrl } from '../../services/api';

import AddUrlModal from '../AddUrlModal';

const UrlCard = ({ data, handleClick, urls, setUrls }) => {
  const [isChecked] = useState(false);
  const [url, setUrl] = useState(data.url);
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = async () => {
    try {
      const result = await updateUrl(data.id, url);
      console.log(result);

      const filteredItems = urls.filter(
        (item) => item.url.toLowerCase().trim() !== data.url
      );
      const obj = {
        id: data.id,
        url: url,
        created_at: data.created_at,
        updated_at: data.updated_at,
      };
      setUrls([...filteredItems, obj]);
      alert('URL Updated');
      setIsOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async () => {
    try {
      const result = await deleteUrl(data);
      console.log(result);
      const filteredItems = urls.filter(
        (item) => item.url.toLowerCase().trim() !== data.url
      );
      setUrls(filteredItems);
      alert('URL Deleted');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='single-url-item'>
      {isOpen && (
        <AddUrlModal
          data={url}
          setUrl={setUrl}
          url={url}
          setIsOpen={setIsOpen}
          handleUpdateUrl={handleUpdate}
        />
      )}
      <div>
        <input
          type='checkbox'
          id='url'
          name='url'
          value={isChecked}
          onClick={() => handleClick(data)}
        />
        <span>{data.url}</span>
      </div>
      <div className='icons-container'>
        <span className='icon' onClick={() => setIsOpen(true)}>
          <CiEdit />
        </span>
        <span className='icon' onClick={handleDelete}>
          <MdOutlineDelete />
        </span>
      </div>
    </div>
  );
};

export default UrlCard;
