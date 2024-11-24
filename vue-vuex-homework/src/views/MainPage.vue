<template>
  <div class="posts-container">
    <AppPost v-for="post in allPosts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppPost from "@/components/AppPost.vue";

export default {
  name: "MainPage",
  components: {
    AppPost,
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
