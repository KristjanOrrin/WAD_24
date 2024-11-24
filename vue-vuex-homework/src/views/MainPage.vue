<template>
  <div>
    <Header />
    <div class="posts">
      <Post v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <button @click="resetLikes">Reset All Likes</button>
    <Footer />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Post from "@/components/Post.vue";

export default {
  components: { Header, Footer, Post },
  computed: {
    ...mapGetters(["allPosts"]),
  },
  methods: {
    resetLikes() {
      this.$store.dispatch("resetAllLikes");
    },
  },
};
</script>
