<template>
    <v-container class="min-height-vh">

        <v-row>
            <v-col>
                <v-alert :color="page.color" class="mx-auto text-justify" border="top" colored-border elevation="2"
                    :icon="page.icon" prominent>

                    <div align="center" class="mb-5 text-xl-h1 text-md-h3 text-h4">{{ page.title }}</div>

                </v-alert>

                <v-card class="mt-3 pa-10" color="article">
                    <v-col aling="center" justify="center">

                        <!--<v-col align="center" class="mb-5 text-xl-h3 text-md-h4 font-weight-bold">Capacita SAEC a los 38 municipios en materia de la Política Estatal Anticorrupción de Coahuila</v-col>-->
                        
                        <v-img src="https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FCapacitaciones%2FCaptura%20de%20pantalla%20(1217).jpg?alt=media&token=9d0e5c5f-2bf3-4332-9cbb-364ee7947f62"></v-img>
                        
                        <v-col align="center" class="mb-5 text-xl-h"> 
                            <br> <br>Saltillo, Coahuila a 29 de enero de 2024.- Los integrantes del Sistema Anticorrupción del Estado de Coahuila de Zaragoza concluyeron con éxito las reuniones de trabajo virtuales que abarcaron las cinco regiones del estado, llevadas a cabo del 22 al 29 de enero del presente año. El objetivo principal de esta iniciativa fue capacitar a servidores públicos de los municipios de Coahuila de Zaragoza en relación con la Política Estatal Anticorrupción.
                            
                            <br> <br>La Política Estatal Anticorrupción (PEAC) es el documento rector que guía los esfuerzos de las instituciones públicas y ciudadanas en materia de prevención, control y combate de los hechos de corrupción.
                           
                            <br> <br>Los destacados expositores que participaron en estas sesiones fueron:  
                            <br> <br>● Dr. Miguel Crespo Alvarado: Presidente del Comité Coordinador del Sistema Anticorrupción del Estado de Coahuila de Zaragoza. 
                            <br> <br>● C.P. Juan Carlos Guzmán Escobedo: Consejero de Participación Ciudadana del Sistema Estatal Anticorrupción.  
                            
                            <br> <br>Asimismo se contó en todo momento con el acompañamiento de la Lic. Elidé A. Acosta Reyes, Secretaria Técnica de la Secretaría Ejecutiva del Sistema Estatal Anticorrupción.
                            
                            <br> <br>Durante esta gira se llevaron a cabo reuniones virtuales con una duración aproximada de una hora y media, capacitando a más de 500 servidores públicos de los 38 municipios.
                            
                            <br> <br>En la presentación se compartieron las prioridades estratégicas, haciendo énfasis en aquellas que requerirán cooperación o acciones específicas de los municipios, todos estos trabajos son en pro de la construcción de la implementación de la PEAC. </v-col>
                        <v-divider></v-divider>
                       
                        
                        <v-row class="mt-3">
                            <v-card class="mx-auto mb-3 mt-6" max-width="" v-for="cat in capacitaciones">
                                <!-- <v-col align="center" class=" text-xl-h2 text-md-h3 text-sm-h4 font-weight-bold">
                                    {{ cat.titulo }}
                                </v-col> -->


                                <v-img :width="500" :src="cat.img" height=""></v-img>

                       
                             


                            </v-card>
                       
                            
                        </v-row>
                         
                        <v-divider class="mt-8"></v-divider>



                    </v-col>
                

                </v-card>




            </v-col>
        </v-row>
    </v-container>
</template>
    
<script>
export default {
    name: 'publicaciones',



    data() {
        return {
            page: {
                color: 'blue lighten-2',
                title: 'Capacita SAEC a los 38 municipios en materia de la Política Estatal Anticorrupción de Coahuila.',
                icon: 'mdi-comma-circle-outline'
            },
            capacitaciones: [
               {
                img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FCapacitaciones%2FCaptura%20de%20pantalla%20(1232).jpg?alt=media&token=084c7133-c21f-411c-aa6b-7027082cfd39'
               },
               {
                img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FCapacitaciones%2FCaptura%20de%20pantalla%20(1189).jpg?alt=media&token=cd927600-cca5-4726-b13c-5b4155d770f6'
               },
               {
                img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FCapacitaciones%2FCaptura%20de%20pantalla%20(1240).jpg?alt=media&token=76bdbe65-6e3a-436f-bf1c-93ce1d55638a'
               },
               {
                img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FCapacitaciones%2FCaptura%20de%20pantalla%20(1253).jpg?alt=media&token=62a8b9ae-28dc-4035-8d5e-4f02b4002db9'
               },
               {
                img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FCapacitaciones%2FCaptura%20de%20pantalla%20(1256).jpg?alt=media&token=76c1d7c9-7ea1-4a1d-a2d5-2a15c2f3e1ff'
               },
               {
                img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FCapacitaciones%2FCaptura%20de%20pantalla%20(1197).jpg?alt=media&token=861a391a-4eb4-4e3b-b921-a29d741dcdf8'
               }
            ]
       
        }

    },

}
</script>
    
<style lang="scss" scoped>
.min-height-vh {
    min-height: 70vh;
}
</style>