[codesandbox](https://codesandbox.io/embed/determined-brattain-72bkj?fontsize=14&hidenavigation=1&theme=dark)
 

```
// index.js

  import ReactDOM from "react-dom";
  import { StrictMode } from "react";
  import { Provider } from "react_lite_store";
  import App from "./App";
  import store from "./store";
  const rootElement = document.getElementById("root");

  ReactDOM.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>,
    rootElement
  );


// store.js
  import { combineReducers, createStore } from "react_lite_store";
  import { formReducer } from "./reducers/formReducer";

  const rootReducer = combineReducers({ formReducer });
  const store = createStore(rootReducer);
  export default store;





// formReducer.js
  const formState = {
    name: "",
    lastName: "",
    email: "",
    contactNo: "",
  };

  export const formReducer = (state = formState, action) => {
    switch (action.type) {
      case "SET_FORM_FIELD":
        return { ...state, [action.field]: action.value };
      case "CLEAR_FORM":
        return {
          formState,
        };
      default:
        return state;
    }
  };




// App.js

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

```