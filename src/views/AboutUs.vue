<template>
    <section class="about-us-section">
        <h2>{{ $t("aboutUsSection.H2") }}</h2>
        <div class="about-us">
            <p>
                {{ $t("aboutUsSection.contentText1") }}
                <br><br>
                {{ $t("aboutUsSection.contentText2") }}
            </p>
        </div>
    </section>
    <section class="vacancy-section">
        <div class="vacancy">
            <h2>{{ $t("vacancySection.H2") }}</h2>
            <p>{{ $t("vacancySection.etext") }}</p>
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
