import React from 'react';

import PageBanner from 'components/PageBanner';
import styles from './NewsView.scss';

import Story20161209 from './Stories/Story20161209.js';
import Story20161208 from './Stories/Story20161208.js';
import Story20161207 from './Stories/Story20161207.js';
import Story201610202 from './Stories/Story201610202.js';
import Story20161020 from './Stories/Story20161020.js';
import Story20160929 from './Stories/Story20160929.js';
import Story20160923 from './Stories/Story20160923.js';
import Story20160916 from './Stories/Story20160916.js';
import Story20160831 from './Stories/Story20160831.js';
import Story20160812 from './Stories/Story20160812.js';
import Story20160808 from './Stories/Story20160808.js';
import Story20160720 from './Stories/Story20160720.js';
import Story20160616 from './Stories/Story20160616.js';
import Story20160602 from './Stories/Story20160602.js';
import Story20160523 from './Stories/Story20160523.js';
import Story201605202 from './Stories/Story201605202.js';
import Story20160520 from './Stories/Story20160520.js';
import Story20160517 from './Stories/Story20160517.js';
import Story20160502 from './Stories/Story20160502.js';
import Story20160425 from './Stories/Story20160425.js';
import Story20160406 from './Stories/Story20160406.js';
import Story20160328 from './Stories/Story20160328.js';
import Story201603282 from './Stories/Story201603282.js';
import Story20160323 from './Stories/Story20160323.js';
import Story20160205 from './Stories/Story20160205.js';
import Story20160204 from './Stories/Story20160204.js';
import Story20160125 from './Stories/Story20160125.js';
import Story20151222 from './Stories/Story20151222.js';
import Story20151119 from './Stories/Story20151119.js';
import Story201511192 from './Stories/Story201511192.js';
import Story20151105 from './Stories/Story20151105.js';
import Story20150923 from './Stories/Story20150923.js';
import Story20150917 from './Stories/Story20150917.js';
import Story20150817 from './Stories/Story20150817.js';
import Story201508172 from './Stories/Story201508172.js';
import Story20150813 from './Stories/Story20150813.js';
import Story20150806 from './Stories/Story20150806.js';
import Story20150413 from './Stories/Story20150413.js';
import Story20150228 from './Stories/Story20150228.js';
import Story20150224 from './Stories/Story20150224.js';
import Story20150220 from './Stories/Story20150220.js';
import Story20150208 from './Stories/Story20150208.js';
import Story20170124 from './Stories/Story20170124.js';
import Story20170214 from './Stories/Story20170214.js';
import Story20170404 from './Stories/Story20170404.js';
import Story20170515 from './Stories/Story20170515.js';
import Story20170828 from './Stories/Story20170828.js';
import Story20170911 from './Stories/Story20170911.js';
import Story201709112 from './Stories/Story201709112.js';
import Story20170912 from './Stories/Story20170912.js';
import Story20170807 from './Stories/Story20170807.js';
import Story20171005 from './Stories/Story20171005.js';
import Story201712201 from './Stories/Story201712201.js';
import Story201712202 from './Stories/Story201712202.js';
import Story201712203 from './Stories/Story201712203.js';
import Story201712204 from './Stories/Story201712204.js';

export default function NewsView() {
  return (
    <div className={styles.wrapper}>
      <PageBanner
        title="LINCS News"
        subTitle="Stay up to date with the latest news regarding the LINCS Consortium"
      />
      <div className="container">
        <div className="row">
          <div className={`col-xs-12 col-xl-9 ${styles.news}`}>
            <Story201712201 />
            <Story201712202 />
            <Story201712203 />
            <Story201712204 />
            <Story20171005 />
            <Story20170912 />
            <Story201709112 />
            <Story20170911 />
            <Story20170828 />
            <Story20170807 />
            <Story20170515 />
            <Story20170404 />
            <Story20170214 />
            <Story20170124 />
            <Story20161209 />
            <Story20161208 />
            <Story20161207 />
            <Story201610202 />
            <Story20161020 />
            <Story20160929 />
            <Story20160923 />
            <Story20160916 />
            <Story20160831 />
            <Story20160812 />
            <Story20160808 />
            <Story20160720 />
            <Story20160616 />
            <Story20160602 />
            <Story20160523 />
            <Story201605202 />
            <Story20160520 />
            <Story20160517 />
            <Story20160502 />
            <Story20160425 />
            <Story20160406 />
            <Story20160328 />
            <Story201603282 />
            <Story20160323 />
            <Story20160205 />
            <Story20160204 />
            <Story20160125 />
            <Story20151222 />
            <Story20151119 />
            <Story201511192 />
            <Story20151105 />
            <Story20150923 />
            <Story20150917 />
            <Story20150817 />
            <Story201508172 />
            <Story20150813 />
            <Story20150806 />
            <Story20150413 />
            <Story20150228 />
            <Story20150224 />
            <Story20150220 />
            <Story20150208 />
          </div>
        </div>
      </div>
    </div>
  );
}
