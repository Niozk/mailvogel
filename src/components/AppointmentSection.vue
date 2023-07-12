<template>
    <section class="appointment-section" id="appointment-section">
        <div class="container">
            <h2>Waar wacht je op? maak een afspraak!</h2>
            <div class="content">
                <div class="calendly-inline-widget" data-url="https://calendly.com/mailvogel/30min?hide_event_type_details=1" style="min-width:320px;height:600px;"></div>
            </div>
            <div class="etext">
                <p>Vragen? Stuur een email naar:</p>
                <a href='&#109;ailt&#111;&#58;info&#64;m&#97;%&#54;9lv%6&#70;&#103;e&#108;%&#50;Enl'>inf&#111;&#64;&#109;&#97;i&#108;vog&#101;l&#46;nl</a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
});
</script>

<style scoped>
.appointment-section {
    display: flex;
    justify-content: center;
    margin: 0 0 300px 0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
}

.container h2 {
    margin: 0;
    font-size: 2.6rem;
    color: var(--letter-color-dark);
    text-align: center;
}

.content {
    display: flex;
    align-items: center;
    padding: 50px;
    border: 3px solid var(--primary-color);
    border-radius: 15px;
}

.etext {
    display: flex;
    flex-direction: column;
    gap: 15px;
    text-align: center;
}

.etext p {
    font-size: 1.1rem
}

.etext a {
    border: 1px solid var(--primary-color);
    transition: 0.3s;
}

.etext a:hover {
    background-color: var(--primary-color);
    color: var(--letter-color-light)
}

@media only screen 
and (max-width: 1250px) {
    .appointment-section {
        margin: 0 0 200px 0;
    }

    .container {
        gap: 50px;
    }
    
    .container h2 {
        font-size: 2rem;
    }
}

@media only screen 
and (max-width: 500px) {
    .container h2 {
        font-size: 1.8rem;
    }

    .content {
        padding: 5px;
    }
}
</style>
