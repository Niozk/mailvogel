<template>
    <section class="working-section" id="working-section">
        <div class="container">
            <h2>{{ $t("workingSection.H2") }}</h2>
            <div class="content">
                <div class="content-text">
                    <p>
                        {{ $t("workingSection.contentText1") }}
                        <br><br>
                        {{ $t("workingSection.contentText2") }}
                    </p>
                </div>
                <div class="content-stats content-stats-1">
                    <p class="stats">7x</p>
                    <p class="stats-text">{{ $t("workingSection.stats1Text") }}</p>
                </div>
                <div class="content-stats content-stats-2">
                    <p class="stats">90%</p>
                    <p class="stats-text">{{ $t("workingSection.stats2Text") }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
</script>

<style scoped>
.working-section {
    display: flex;
    justify-content: center;
    margin: 0 0 300px 0;
}

.container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin: 0 125px;
}

.container h2 {
    margin: 0;
    font-size: 2.6rem;
    color: var(--letter-color-dark);
}

.content {  
    display: grid;
    grid-template-columns: 1fr 1.2fr 0.8fr;
    grid-template-rows: 1fr 1fr;
    gap: 25px;
    grid-template-areas:
        "content-text content-text content-stats-1"
        "content-text content-text content-stats-2";
}

.content-text {
    grid-area: content-text;
    padding: 25px;
    max-width: auto;
    height: auto;
    font-size: 1.8rem;
    background-color: var(--primary-color);
    border-radius: 15px;
}

.content-text p {
    color: var(--letter-color-light);
}

.content-stats {
    justify-self: end;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 25px;
    width: 225px;
    height: auto;
    background-color: var(--letter-color-light);
    border: 3px solid var(--primary-color);
    border-radius: 15px;
}

.stats {
    font-size: 2.8rem;
    font-weight: bold;
    color: var(--primary-color);
}

.stats-text {
    font-size: 1.6rem;
    color: var(--letter-color-dark);
}

.content-stats-1 {
    grid-area: content-stats-1;
}

.content-stats-2 {
    grid-area: content-stats-2;
}

@media only screen 
and (max-width: 1250px) {
    .working-section {
        margin: 0 0 200px 0;
    }

    .container {
        margin: 0 50px;
    }

    .container h2 {
        font-size: 2rem;
    }

    .content {  
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    .content-stats {
        width: auto;
    }

    .stats {
        font-size: 2.4rem;
    }

    .stats-text {
        font-size: 1.6rem;
    }
}

@media only screen 
and (max-width: 500px) {
    .container {
        margin: 0 25px;
    }

    .container h2 {
        font-size: 1.8rem;
    }

    .content-text {
        font-size: 1.5rem;
    }
}

</style>