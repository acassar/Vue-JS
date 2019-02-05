<template>
  <body-item>
    <edit-movie-item
      v-bind:movie='this.movie'
      v-bind:director='this.director'
    >
       <div class="text-center col-sm-12">
        <router-link
              class="btn btn-md btn-danger m-2"
              v-bind:to="{ name: 'info' }"
            >Annuler</router-link>
        <button class="btn btn-primary" v-on:click="editMovie">Modifier</button>
      </div>
    </edit-movie-item>
  </body-item>
</template>

    <script>
export default {
  data() {
    return {
      movies: window.shared_data.movies
    };
  },
  methods: {
    editMovie: function() {
      if (this.validSubmit) {
        for (var prop in this.movie_to_edit) {
          this.movie_to_edit[prop] = this.movie[prop];
        }
        this.movie_to_edit.director = this.director;
        this.$router.replace({
          name: "info",
          params: { id: this.movie_to_edit.id }
        });
      }
    },
     validSubmit: function() {
      if (
        this.movie.title &&
        this.movie.year &&
        this.movie.synopsys &&
        this.movie.director.lastname &&
        this.movie.director.firstname &&
        this.movie.director.birthdate &&
        this.movie.director.nationality
      )
        return true;
      return false;
    }
  },
  computed: {
    director: function(){
      return Object.assign({}, this.movie_to_edit.director);
    },
    movie: function() {
      return Object.assign({}, this.movie_to_edit);
    },
    getLastId: function() {
      return this.movies[this.movies.length - 1].id;
    },
    movie_to_edit: function() {
      return this.movies.find(obj => {
        return obj.id == this.$route.params["id"];
      });
    }
  }
};
</script>