<template>
  <div class="posts-container">
    <Post v-for="post in allPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Post from "@/components/Post.vue";

export default {
  name: "MainPage",
  components: {
    Post,
  },
  computed: {
    ...mapGetters(["allPosts"]), // Kasutame VueX getterit otse
  },
};
</script>

<style scoped>
.posts-container {
  padding: 20px;
}
</style>
