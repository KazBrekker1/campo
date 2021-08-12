import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "bootstrap/dist/css/bootstrap.min.css"

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const options = {
	rtl: false,
	icon: true,
	timeout: 5000,
	draggable: true,
	pauseOnHover: false,
	closeOnClick: true,
	closeButton: "button",
	draggablePercent: 0.6,
	hideProgressBar: false,
	pauseOnFocusLoss: false,
	position: "bottom-center",
	showCloseButtonOnHover: false,
}
createApp(App).use(router).use(store).use(Toast, options).mount("#app")
