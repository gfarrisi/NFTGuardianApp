import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { ActivateDeactivate } from './components/ActivateDeactivate';
// import { Greeter } from './components/Greeter';
// import { SectionDivider } from './components/SectionDivider';
// import { SignMessage } from './components/SignMessage';
// import { WalletStatus } from './components/WalletStatus';

const StyledAppDiv = styled.div`
  display: grid;
  grid-gap: 20px;
`;

export function Dashboard(): ReactElement {
  return (
    <div>
    <h1>Dashboard</h1>
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="landing">Landing</Link>
    </nav>
  </div>
  );
}
