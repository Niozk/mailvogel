<template>
    <section class="card-section">
        <Card icon="fa-solid fa-receipt">Super makkelijk om in werking te krijgen, geen geknoei geen geknetter wij doen het allemaal</Card>
        <Card icon="fa-solid fa-receipt">Super makkelijk om in werking te krijgen, geen geknoei geen geknetter wij doen het allemaal</Card>
        <Card icon="fa-solid fa-receipt">Super makkelijk om in werking te krijgen, geen geknoei geen geknetter wij doen het allemaal</Card>
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
