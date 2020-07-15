import React from 'react';

function StaffList({ item }) {
  const isLoading = Object.keys(item).length === 0;

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className='flex-container'>
          {item.map((api) => {
            return (
              <div key={api.email} className='flex-item'>
                <img src={api.photo} alt={api.name} />
                <p>{api.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default StaffList;
