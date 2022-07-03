import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AbonnementView from "./AbonnementView";
import { getSubscribe } from "../../redux/actions/subscribeActions";
import { useHistory } from "react-router-dom";
import { CONNEXION } from "../../navigation/CONSTANTS";

export default function AbonnementContainer() {
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();

  const history = useHistory();

  const subscribe = (data) => {
    if (user) {
      const values = {
        id: user._id,
        subscription: data,
      };

      dispatch(getSubscribe(values));
      window.location.reload(true);
    } else {
      history.push(CONNEXION);
    }
  };

  return (
    <div class="mx-auto mt-32">
      <AbonnementView subscribe={subscribe} />
    </div>
  );
}
