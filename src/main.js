import Vue from 'vue' //librairie "vue" dans node_modules
import VueRouter from 'vue-router'
import app from './app.vue' //fichier app.vue local
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(require('vue-moment'));

import BodyComponent from './components/body.vue'
import MovieItemComponent from './components/movieitem.vue'
import DirectorItemComponent from './components/directoritem.vue'
import DirectorEditItemComponent from './components/editdirectoritem.vue'
import HomeComponent from './components/home.vue'
import EditMovieItemComponent from './components/editmovieitem.vue'
import EditMovieComponent from './components/editmovie.vue'
import MovieInfoComponent from './components/movieinfo.vue'


Vue.component('body-item', BodyComponent);
Vue.component('movie-item', MovieItemComponent);
Vue.component('director-item', DirectorItemComponent);
Vue.component('director-edit-item', DirectorEditItemComponent);
Vue.component('home', HomeComponent);
Vue.component('edit-movie-item', EditMovieItemComponent);
Vue.component('edit-movie', EditMovieComponent);
Vue.component('movieInfo', MovieInfoComponent);

window.shared_data = {
  movies: [
    {
      id: 1,
      title: "L'étrange noël de M. Jack",
      image: "http://fr.web.img2.acsta.net/c_215_290/medias/nmedia/18/62/89/46/18923316.jpg",
      year: 1994,
      director: {
        lastname: "Selick",
        firstname: "Henry",
        nationality: "États-Unis",
        birthdate: "1952-11-30"
      },
      genre: "Animation, fantastique, film musical",
      grade: 4.5,
      languages: ["anglais", "français"],
      synopsys:
        "Jack Skellington, un épouvantail squelettique surnommé « le Roi des citrouilles » (Pumpkin King en version originale), vit dans la ville d'Halloween. En tant que maître de l'épouvante, Jack occupe ses journées à préparer la prochaine fête d'Halloween."
    },
    {
      id: 2,
      title: "Interstellar",
      image: "http://t1.gstatic.com/images?q=tbn:ANd9GcSIVryzUKVaqs-5yb0-uHykg7Ob4rUWFl-Ojl28OvBExh8Xc8GT",
      year: 2014,
      director:
      {
        lastname: "Nolan",
        firstname: "Christopher",
        nationality: "États-Unis",
        birthdate: "1970-07-30"
      }
      ,
      genre: "science-fiction",
      grade: 3.5,
      languages: ["anglais", "français"],
      synopsys:
        "Alors que la Terre se meurt, une équipe d'astronautes franchit un trou de ver apparu près de Saturne conduisant à une autre galaxie, cela dans le but d'explorer un nouveau système stellaire et l'espoir de trouver une nouvelle planète habitable par l'humanité afin de la sauver."
    },
    {
      id: 3,
      title: "Iron Man",
      image: "https://images-na.ssl-images-amazon.com/images/I/515wjJQt2nL._SY445_.jpg",
      year: 2008,
      director:
      {
        lastname: "Favreau",
        firstname: "Jon",
        nationality: "États-Unis",
        birthdate: "1966-10-19"
      },
      genre: "Super-héros",
      grade: 4.5,
      languages: ["anglais", "français"],
      synopsys:
        "Tony Stark, playboy, milliardaire, n'est pas seulement l'héritier des usines d'armement de son père (la Stark Industries), c'est également un inventeur de génie. Alors qu'il est en déplacement en Afghanistan afin de présenter sa dernière création, le missile Jéricho, il est enlevé par des terroristes de l'organisation « Les Dix Anneaux ». Gravement blessé lors de l'attaque, il ne survit que grâce à l'aide d'un scientifique, le professeur Yinsen, qui lui greffe à la poitrine un électro-aimant alimenté par une batterie de voiture afin d’empêcher des éclats d’obus d’atteindre son cœur."
    }
  ]
}

const routes = [
  { path: '/', name: "home", component: HomeComponent },
  { path: '/movie/:id', name: "info", component: MovieInfoComponent },
  { path: '/movie/:id/edit', name: "edit", component: EditMovieComponent }
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  render: h => h(app),
  router
})

