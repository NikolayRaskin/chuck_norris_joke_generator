<template>
  <section class="new-joke__container">
    <div class="new-joke__block">
      <span v-if="loading">Loading...</span>
      <div v-else>
        <h1>There is a new Joke :)</h1>
        <template v-if="joke && joke.id">
          <Joke :joke="joke" @addFavorite="addFavorite" />
          <btn @click="getJoke"> New Joke </btn>
        </template>
        <span v-else>Empty!</span>
      </div>
    </div>
    <template v-if="favorites.length > 0">
      <h2>There are favorite Jokes</h2>
      <div class="favorites-list">
        <Joke
          v-for="favorite in favorites"
          :key="favorite.id"
          :joke="favorite"
          favorite
          @removeFromFavorite="removeFromFavorite"
        />
      </div>
    </template>
    <Modal v-if="showModal" @close="showModal = false">
      <template #header> Modal after 10 sec </template>
      <template #body> This is a test modal </template>
    </Modal>
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Btn from '@/components/module/Btn'
import Modal from '@/components/module/Modal'

export default {
  components: { Btn, Modal },
  data() {
    return {
      loading: true,
      favorites: [],
      showModal: false,
    }
  },
  computed: {
    ...mapState('joke', ['joke']),
  },
  async mounted() {
    this.getFavorites()
    this.loading = true
    await this.fetchRandomJoke({
      $axios: this.$axios,
    })
    this.loading = false
    setTimeout(() => {
      this.showModal = true
    }, 10000)
  },
  methods: {
    ...mapActions('joke', ['fetchRandomJoke', 'fetchJokeById', 'searchJoke']),
    async getJoke() {
      this.loading = true
      await this.fetchRandomJoke({
        $axios: this.$axios,
      })
      this.loading = false
    },
    getFavorites() {
      try {
        this.favorites = JSON.parse(sessionStorage.getItem('favorite'))
      } catch (error) {
        console.log(error)
      }
    },
    addFavorite(favorite) {
      try {
        sessionStorage.setItem('favorite', JSON.stringify(favorite))
        this.favorites = favorite
      } catch (error) {
        console.log(error)
      }
    },
    removeFromFavorite(favorite) {
      try {
        const favorites = this.favorites.filter(
          (item) => item.id !== favorite.id
        )
        sessionStorage.setItem('favorite', JSON.stringify(favorites))
        this.favorites = favorites
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.new-joke__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
  }
}
.new-joke__block {
  min-height: 350px;
}
.favorites-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>