import React from 'react';

export default function Home() {
  const IsLoggedIn = !!localStorage.getItem('token');
  return (
    <div>
      <div>Welcome to this page!</div>
      {IsLoggedIn && <div>You are logged in so you can see the jokes</div>}
      {!IsLoggedIn && <div>You are not logged in so you need to log in to see the jokes</div>}
    </div>
  );
}
