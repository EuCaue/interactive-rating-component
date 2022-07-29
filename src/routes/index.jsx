import React from 'react';
import { Routes, Route } from 'react-router-dom';

import InteractiveRating from '../pages/InteractiveRating';
import Page404 from '../pages/Page404';
import ThankYou from '../pages/ThankYou';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<InteractiveRating />} />
      <Route exact path="/thanks" element={<ThankYou />} />

      <Route exact path="*" element={<Page404 />} />
    </Routes>
  );
}
