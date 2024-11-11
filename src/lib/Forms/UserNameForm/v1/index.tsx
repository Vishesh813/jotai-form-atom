import { textField } from '@form-atoms/field';
import { formAtom, useForm, useFormState } from 'form-atoms';
import { InputField } from 'form-atoms';

const userNameFormAtom = formAtom({
  name: {
    firstName: textField(),
    lastName: textField(),
  },
});

const UserNameFormV1: React.FC = () => {
  const { fieldAtoms, submit } = useForm(userNameFormAtom);
  const { values } = useFormState(userNameFormAtom);

  return (
    <form
      onSubmit={submit((values) => {
        alert(JSON.stringify(values));
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
      <p>First Name : {values.name.firstName}</p>
      <p>Last Name : {values.name.lastName}</p>
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserNameFormV1;
