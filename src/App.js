import { useDispatch, useSelector } from "react_lite_store";
import "./styles.css";

export default function App() {
  return (
    <div className={"row-center app"}>
      <div className="container">
        <Form />
        <div className="form-view">
          <FormView />
        </div>
      </div>
    </div>
  );
}

const fields = [
  { placeholder: "Enter Name", key: "name" },
  {
    placeholder: "Enter Last Name",
    key: "lastName",
  },
  {
    placeholder: "Enter Email",
    key: "email",
  },
  {
    placeholder: "Enter Contact Number",
    key: "contactNo",
  },
];

const Form = () => {
  const dispatch = useDispatch();
  const form = useSelector((state) => {
    return state.formReducer;
  });

  const onChange = (e) => {
    dispatch({
      type: "SET_FORM_FIELD",
      field: e.target.id,
      value: e.target.value,
    });
  };
  return (
    <div className={"row-center"}>
      <div className="col">
        {fields.map((field, index) => {
          return (
            <input
              key={field.key}
              id={field.key}
              placeholder={field.placeholder}
              name={field.key}
              onChange={onChange}
              value={form[field.key] || ""}
            />
          );
        })}
        <div className="footer">
          <button>Submit</button>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR_FORM" });
            }}
          >
            Clear
          </button>
        </div>
        
      </div>
    </div>
  );
};

const FormView = () => {
  const form = useSelector((state) => {
    return state.formReducer;
  });

  const { name, lastName, email, contactNo } = form;
  return (
    <div className={"row-center"}>
      <div className="col">
        <span>Name : {name}</span>
        <span>Last Name : {lastName}</span>
        <span>Email : {email}</span>
        <span>Contact Number : {contactNo}</span>
      </div>
    </div>
  );
};
