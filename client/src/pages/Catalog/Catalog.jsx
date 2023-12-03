/** @format */

import React, { useEffect } from 'react';
import './Catalog.scss';
import axios from 'axios';

export default function Catalog() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log('here');
        const res = await axios({
          method: 'get',
          url: '/api/v1/product/all'
        });
        console.log(res);
      } catch (err) {}
    };
    fetchProducts();
  }, []);

  return <div>This is a product catalog page</div>;
}
