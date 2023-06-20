import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="loader-wrapper">
      <BallTriangle
        height={100}
        width={100}
        radius={5}
        color="#4fa94d"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  );
};
