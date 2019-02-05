<template>
  <body-item>
    <div class="row">
      <div class="col-md-2">
        <router-link
          class="btn btn-md btn-primary m-2"
          v-bind:to="{ name: 'home' }"
        >Retourner au menu</router-link>
      </div>
      <div class="card col-md-8">
        <v-img
          class="card-img-top mt-4"
          lazy-src="https://cdn.sat.tv/wp-content/uploads/2016/03/aucune-image-disponible.png"
          contain
          max-height="400px"
          :src="movie.image"
        ></v-img>
        <div class="card-body">
          <h1 class="mt-2 text-primary">{{movie.title}}</h1>
          <h2 class="mt-2 text-primary mb-4">-- {{movie.year}} --</h2>
        </div>
      </div>
      <div class="col-md-2">
        <div class="p-2">
          <h2>Actions</h2>
          <router-link
            class="btn btn-md btn-outline-warning m-2"
            v-bind:to="{ name: 'edit', params: { id: movie.id } }"
          >Modifier</router-link>
          <button class="btn btn-md btn-outline-danger m-2 mb-4" v-on:click="remove()">Supprimer</button>
          <v-rating
                    v-model="movie.grade"
                    small
                    background-color="yellow accent-4"
                    color="yellow accent-4"
                    dense
                    hover
                    size="18"
                  ></v-rating>
        </div>
      </div>
      <div class="  p-0 p-sm-5 col-sm-12">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div class="card m-1">
              <h2 class="text-dark card-title mb-4 font-weight-bold p-1">Synopsys :</h2>
              <p class="text-justify pl-3 pr-3 font-italic">{{movie.synopsys}}</p>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
            <div class="card m-1">
              <h2 class="text-darj card-title mb-4 font-weight-bold p-1">Réalisateur :</h2>
              <director-item class="mb-1" v-bind:director="this.movie.director"></director-item>
            </div>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3 ">
            <div class="card m-1">
              <h2 class="text-dark card-title mb-4 font-weight-bold">Genre :</h2>
              <h4 class="text-primary">{{movie.genre}}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body-item>
</template>

<script>
export default {
  data() {
    return {
      movies: window.shared_data.movies,
      grade: 0
    };
  },
  //props: ["movie"],
  methods: {
    remove: function() {
      this.movies.splice(this.movie.id - 1, 1);
      this.$router.replace({ name: "home" });
    }
  },
  computed: {
    movie: function() {
      return this.movies.find(obj => {
        return obj.id == this.$route.params["id"];
      });
    },
    rating: function() {
      for (var i = 0; i < this.movie.grades.length; i++) {
        this.grade += this.movie.grades[i];
      }
      this.grade = this.grade / this.movie.grades.length;
      return this.grade;
    }
  }
};
</script>

<style>
</style>