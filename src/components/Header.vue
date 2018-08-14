<template>
    <md-content class="page-header" md-tag="header">
      <section class="page-header--section">
        <div class="page-header--section-content">
          <h1 class="md-display-3 color-white">{{ basics.name }}</h1>
          <h2 class="md-headline">{{ basics.label }}</h2>
          <md-avatar class="page-header-avatar">
              <img :src="basics.picture" :alt="basics.name">
          </md-avatar>
          <address>
              <p>{{ basics.location.city }}, {{basics.location.region}}</p>
              <p><PhoneNumber class="color-white" v-bind:phone="basics.phone"/></p>
              <p><EmailAddress class="color-white" v-bind:email="basics.email" /></p>
          </address>
        </div>
        <div class="page-header--background"></div>
      </section>
    </md-content>
</template>

<script>
import EmailAddress from './EmailAddress'
import PhoneNumber from './PhoneNumber'

export default {
  name: 'Header',
  store: {
    person: 'person'
  },
  components: {
    EmailAddress,
    PhoneNumber
  },
  data: () => {
    return {
      basics: {
        location: {}
      }
    }
  },
  created: function () {
    this.person.get().then(data => {
      this.basics = data
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/colors.scss';

.page-header {
  background-image: url(../assets/img/11906208_1696951587190514_949966272_n.jpg);
  background-position: 50% 100%;
  background-size: cover;
  position: relative;
}

.page-header-avatar {
  min-width: 128px;
  min-height: 128px;
}

.page-header--section {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: $white;
}

.page-header--section-content {
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100%;
  padding: 50px;
}

.page-header--background {
  position: absolute;
  z-index: 0;
  width: calc(100% - 100px);
  height: calc(100% - 100px);
  mix-blend-mode: multiply;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: Gradient 15s ease infinite;
  opacity: 0.5;
}

@keyframes Gradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
