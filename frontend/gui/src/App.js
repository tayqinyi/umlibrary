import React from 'react';
import 'antd/dist/antd.css';

import CustomLayout from './containers/layout';
import BookView from './containers/bookview';

function App() {
  return (
    <div className="App">
        <CustomLayout>
            <BookView />
        </CustomLayout>
    </div>
  );
}

export default App;
