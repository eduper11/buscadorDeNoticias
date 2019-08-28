import React from 'react';
import Notice from './Notice';

const NoticesList = ({ notices }) => (
    <div className='row'>
        {notices.map(notice => (
            <Notice key={notice.url} notice={notice} />
        ))}
    </div>
);

export default NoticesList;
