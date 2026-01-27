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

                        <!-- <v-col align="center" class="mb-5 text-xl-h3 text-md-h4 font-weight-bold">¡ᴀɴᴜɴᴄɪᴀᴍᴏs ᴀ ʟᴏs ᴛᴀʟᴇɴᴛᴏsᴏs ɢᴀɴᴀᴅᴏʀᴇs ᴅᴇʟ ᴄᴏɴᴄᴜʀsᴏ "ᴅɪʙᴜᴊᴀ ᴛᴜs ᴠᴀʟᴏʀᴇs"!</v-col>
                        <v-col align="center" class="mb-5 text-xl-h">𝐿𝑎 𝐹𝑖𝑠𝑐𝑎𝑙í𝑎 𝐸𝑠𝑝𝑒𝑐𝑖𝑎𝑙𝑖𝑧𝑎𝑑𝑎 𝑒𝑛 𝐷𝑒𝑙𝑖𝑡𝑜𝑠 𝑝𝑜𝑟 𝐻𝑒𝑐ℎ𝑜𝑠 𝑑𝑒 𝐶𝑜𝑟𝑟𝑢𝑝𝑐𝑖ó𝑛 𝑑𝑒𝑙 𝐸𝑠𝑡𝑎𝑑𝑜 𝑑𝑒 𝐶𝑜𝑎ℎ𝑢𝑖𝑙𝑎 da a conocer a los brillantes artistas que han sido galardonados en la quinta edición del inspirador concurso 𝐃𝐢𝐛𝐮𝐣𝐚 𝐭𝐮𝐬 𝐯𝐚𝐥𝐨𝐫𝐞𝐬.
                            <br> <br>Este concurso ha sido concebido con la firme convicción de que el arte puede ser un poderoso medio para transmitir mensajes significativos. A través de la creatividad y la expresión visual, buscamos inspirar reflexiones profundas sobre los valores fundamentales que sustentan una sociedad justa y equitativa.</v-col>
                        <v-divider></v-divider> -->
                       
                        
                        <v-row class="mt-3">
                            <v-card class="mx-auto mb-3 mt-6" max-width="" v-for="cat in categorias">
                                <v-col align="center" class=" text-xl-h2 text-md-h3 text-sm-h4 font-weight-bold">
                                    {{ cat.titulo }}
                                </v-col>


                                <v-img :src="cat.img" height=""></v-img>

                       
                             


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
                title: 'Dibuja tus valores 6° edición',
                icon: 'mdi-comma-circle-outline'
            },
            categorias: [
               {
                titulo: '',
                img: 'https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FkyYlvOBrjgH7F3p5TbcE%2FWhatsApp%20Image%202024-09-09%20at%2013.57.12.jpeg?alt=media&token=a855e4c1-fc01-40eb-b812-b301a842dc68'
               },
               
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
    