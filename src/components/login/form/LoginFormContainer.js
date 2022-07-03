import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loadUser, login } from "../../../redux/actions/authActions";
import LoginFormView from "./LoginFormView";

export default function LoginFormContainer() {
  const authError = useSelector((state) => state.authError);
  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // Use history to push if login
  const history = useHistory();
  //  Dispatch

  const dispatch = useDispatch();

  const { register, handleSubmit, watch, formState } = useForm({
    mode: "onChange",
  });

  const { errors } = formState;

  //   Submitting form

  const onSubmit = async (data, e) => {
    e.preventDefault();
    dispatch(login(data));
  };
  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  }, [isAuthenticated, history]);

  return (
    <LoginFormView
      handleSubmit={handleSubmit}
      register={register}
      watch={watch}
      errors={errors}
      formState={formState}
      message={authError}
      loading={loading}
      onSubmit={onSubmit}
    />
  );
}
