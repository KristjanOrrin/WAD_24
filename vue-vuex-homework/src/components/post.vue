<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.profileImage" class="profile-pic" />
      <p>{{ post.createTime }}</p>
    </div>
    <div class="post-body">
      <p>{{ post.postBody }}</p>
      <img :src="post.image" class="post-image" />
      <button @click="likePost">Like ({{ post.likes }})</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: ["post"],
  methods: {
    likePost() {
      this.$store.dispatch("likePost", this.post.id);
    },
  },
};
</script>

<style scoped>
.post {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
}
.profile-pic {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.post-image {
  width: 100%;
  margin-top: 10px;
}
</style>
