import React from 'react';
import Notice from './Notice';

import PropTypes from 'prop-types';

const NoticesList = ({ notices }) => (
    <div className='row'>
        {notices.map(notice => (
            <Notice key={notice.url} notice={notice} />
        ))}
    </div>
);

Notice.propType = {
    notices: PropTypes.array.isRequired
};

export default NoticesList;
