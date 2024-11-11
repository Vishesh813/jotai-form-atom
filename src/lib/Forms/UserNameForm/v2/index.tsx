import { formAtom, InputField, Form } from 'form-atoms';
import React from 'react';
import { textField } from '@form-atoms/field';

const userNameFormAtom = formAtom({
  name: {
    firstName: textField(),
    lastName: textField(),
  },
});

const UserNameFormV2: React.FC = () => {
  return (
    <Form
      atom={userNameFormAtom}
      render={({ fieldAtoms, submit }) => {
        return (
          <form
            onSubmit={submit((e) => {
              alert(JSON.stringify(e));
            })}
          >
            <InputField
              atom={fieldAtoms.name.firstName}
              component="input"
              type="text"
            />
            <InputField
              atom={fieldAtoms.name.lastName}
              component="input"
              type="text"
            />
            <button type="submit">Submit</button>
          </form>
        );
      }}
    />
  );
};

export default UserNameFormV2;
