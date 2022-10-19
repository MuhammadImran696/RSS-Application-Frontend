import Modal from '../Modal';

const AddUrlModal = ({
  data,
  setIsOpen,
  url,
  setUrl,
  handleAddUrl,
  handleUpdateUrl,
}) => {
  return (
    <Modal handleClose={() => setIsOpen(false)}>
      <input
        type='text'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className='modal-input'
        placeholder='Enter URL'
      />
      <button className='btn' onClick={data ? handleUpdateUrl : handleAddUrl}>
        {data ? 'Update URL' : 'Add URL'}
      </button>
    </Modal>
  );
};

export default AddUrlModal;
