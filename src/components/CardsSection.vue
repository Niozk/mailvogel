<template>
    <section class="card-section">
        <div class="animate-stagger">
            <Card icon="fa-solid fa-rocket">{{ $t("cardsSection.card1") }}</Card>
        </div>
        <div class="animate-stagger">
            <Card icon="fa-solid fa-shield">{{ $t("cardsSection.card2") }}</Card>
        </div>
        <div class="animate-stagger">
            <Card icon="fa-solid fa-chart-line">{{ $t("cardsSection.card3") }}</Card>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from 'vue';
import { animate, stagger, inView } from "motion"
import Card from './Card.vue';

onMounted(() => {
    inView('.card-section', () => {
        animate(
            ".animate-stagger",
            { opacity: [0, 1] },
            {
                delay: stagger(0.4),
                duration: 1,
                easing: [.22, .03, .26, 1]
            }
        )
    })
});
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
