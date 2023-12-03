/** @format */

import React, { useEffect } from 'react';
import './Catalog.scss';

export default function Catalog() {
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios({
          method: 'post',
          url: '/api/v1/product/all'
        });
        console.log(res);
      } catch (err) {}
    };
    fetchProducts();
  }, []);

  return <div>This is a product catalog page</div>;
}
