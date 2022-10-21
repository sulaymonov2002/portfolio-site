import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { MainContainer } from "./components/MainContainer";

export const Step1 = () => {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();

  const onSubmit = (data) => {
    history.push("./step2");
  };

  return (
    <MainContainer>
      <h2>Step2</h2>
      <form action="">
        <input
          ref={register}
          name="firstName"
          type="text"
          placeholder="First Name"
        />
        <input
          ref={register}
          name="lastName"
          type="text"
          placeholder="First Name"
        />
        <button type="submit">Next</button>
      </form>
    </MainContainer>
  );
};
