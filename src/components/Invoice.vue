<template>
  <router-link class="invoice flex" :to="{ name: 'InvoiceView', params: { id: invoice.invoiceId } }">
    <div class="left flex">
      <span class="tracking-number">#{{ invoice.invoiceId }}</span>
      <span class="due-date">{{ invoice.paymentDueDate }}</span>
      <span class="person">{{ invoice.clientName }}</span>
    </div>
    <div class="right flex">
      <span class="price">${{ invoice.invoiceTotal }}</span>
      <div
        class="status-button flex"
        :class="{ paid: invoice.invoicePaid, draft: invoice.invoiceDraft, pending: invoice.invoicePending }"
      >
        <span v-if="invoice.invoicePaid">Paid</span>
        <span v-if="invoice.invoiceDraft">Draft</span>
        <span v-if="invoice.invoicePending">Pending</span>
      </div>
      <div class="icon">
        <img src="@/assets/icon-arrow-right.svg" alt="" />
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "invoice",
  props: ["invoice"],
};
</script>

<style lang="scss" scoped>
.invoice {
  text-decoration: none;
  cursor: pointer;
  gap: 16px;
  margin-bottom: 16px;
  color: #fff;
  border-radius: 20px;
  padding: 8px 10px;
  background-color: #1e2139;
  align-items: center;
  @media (min-width: 768px) {
    padding: 28px 32px;
  }
  span {
    font-size: 13px;
  }
  
  .left {
    align-items: center;
    flex-basis: 100%;
    gap: 5px;
    @media (min-width: 768px) {
      flex-basis: 60%;
      gap: 16px;
    }

    span {
      flex: 1;

    }
    span.person {
        // width: 45px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex: 1 1 60%;
      }
    @media (max-width: 768px) {
      span.due-date {
        flex: 0 0 65px;
      }
      span.person {
        width: 45px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        flex: 1 1 auto;
      }
    }

    .tracking-number {
      text-transform: uppercase;
      @media (max-width: 768px) {
        display: none;
      }
    }
  }

  .right {
    gap: 5px;
    flex-basis: auto;
    align-items: center;
    @media (min-width: 768px) {
      flex-basis: 40%;
      gap: 16px;
    }
    .price {
      flex: 1;
      font-size: 16px;
      font-weight: 600px;
    }
  }
}
</style>
