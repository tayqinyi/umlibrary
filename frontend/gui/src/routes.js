import React from 'react';
import { Route } from 'react-router-dom';

import BookView from './containers/bookview';
import BookDetailView from './containers/bookdetailview';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={BookView} />
        <Route exact path='/:id' component={BookDetailView} />
    </div>
)

export default BaseRouter;