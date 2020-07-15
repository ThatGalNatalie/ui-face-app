import React, { useEffect, useState } from 'react';
import StaffItem from './StaffItem';

import '../css/StaffItem.css';

const key = process.env.REACT_APP_API_KEY;

function StaffList() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://uifaces.co/api?limit=6&emotion[]=happiness',
          {
            method: 'GET',
            headers: {
              'X-API-KEY': [key],
              Accept: 'application/json',
              'Cache-Control': 'no-cache',
            },
          }
        );

        const result = await response.json();
        setData(result);
      } catch (error) {
        // We could do something here also, givien more time to plan
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <StaffItem item={data} />
    </div>
  );
}

export default StaffList;
