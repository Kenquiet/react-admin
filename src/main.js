import React from 'react';
import ReactDom from 'react-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import './main.less';

dayjs.locale('zh-cn');

const App = () => (
  <React.StrictMode>
    项目初始化
  </React.StrictMode>
);
  
  ReactDom.render(<App />, document.getElementById('root'));
  
  // 热更新
  if (module.hot) {
    module.hot.accept((err) => {
      if (err) {
        console.error('module.hot，', err);
      }
    });
  }