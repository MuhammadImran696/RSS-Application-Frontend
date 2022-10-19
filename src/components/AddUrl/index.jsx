import { useState } from 'react';
import { postAUrl } from '../../services/api';

import AddUrlModal from '../AddUrlModal';

const AddUrl = ({ data, urls, setUrls }) => {
  const [url, setUrl] = useState(data ? data.url : '');
  const [isOpen, setIsOpen] = useState(false);

  const handleAddUrl = async () => {
    if (!url) return;
    try {
      const api = await postAUrl({ url: url });
      setUrls((prevValues) => [...prevValues, api]);
    } catch (error) {
      console.log(error);
    } finally {
      setUrl('');
      setIsOpen(false);
    }
  };

  return (
    <div className='add-url-container'>
      <div className='add-url-header'>
        <button className='btn' onClick={() => setIsOpen(true)}>
          Add New URL
        </button>
        {isOpen && (
          <AddUrlModal
            setIsOpen={setIsOpen}
            url={url}
            setUrl={setUrl}
            handleAddUrl={handleAddUrl}
          />
        )}
      </div>
    </div>
  );
};

export default AddUrl;
