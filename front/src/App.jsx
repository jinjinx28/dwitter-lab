import React from 'react';
import CompGet from './components/CompGet.jsx';
import CompGetParam from './components/CompGetParam.jsx';
import ComPost from './components/ComPost.jsx';
import CompLogin from './components/CompLogin.jsx';

export default function App() {
  return (
    <div>
      <CompLogin />
      <hr />
      <ComPost />
      <hr/>
      <CompGet />
      <hr/>
      <CompGetParam />
    </div>
  );
}
