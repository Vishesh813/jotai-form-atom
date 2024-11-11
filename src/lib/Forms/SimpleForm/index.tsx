import {
  fieldAtom,
  useInputField,
  formAtom,
  useForm,
  FieldAtom,
  Provider,
} from 'form-atoms';

const nameFormAtom = formAtom({
  name: {
    first: fieldAtom({ value: '' }),
    last: fieldAtom({ value: '' }),
  },
});

const SimpleForm = () => {
  const { fieldAtoms, submit } = useForm(nameFormAtom);
  return (
    <form
      onSubmit={submit((values) => {
        alert(JSON.stringify(values));
      })}
    >
      <Field label="First name" atom={fieldAtoms.name.first} />
      <Field label="Last name" atom={fieldAtoms.name.last} />
      <button type="submit">Submit</button>
    </form>
  );
};

function Field<Atom extends FieldAtom<any>>({
  label,
  atom,
}: {
  label: string;
  atom: Atom;
}) {
  const field = useInputField(atom);
  console.log('Re-rendered:', label);
  return (
    <label>
      <span>{label}</span>
      <input {...field.props} />
    </label>
  );
}

export default SimpleForm;
