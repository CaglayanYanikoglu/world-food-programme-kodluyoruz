import React from 'react';

const withUser = (Children) => {
    const user = {
        name: 'caglayan',
        lastname: 'yanikoglu'
    };

/*     DRY princible */
/*     setTimeout(() => {

    }, 3000); */

    return props => <Children user={user} {...props} />;
};

export default withUser;
