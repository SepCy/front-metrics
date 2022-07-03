import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { registerUser } from "../../../redux/actions/authActions";
import RegisterFormView from "./RegisterFormView";

export default function RegisterFormContainer() {
  const authError = useSelector((state) => state.authError);
  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // Importing react-hook-form utilities

  const { register, handleSubmit, watch, formState } = useForm({
    mode: "onChange",
  });

  const { errors } = formState;

  // Use history to push if login
  const history = useHistory();
  //  Dispatch

  const dispatch = useDispatch();

  //   Submitting form

  const onSubmit = async (data, e) => {
    e.preventDefault();
    dispatch(registerUser(data));
  };

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  return (
    <div>
      <RegisterFormView
        handleSubmit={handleSubmit}
        register={register}
        watch={watch}
        errors={errors}
        formState={formState}
        message={authError}
        loading={loading}
        onSubmit={onSubmit}
      />
      <div class="mt-10 opacity-0">khjkj</div>
    </div>
  );
}
