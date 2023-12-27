export const useAppStore = defineStore('app', {
	state: () => ({
		isSidebarMenuOpen: false,
		scrollbarWidth: null,
	}),

	actions: {
		toggleSidebarMenu() {
			this.isSidebarMenuOpen = !this.isSidebarMenuOpen;
		},

		updateScrollbarWidth() {
			if (!process.client) return;
			this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		}
	},
});
