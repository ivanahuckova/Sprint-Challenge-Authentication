import React from 'react';
import styled from 'styled-components';

//Component
function Home() {
  const IsLoggedIn = !!localStorage.getItem('token');
  return (
    <SDHomeCont>
      <SDHomeRow>Welcome to this page!</SDHomeRow>
      {IsLoggedIn && <div className="blue">You are logged in so you can see the jokes</div>}
      {!IsLoggedIn && <div className="red">You are not logged in so you need to log in to see the jokes</div>}
    </SDHomeCont>
  );
}

//Styling Of Component
const SDHomeCont = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .red {
    color: #d81159;
  }
  .blue {
    color: #2359ac;
  }
`;

const SDHomeRow = styled.div`
  font-size: 1.5rem;
  padding: 20px 0;
`;

export default Home;
