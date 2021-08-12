import { createStore } from "vuex"

import teams from "../store/modules/teams"

const store = createStore({
	modules: {
		teams,
	},
})

export default store