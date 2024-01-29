import { defineStore } from 'pinia';
import { emitter } from '~/services/MittService';
import ApiService from '~/services/ApiService';

export const useAppStore = defineStore('appStore', {
    state: () => {
        return {
            loader: 0,
			isSidebarMenuOpen: false,
			scrollbarWidth: null,
            siteparams: []
        }
    },
    actions: {
		toggleSidebarMenu() {
			this.isSidebarMenuOpen = !this.isSidebarMenuOpen;
		},
		updateScrollbarWidth() {
			this.scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
		},
        async getSiteParams() {
            this.siteparams = await new ApiService().getSiteparams(); 
        },
        init() {
            emitter.on('loader', (value) => {
                this.loader += value;
            });
        }
    }
});
