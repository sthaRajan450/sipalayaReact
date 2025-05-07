import React from "react";
import { useForm } from "react-hook-form";
const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  return (
    <div>
      <form
        onSubmit={handleSubmit(async (data) => {
          await new Promise((resolve) => setTimeout(resolve, 5000));
          console.log(data);
        })}
      >
        <label>First Name:</label>
        <input
          {...register("firstName", {
            required: true,
            minLength: { value: 3, message: "min length atleast 3" },
          })}
        />
        {errors.firstName && <span>{errors.firstName.message}</span>}
        <br /> <br />
        <label>Middle Name:</label>
        <input {...register("middleName", { required: true })} />
        <br /> <br />
        <label>Last Name:</label>
        <input
          {...register("lastName", {
            required: true,
            pattern: {
              value: /^[A-Za-z]+$/i,
              message: "last name is not as per the rule",
            },
          })}
        />
        {errors.lastName && <span>{errors.lastName.message}</span>}
        <br />
        <br />
        <input type="submit" value={isSubmitting ? "Submitting" : "submit"} />
      </form>
    </div>
  );
};

export default App;
