import React, { useEffect } from "react";
import useForm from "../hooks/useForm";
const Home = () => {
  const [values, handleChange] = useForm({ username: "", password: "" });

  useEffect(() => {
    console.log(values);
  }, [values.username]);

  useEffect(() => {
    const params = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    fetch(`http://localhost:3000/api/students/`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((e) => console.error(e));
  }, []);
  return (
    <div>
      <>
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          values={values.password}
          onChange={handleChange}
        />
      </>
    </div>
  );
};

export default Home;
