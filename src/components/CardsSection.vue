<template>
    <section class="card-section">
        <Card icon="fa-solid fa-rocket">{{ $t("cardsSection.card1") }}</Card>
        <Card icon="fa-solid fa-shield">{{ $t("cardsSection.card2") }}</Card>
        <Card icon="fa-solid fa-chart-line">{{ $t("cardsSection.card3") }}</Card>
    </section>
</template>

<script setup>
import Card from './Card.vue';
</script>

<style scoped>
.card-section {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin: 0 0 300px 0;
}

@media only screen 
and (max-width: 1250px) {
    .card-section {
        flex-direction: column;
        justify-content: unset;
        align-items: center;
        margin: 0 0 200px 0;
    }
}
</style>
