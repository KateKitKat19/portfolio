import { BallTriangle } from 'react-loader-spinner';
import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <div className="container">
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
