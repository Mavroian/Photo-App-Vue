import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    title: "Photo Upload App",
    selectedPhoto: "",
    currentView: "AllPhotos",
    photos: [],
    uploadPercentage: 0
  },
  getters:{
    getCurrentView : =>{
      return state.currentView
    }
  },
  mutations: {
    selectPhoto(state, photo, newView) {
      state.selectedPhoto = photo;
      state.currentView = newView;
    },

    },
    pushPhoto(state,photo) {
      state.photos.push(photo)
    }
  }
});
