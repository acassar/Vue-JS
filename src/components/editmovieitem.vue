<template>
  <div class="row mb-4 border p-2 bg-dark text-white">
    <div class="col-sm-6">
      <div class="m-3">
        <label for="title">Titre : *</label>
        <input required id="title" class="form-control" type="text" v-model="movie.title">
        <label for="year">Année de sortie :*</label>
        <input required id="year" class="form-control" type="number" v-model="movie.year">
        <label for="genre">Genre *</label>
        <input required id="genre" class="form-control" type="text" v-model="movie.genre">
        <label for="synopsys">Synopsys *</label>
        <textarea required id="synopsys" class="form-control" v-model="movie.synopsys"></textarea>
        <div class="mt-4 border-top">
          <h5>Directeur : </h5>
          <director-edit-item v-bind:director="this.director"></director-edit-item>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <p class="row m-3">
        Couverture du film (url):
        <input v-model="movie.image" class="form-control">
      </p>
      <v-img
        lazy-src="https://cdn.sat.tv/wp-content/uploads/2016/03/aucune-image-disponible.png"
        contain
        max-width="300px"
        max-height="450px"
        :src="movie.image"
      ></v-img>
    </div>
    <slot></slot>
  </div>
</template>

    <script>
export default {
  data() {
    return {
      movies: window.shared_data.movies,
      imgURL: ""
    };
  },
  props: ["movie", "director"],
  methods: {},
  computed: {}
};
</script>