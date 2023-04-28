import App from './App'
import uviewPlus from '@/uni_modules/uview-plus'
import store from './store'
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	app.use(uviewPlus).use(store)
	return {
		app
	}
}