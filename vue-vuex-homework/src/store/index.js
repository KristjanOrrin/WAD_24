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
      {
        id: 2,
        author: "Jane Smith",
        createTime: "2024-10-03 14:14",
        postBody: "A lovely day in the city center!",
        image: "static/images/raekoda.jpg",
        profileImage: "static/images/profile2.jpg",
        likes: 0,
      },
    ],
  },
  mutations: {
    incrementLikes(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) post.likes++;
    },
  },
  actions: {
    likePost({ commit }, postId) {
      commit("incrementLikes", postId);
    },
  },
  getters: {
    allPosts: (state) => state.posts,
  },
});

export default store;
