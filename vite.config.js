import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		VitePWA({
			registerType: "autoUpdate",
			manifest: {
				name: "Camp Organizer",
				short_name: "Camp Organizer",
				start_url: "/",
				background_color: "#2c3e50",
				description: "An App for monitoring your Camp Events",
				icons: [
					{
						src: "icon-48x48.png",
						sizes: "48x48",
						type: "image/png",
					},
					{
						src: "icon-72x72.png",
						sizes: "72x72",
						type: "image/png",
					},
					{
						src: "icon-96x96.png",
						sizes: "96x96",
						type: "image/png",
					},
					{
						src: "icon-144x144.png",
						sizes: "144x144",
						type: "image/png",
					},
					{
						src: "icon-192x192.png",
						sizes: "192x192",
						type: "image/png",
					},
					{
						src: "icon-512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
				],
			},
		}),
	],
})
