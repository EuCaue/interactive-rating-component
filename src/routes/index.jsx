import React from 'react';
import { Routes, Route } from 'react-router-dom';

import InteractiveRating from '../components/InteractiveRating';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={<InteractiveRating />} />
      <Route exact path="/thanks" />
    </Routes>
  );
}
