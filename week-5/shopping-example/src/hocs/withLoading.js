import React, { useState } from 'react';
import { RevolvingDot } from 'react-loader-spinner'

const withLoading = WrappedComponent => {
  return props => {
    const [loading, setLoading] = useState(true);
    return (
      <>
        {loading && (
          <RevolvingDot
            height="100"
            width="100"
            radius="6"
            color="#000"
            secondaryColor=''
            ariaLabel="revolving-dot-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        )}
        <WrappedComponent
          setLoading={setLoading}
          {...props}
        />

      </>
    );
  };
};
export default withLoading;
