export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-secondary-600 flex items-center justify-center">
      <div className="atom-spinner">
        <div className="spinner-inner">
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-line"></div>
          <div className="spinner-circle">&#9679;</div>
        </div>
      </div>
    </div>
  );
};
