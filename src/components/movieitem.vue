<template>
  <div>
    <a v-on:click="infos">
      <div class="list-group-item-action list-group-item mb-4 ">
        <div class="m-3">
          <v-img lazy-src="https://cdn.sat.tv/wp-content/uploads/2016/03/aucune-image-disponible.png" contain max-height="450px" :src="movie.image"></v-img>
          <h2>{{movie.title}}</h2>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: ["movie"],
  methods: {
    infos: function() {
      this.$router.push({ name: "info", params: { id: this.movie.id } });
    }
  }
};
</script>

<style>
</style>