/** @format */

import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <Outlet />
    </div>
  );
}
