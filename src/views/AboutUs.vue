<template>
    <section class="about-us-section">
        <h2>Over ons</h2>
        <div class="about-us">
            <p>
                Wij zijn een toonaangevend leadgeneratie agency gevestigd in Heemskerk dat zich richt op het leveren van kwalitatieve leads aan 
                bedrijven. Met onze op maat gemaakte strategieën en geavanceerde technologieën helpen we bedrijven groeien 
                door middel van effectieve leadgeneratie. 
                <br><br>
                Neem vandaag nog contact met ons op en ontdek hoe we jouw bedrijf kunnen laten groeien!
            </p>
        </div>
    </section>
    <section class="vacancy-section">
        <div class="vacancy">
            <h2>Geïnteresseerd om bij ons te werken?</h2>
            <p>Stuur jouw CV en motivatiebrief door naar</p>
            <div class="etext">
                <a href='&#109;ailt&#111;&#58;info&#64;m&#97;%&#54;9lv%6&#70;&#103;e&#108;%&#50;Enl'>inf&#111;&#64;&#109;&#97;i&#108;vog&#101;l&#46;nl</a>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.about-us-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 5vh 25px 10vh 25px;
}

.about-us-section h2 {
    font-size: 2.6rem;
    color: var(--letter-color-dark)
}

.about-us {
    margin: 0 0 100px 0;
    padding: 35px;
    max-width: 1000px;
    height: auto;
    background-color: var(--primary-color);
    border-radius: 15px;
}

.about-us p {
    font-size: 1.8rem;
    color: var(--letter-color-light)
}

.vacancy-section {
    display: flex;
    justify-content: center;
    margin: 0 0 200px 0;
    padding: 0 20px;
}

.vacancy {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
}

.vacancy h2 {
    margin: 0 0 20px 0;
    font-size: 1.5rem;
    color: var(--letter-color-dark);
}

.vacancy p {
    font-size: 1.1rem
}

.etext a {
    padding: 0 35px;
    border: 1px solid var(--primary-color);
    transition: 0.3s;
}

.etext a:hover {
    background-color: var(--primary-color);
    color: var(--letter-color-light)
}

@media only screen 
and (max-width: 1250px) {
    .vacancy-section {
        margin: 0 0 200px 0;
    }
}

@media only screen 
and (max-width: 500px) {
    .about-us-section h2 {
        font-size: 2rem;
        color: var(--letter-color-dark)
    }

    .about-us p {
        font-size: 1.5rem;
    }
}
</style>
