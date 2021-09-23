<template>
  <section class="joke__container">
    <img class="joke__img" :src="joke.icon_url" alt="" />
    <span class="joke__text">{{ joke.value }}</span>
    <div class="joke__actions">
      <div>
        <btn v-if="!favorite" @click="addToFavorite">Add to Favorite</btn>
        <btn v-else @click="$emit('removeFromFavorite', joke)">
          Remove from Favorite
        </btn>
      </div>
    </div>
  </section>
</template>

<script>
import Btn from '@/components/module/Btn'

export default {
  components: { Btn },
  props: {
    joke: {
      type: Object,
      required: true,
    },
    favorite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    addToFavorite() {
      const favoriteJson = sessionStorage.getItem('favorite')
      try {
        if (favoriteJson) {
          let favorite = JSON.parse(favoriteJson)
          if (Array.isArray(favorite) && favorite.length > 0) {
            if (favorite.find((joke) => this.joke.id === joke.id)) return
            favorite.push({
              id: this.joke.id,
              icon_url: this.joke.icon_url,
              value: this.joke.value,
            })
          } else {
            favorite = [
              {
                id: this.joke.id,
                icon_url: this.joke.icon_url,
                value: this.joke.value,
              },
            ]
          }

          this.$emit('addFavorite', favorite)
        } else {
          this.$emit('addFavorite', [
            {
              id: this.joke.id,
              icon_url: this.joke.icon_url,
              value: this.joke.value,
            },
          ])
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.joke__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100%;
  margin: 16px;
  padding: 16px;
  border-radius: 4px;
  background-color: #0af0dd;
}
.joke__text {
  padding: 16px 0 0;
  text-align: center;
}
.joke__actions {
  margin: 16px 0;
}
</style>