 /**
  * Actions responsible for mutating the store state
  */

import * as Auth from "../modules/login/action/login";
import * as Home from "../modules/home/action/home";

export const ActionCreators = Object.assign({},
    Auth,
    Home,
);