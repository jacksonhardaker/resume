<template>
  <md-app id="app" md-waterfall md-mode="flexible">
    <md-app-toolbar class="md-large md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>
        </div>
      </div>

      <div class="md-toolbar-row md-toolbar-offset">
        <Header/>
      </div>
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-content>
      <p>Bacon ipsum dolor amet chicken burgdoggen short ribs brisket pig. Biltong salami turducken flank tenderloin cupim picanha short ribs burgdoggen shank. Capicola cow picanha flank pork pig doner t-bone porchetta tenderloin prosciutto. Short ribs jerky chicken prosciutto hamburger, beef pork loin drumstick salami meatball brisket.</p>
      <p>Chuck leberkas beef strip steak salami meatball tenderloin ham turkey spare ribs meatloaf shoulder pork loin biltong ribeye. Fatback ball tip hamburger, pork loin alcatra pork belly sausage. Pork belly pig hamburger, tenderloin ball tip fatback pastrami drumstick shankle. Fatback tenderloin salami, pork ham t-bone jerky turkey short loin tongue meatloaf tail. Frankfurter alcatra tail pastrami.</p>
      <p>Fatback jowl t-bone, alcatra brisket cupim pork biltong pork loin tenderloin burgdoggen. Ball tip jerky leberkas, doner bacon porchetta bresaola spare ribs alcatra frankfurter. Pig chicken pork belly andouille chuck corned beef jerky strip steak ribeye ham salami shoulder fatback ground round meatloaf. Short loin tenderloin jerky drumstick andouille.</p>
      <p>Pork loin meatball turkey, t-bone andouille flank prosciutto pork chop bacon boudin cupim strip steak ham hock bresaola. Bacon pork chop cow beef pastrami. Strip steak frankfurter alcatra beef ribs shankle t-bone. Rump cow andouille, strip steak shank doner buffalo turducken chuck boudin venison salami pig fatback. Pork loin filet mignon tail, pastrami pancetta spare ribs ham capicola shoulder.</p>
      <p>Shoulder spare ribs prosciutto, venison strip steak kevin pig t-bone pork chop swine alcatra. Jowl turkey ribeye meatball biltong. Ham hock andouille short ribs pig brisket kielbasa spare ribs pork pancetta bacon tongue buffalo. Swine pastrami capicola, hamburger landjaeger pork pork loin. Landjaeger kielbasa buffalo, jowl tail venison filet mignon. Short ribs tail corned beef, landjaeger t-bone hamburger pork loin chicken drumstick kevin kielbasa spare ribs. Meatball pork loin capicola swine shoulder.</p>
    </md-app-content>
  </md-app>
</template>

<script>

import Header from './components/Header'

export default {
  name: 'App',
  store: {
    store: 'store'
  },
  components: {
    Header
  },
  data: () => ({
    menuVisible: false
  })
}
</script>

<style lang="scss" scoped>
  .md-app-toolbar {
    height: 300px;
  }
</style>
