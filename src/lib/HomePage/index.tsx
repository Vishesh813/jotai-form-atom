import React from 'react';
import SimpleForm from '../Forms/SimpleForm';
import UserNameFormV1 from '../Forms/UserNameForm/v1';
import UserNameFormV2 from '../Forms/UserNameForm/v2';

const HomePage: React.FC = () => {
  return (
    <>
      <h2>Form Examples</h2>
      <h3>Simple Form</h3>
      <SimpleForm />
      <h3>V1 :Working</h3>
      <UserNameFormV1 />
      <h3>V2 : Working</h3>
      <UserNameFormV2 />
    </>
  );
};

export default HomePage;
