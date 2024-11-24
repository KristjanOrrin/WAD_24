<template>
  <div class="post">
    <div class="post-header">
      <img :src="post.profileImage" alt="Profile" class="profile-pic" />
      <p>
        <strong>{{ post.author }}</strong> - {{ post.createTime }}
      </p>
    </div>
    <div class="post-body">
      <p>{{ post.postBody }}</p>
      <img :src="post.image" alt="Post" class="post-image" />
    </div>
    <div class="post-footer">
      <button @click="likePost">Like ({{ post.likes }})</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPost",
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    likePost() {
      this.$store.dispatch("likePost", this.post.id);
    },
  },
};
</script>

<style scoped>
.post {
  border: 1px solid #ddd;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
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
