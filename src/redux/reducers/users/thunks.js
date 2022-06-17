import UsersService from "../../../services/service";
import actions from "./actions";

export const loadUsersAsync = () => (dispatch) => {
  dispatch(actions.usersLoadStart());

  UsersService.getAllUsers()
    .then((response) => dispatch(actions.usersLoadSuccess(response.data)))
    .catch((error) => dispatch(actions.usersLoadError(error.message)));
};
