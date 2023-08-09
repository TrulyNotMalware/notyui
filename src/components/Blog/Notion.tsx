// import 'react-notion-x/src/styles.css';
// import 'prismjs/themes/prism-tomorrow.css'; // only needed for code highlighting
// import 'katex/dist/katex.min.css';
import { NotionRenderer } from 'react-notion-x';
//third-party
import { Code } from 'react-notion-x/build/third-party/code';
import { Collection } from 'react-notion-x/build/third-party/collection';
import { Equation } from 'react-notion-x/build/third-party/equation';
import { Modal } from 'react-notion-x/build/third-party/modal';
import { ExtendedRecordMap } from 'notion-types';

import { useState, useEffect } from 'react';
import { requestApi } from '@/libs/requester';

const NotionPage = () => {
  const [notionPage, setNotionPage] = useState<ExtendedRecordMap | null>(null);
  useEffect(() => {
    async function fetchPagedata() {
      const NOTION_PAGE_ID = 'a58150fa04d64322af62945acf3fe871';
      const recordMap = await requestApi.get(`/${NOTION_PAGE_ID}`);
      console.log(recordMap);
      setNotionPage(recordMap.data);
    }
    fetchPagedata();
  }, []);

  return (
    <div>
      {notionPage && (
        <NotionRenderer
          disableHeader
          components={{ Code, Collection, Equation, Modal }}
          recordMap={notionPage}
          fullPage={true}
        />
      )}
    </div>
  );
};

export default NotionPage;
