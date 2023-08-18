import React, { useContext } from "react";

import { AuthContext } from "../providers/AuthProvider";

export const useAuth = () => {
	const auth = useContext(AuthContext);

	if (!auth) {
		throw Error('useAuth needs to be used inside AuthContext  Provider');
	}
	return auth;
};