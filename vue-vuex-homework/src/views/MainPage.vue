<template>
  <div class="posts-container">
    <Post v-for="post in allPosts" :key="post.id" :post="post" />
  </div>
  <button @click="resetLikes" class="reset-button">Reset Likes</button>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Post from "@/components/Post.vue";

export default {
  name: "MainPage",
  components: {
    Post,
  },
  computed: {
    ...mapGetters(["allPosts"]), // Kasutame VueX getterit otse
  },
  methods: {
    ...mapActions(["resetAllLikes"]),
    resetLikes() {
      this.resetAllLikes(); // Kutsub VueX-i tegevust, mis lähtestab like count'i
    },
  },
};
</script>

<style scoped>
.posts-container {
  padding: 20px;
}

.reset-button {
  padding: 10px 20px;
  margin-bottom: 20px;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.reset-button:hover {
  background-color: #d32f2f;
}
</style>
