import React from 'react';
import { FormattedMessage } from 'react-intl';

const Header = () => (
  <div>
    <FormattedMessage
      id="Header.name"
      description="Library name"
      defaultMessage="React Intl CRA"
    />
    <br/>
    <FormattedMessage
      id="Header.desc"
      description="Library description"
      defaultMessage="Extract messages of `Creact React App` from the command line"
    />
  </div>
)

export default Header;
