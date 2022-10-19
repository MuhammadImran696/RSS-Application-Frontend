import { useNavigate } from 'react-router-dom';

import { getSelectedUrls } from '../../services/api'
import UrlCard from '../../components/UrlCard';
import AddUrl from '../../components/AddUrl';

const Home = ({ urls, setUrls, selectedUrls, setSelectedUrls }) => {
  const navigate = useNavigate();

  const handleAddUrl = (url) => {
    if (selectedUrls.includes(url)) {
      const filtered = selectedUrls.filter((item) => item.id !== url.id);
      setSelectedUrls(filtered);
      return;
    }

    setSelectedUrls((prevUrls) => [...prevUrls, url]);
  };

  const handleSelectedUrls = async () => {
    try {
      const urls = []
      for(let i = 0 ; i < selectedUrls.length; i++){
        urls.push(selectedUrls[i].url)
      }
      console.log(urls);
      let payload = {
        "urls": urls
      }
      
      const items = await getSelectedUrls(payload)
      navigate('/items',{
        state: {
          items
        }})
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='container'>
      <AddUrl urls={urls} setUrls={setUrls} />
      <h2>Available Urls</h2>
      {urls?.length ? (
        <div>
          {urls?.map((url) => (
            <UrlCard
              key={url.id}
              data={url}
              urls={urls}
              setUrls={setUrls}
              handleClick={handleAddUrl}
            />
          ))}

          <div className='selected-urls'>
            <h2>Selected URL's</h2>
            {selectedUrls.length > 0 ? (
              selectedUrls?.map((url) => (
                <div key={url.id} className='selected-item'>
                  <li>
                    <>{url.url}</>
                  </li>
                </div>
              ))
            ) : (
              <div>No Items Selected</div>
            )}
            <button
              className='btn'
              disabled={selectedUrls.length === 0}
              onClick={handleSelectedUrls}
            >
              <span className='text'>Fetch Selected URL's</span>
            </button>
          </div>
        </div>
      ) : (
        <h2>Loading ...</h2>
      )}
    </div>
  );
};

export default Home;
