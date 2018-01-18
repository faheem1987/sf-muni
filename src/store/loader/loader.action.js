export const loader = bool => {
	return {
		type: "IS_PAGE_LOADING",
		isLoading: bool
	};
};