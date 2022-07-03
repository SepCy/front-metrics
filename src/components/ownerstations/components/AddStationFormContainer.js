import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addStation } from "../../../redux/actions/stationActions";
import AddStationFormView from "./AddStationFormView";

export default function AddStationFormContainer() {
  // Getting actual user

  const user = useSelector((state) => state.auth.user);
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
    const station = {
      userId: user._id,
      ...data,
    };
    dispatch(addStation(station));
    history.push("/stations");
    e.preventDefault();
  };

  return (
    <>
      <AddStationFormView
        handleSubmit={handleSubmit}
        register={register}
        watch={watch}
        errors={errors}
        formState={formState}
        // message={authError}
        // loading={loading}
        onSubmit={onSubmit}
      />
    </>
  );
}
