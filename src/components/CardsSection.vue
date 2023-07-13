<template>
    <section class="card-section">
        <Card icon="fa-solid fa-rocket">Super makkelijk om te beginnen. Met onze naadloze implementatie nemen wij alle zorgen uit handen</Card>
        <Card icon="fa-solid fa-shield">Ons model garandeert dat er geen risico aan verbonden is, als we je geen resultaten kunnen bezorgen, betaal je niet</Card>
        <Card icon="fa-solid fa-chart-line">Laat ons jou helpen om je winst te verhogen. Verhoog je winst met €54.000 in slechts 7 maanden of minder!</Card>
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
