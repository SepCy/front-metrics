import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { getSubscribtionType } from "../../../redux/actions/subscribeActions";

export default function PricingToggle() {
  // React-hook-form utilities
  const { register, handleSubmit, watch, formState } = useForm({
    mode: "onChange",
  });

  const dispatch = useDispatch();

  const [toggle, setToggle] = useState(false);

  const watching = watch("price");

  useEffect(() => {
    watching
      ? dispatch(getSubscribtionType("annuel"))
      : dispatch(getSubscribtionType("mensuel"));
    return () => {
      setToggle("");
    };
  }, [watching, dispatch]);

  return (
    <div class="flex flex-col items-center">
      <div class="mb-8 font-semibold text-xl text-blue-900 opacity-80">
        Type d'abonnement
      </div>
      <div class="flex items-center justify-center w-full mb-12">
        <label for="toogleA" class="flex items-center cursor-pointer">
          <div class="mr-8 text-blue-900 font-medium">Mensuel</div>
          <div class="relative">
            <input
              id="toogleA"
              name="price"
              type="checkbox"
              class="sr-only"
              {...register("price", {
                required: true,
              })}
            />
            <div class="w-10 h-4 bg-blue-200 rounded-full shadow-inner"></div>
            <div class="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div class="ml-8 text-blue-900 font-medium">Annuel</div>
        </label>
      </div>
    </div>
  );
}
