<template>
    <section class="proof-section">
        <div class="container">
            <h2>Kijk naar wat onze klanten te zeggen hebben</h2>
            <div class="content">
                <Proof img="/logo-mascot.png" name="jan piet" company="companyXYZ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nisi commodi, maiores sit velit fugiat error exercitationem, 
                    cupiditate quod sed eius tenetur porro repellat illo deserunt perferendis illum hic quas?
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti reiciendis laborum quibusdam unde perspiciati
                </Proof>
            </div>
        </div>
    </section>
</template>

<script setup>
import Proof from './Proof.vue';
</script>

<style scoped>
.proof-section {
    display: flex;
    justify-content: center;
    margin: 0 0 300px 0;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    margin: 0 80px;
    padding: 75px;
    width: 1350px;
    height: 600px;
    background-color: var(--secondary-color);
    border-radius: 15px;
}

.container h2 {
    margin: 0;
    font-size: 2.4rem;
    color: var(--letter-color-light);
}

/* .content {

} */

@media only screen 
and (max-width: 1250px) {
    .proof-section {
        margin: 0 0 200px 0;
    }
}
</style>