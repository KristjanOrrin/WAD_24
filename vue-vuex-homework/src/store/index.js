import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        id: 1,
        author: "John",
        createTime: "2024-10-04 10:36",
        postBody: "Exploring the beauty of Tartu!",
        image: "static/images/tartu2024.jpg",
        profileImage: "static/images/profile.jpg",
        likes: 0,
      },
      // Lisa rohkem postitusi...
    ],
  },
  mutations: {
    incrementLikes(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach((post) => (post.likes = 0));
    },
  },
  actions: {
    likePost({ commit }, postId) {
      commit("incrementLikes", postId);
    },
    resetAllLikes({ commit }) {
      commit("resetLikes");
    },
  },
  getters: {
    allPosts: (state) => state.posts,
  },
});

export default store;
