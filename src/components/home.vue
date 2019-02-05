

<template>
  <div>
    <body-item>
      <div
        class="bg-dark m-3"
        style="background-position: center;
               background-repeat: no-repeat;
               background-size: cover; 
               background-attachment: fixed; background-image: url(https://www.nostalgiaproducts.com/wp-content/uploads/2017/08/Popcorn_Large-Lid_shutterstock_71515753-1.jpg);"
      >
        <h1 class="text-dark font-weight-bold  p-3">Ciné-Moi</h1>
        <v-img
          max-height="100px"
          contain
          src="https://purepng.com/public/uploads/large/purepng.com-popcornpopcorncorndent-cornflint-corn-1411528652455cmyft.png"
        ></v-img>
      </div>

      <div class="row mb-5">
        <div class="text-right col-sm-8">
          <input
            placeholder="Chercher un film"
            class="form-control ml-3"
            type="text"
            v-model="search"
          >
        </div>

        <div class="text-center col-sm-4 col-xs-12 text-sm-right">
          <b-btn v-b-toggle.addMovie variant="primary">Ajouter un film</b-btn>
        </div>
      </div>

      <b-collapse id="addMovie" class="mt-2">
        
          <h3 class="alert alert-danger" v-if="error"> Veuillez remplir tous les champs marqués d'un '*'</h3>
        
        <edit-movie-item v-bind:movie="this.movie_to_add" v-bind:director="this.director">
          <div class="text-center col-sm-12">
            <button class="btn btn-primary" v-on:click="newmovie">Ajouter</button>
          </div>
        </edit-movie-item>
      </b-collapse>

      <div class="row">
        <movie-item
          class="col-md-4"
          v-for="(movie, index) in movies_search"
          v-bind:key="movie.title"
          v-bind:movie="movie"
          v-on:remove="remove(index)"
        ></movie-item>
      </div>
    </body-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello",
      movie_to_add: {},
      search: "",
      director: {},
      error: false,
      movies: window.shared_data.movies
    };
  },

  methods: {
    newmovie: function() {
        this.error = false;
      if (this.validSubmit) {
        this.movie_to_add.id = this.getLastId + 1;
        this.movie_to_add.director = this.director;
        this.movies.push(this.movie_to_add);
        this.movie_to_add = {};
        this.director = {};
      }else{
        this.error = true;
      }
    },
    remove: function(index) {
      this.movies.splice(index, 1);
    }
  },

  computed: {
    firstletter: function() {
      return this.message[0];
    },
    movies_search: function() {
      return (
        this.movies.filter(
          m => m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1
        ),
        this.movies.filter(
          m => m.synopsys.toLowerCase().indexOf(this.search.toLowerCase()) != -1
        )
      );
    },
    getLastId: function() {
      return this.movies[this.movies.length - 1].id;
    },
    validSubmit: function() {
      if (
        this.movie_to_add.title &&
        this.movie_to_add.year &&
        this.movie_to_add.synopsys &&
        this.director.lastname &&
        this.director.firstname &&
        this.director.birthdate &&
        this.director.nationality
      )
        return true;
      return false;
    }
  }
};
</script>

<style>
#msg {
  color: red;
}
</style>
