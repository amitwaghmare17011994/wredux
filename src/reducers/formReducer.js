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
