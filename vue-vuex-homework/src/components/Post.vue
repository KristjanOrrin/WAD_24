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
      <div class="like-button" @click="likePost">
        <img src="images/heart.png" alt="Like" class="like-icon" />
        <span>{{ post.likes }}</span>
      </div>
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
  margin: 10px 10%;
  border-radius: 15px;
  background-color: #e98181;
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

.post-footer {
  margin-top: 10px;
}

.like-button {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}

.like-icon {
  width: 24px;
  height: 24px;
  transition: transform 0.2s;
}

.like-icon:hover {
  transform: scale(1.2);
}

span {
  font-size: 14px;
  color: #555;
}
</style>
