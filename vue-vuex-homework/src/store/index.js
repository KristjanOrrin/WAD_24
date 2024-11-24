import { createStore } from "vuex";

const store = createStore({
  state: {
    posts: [
      {
        id: 1,
        author: "John",
        createTime: "2024-10-04 10:36",
        postBody: "Exploring the beauty of Tartu!",
        image: "images/tartu2024.jpg",
        profileImage: "images/profile.jpg",
        likes: 0,
      },
      {
        id: 2,
        author: "Jane Smith",
        createTime: "2024-10-03 14:14",
        postBody: "A lovely day in the city center!",
        image: "images/raekoda.jpg",
        profileImage: "images/profile2.jpg",
        likes: 0,
      },
      {
        id: 3,
        author: "Michael",
        createTime: "2024-10-02 23:11",
        postBody: "Wonderful moments at Raekoda Square.",
        image: "images/raekoda2.jpg",
        profileImage: "images/profile3.jpg",
        likes: 0,
      },
      {
        id: 4,
        author: "Peter",
        createTime: "2024-10-02 11:11",
        postBody: "Shopping spree at Lõunakeskus!",
        image: "images/lounakeskus.jpg",
        profileImage: "images/profile4.jpg",
        likes: 0,
      },
      {
        id: 5,
        author: "Kaur",
        createTime: "2024-10-01 13:11",
        postBody: "Beautiful views of the city!",
        image: "images/linn.jpg",
        profileImage: "images/profile5.jpg",
        likes: 0,
      },
      {
        id: 6,
        author: "Alex Smith",
        createTime: "2024-09-30 17:51",
        postBody: "Enjoying the autumn colors in Tartu.",
        image: "images/autumn.jpg",
        profileImage: "images/profile6.jpg",
        likes: 0,
      },
      {
        id: 7,
        author: "Linda",
        createTime: "2024-09-29 20:23",
        postBody: "Amazing sunset by the river.",
        image: "images/sunset.jpg",
        profileImage: "images/profile7.jpg",
        likes: 0,
      },
      {
        id: 8,
        author: "Harry",
        createTime: "2024-09-28 20:00",
        postBody: "Strolling through the old town.",
        image: "images/oldtown.jpg",
        profileImage: "images/profile8.jpg",
        likes: 0,
      },
      {
        id: 9,
        author: "Emma",
        createTime: "2024-09-27 14:13",
        postBody: "Coffee time in the city!",
        image: "images/coffee.jpg",
        profileImage: "images/profile9.jpg",
        likes: 0,
      },
      {
        id: 10,
        author: "Chris",
        createTime: "2024-09-26 18:50",
        postBody: "Meeting friends at the square.",
        image: "images/square.jpg",
        profileImage: "images/profile10.jpg",
        likes: 0,
      }
    ],
  },
  mutations: {
    incrementLikes(state, postId) {
      const post = state.posts.find((p) => p.id === postId);
      if (post) post.likes++;
    },
    resetLikes(state) {
      state.posts.forEach((post) => {
        post.likes = 0;
      });
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
