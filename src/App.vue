<template>
<div  v-if="invoicesLoaded">
  <div class="app flex">
    <Navigation />
    <div class="app-content flex flex-column">
      <Modal v-if="modalActive"/>
      <transition name="invoice">
        <InvoiceModal v-if="invoiceModal" />
      </transition>
      <router-view />
    </div>
  </div>
</div>
</template>

<script>
import Modal from './components/Modal'
import { mapActions, mapState } from 'vuex';
import InvoiceModal from './components/InvoiceModal';
import Navigation from './components/Navigation';

export default {
  components: {
    Modal,
    InvoiceModal,
    Navigation
  },
  created() {
    this.GET_INVOICES();
  },
  computed: {
    ...mapState(['invoiceModal', 'modalActive', 'invoicesLoaded'])
  },
  methods: {
    ...mapActions(['GET_INVOICES']),
  }
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.app {
  background-color: #141625;
  min-height: 100vh;
  @media (min-width: 900px) {
    flex-direction: row !important;
  }
  .app-content {
    padding: 0 10px;
    flex: 1;
    position: relative;
    @media (min-width: 768px) {
      padding: 0 20px;
    }
  }
}
.mobile-message {
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #141625;
  color: #fff;
  p {
    margin-top: 16px;
  }
}
// animated invoice
.invoice-enter-active,
.invoice-leave-active {
  transition: 0.8s ease all;
}
.invoice-enter-from,
.invoice-leave-to {
  transform: translateX(-700px);
}
button,
.button {
  cursor: pointer;
  padding: 8px 10px;
  border-radius: 30px;
  border: none;
  font-size: 8px;
  margin-right: 8px;
  color: #fff;
  white-space: nowrap;
  @media (min-width: 768px) {
    padding: 16px 24px;
    font-size: 12px;
  }
}
.dark-purple {
  background-color: #252945;
}
.red {
  background-color: #ec5757;
}
.purple {
  background-color: #7c5dfa;
}
.green {
  background-color: #33d69f;
}
.orange {
  background-color: #ff8f00;
}
// utility classes
.flex {
  display: flex;
}
.flex-column {
  flex-direction: column;
}
.container {
  width: 100%;
  padding: 40px 10px;
  max-width: 850px;
  margin: 0 auto;
  @media (min-width: 900px) {
    padding-top: 72px;
  }
}
.nav-link {
  text-decoration: none;
  color: initial;
}
// Status Button Styling
.status-button {
  span {
    @media (max-width: 768px) {
      display: none;
    }
  }
  &::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 0px;
    @media (min-width: 768px) {
      margin-right: 8px;
    }
  }
  font-size: 12px;
  margin-right: 0px;
  align-items: center;
  padding: 5px 5px;
  border-radius: 10px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    padding: 8px 0px;
    margin-right: 30px;
    width: 95px;
  }
}
.paid {
  &::before {
    background-color: #33d69f;
  }
  color: #33d69f;
  background-color: rgba(51, 214, 160, 0.1);
}
.pending {
  &::before {
    background-color: #ff8f00;
  }
  color: #ff8f00;
  background-color: rgba(255, 145, 0, 0.1);
}
.draft {
  &::before {
    background-color: #dfe3fa;
  }
  color: #dfe3fa;
  background-color: rgba(223, 227, 250, 0.1);
}
</style>