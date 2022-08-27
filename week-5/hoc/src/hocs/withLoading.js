import React from 'react';
import {
  bool, shape
} from 'prop-types';

import Loading from '../components/Dashboard/Loading';

const withLoading = WrappedComponent => {
  const Component = ({
    options, isLoading, isStyle, ...props
  }) => {
    return (
      <div className={`hoc ${isStyle ? 'is-loading' : ''}`}>
        {
          !isLoading
            ? <WrappedComponent options={options} {...props} />
            : <Loading />
        }
      </div>
    );
  };

  Component.defaultProps = {
    options: [],
    isLoading: false,
    isStyle: true
  };

  Component.propTypes = {
    options: shape({}),
    isLoading: bool,
    isStyle: bool
  };

  return Component;
};

export default withLoading;
