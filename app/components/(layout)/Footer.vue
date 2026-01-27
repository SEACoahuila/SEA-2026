<template>
<v-footer 
class="pa-0 "
elevation="2"
absolute
app
>
    <v-card flat tile class="text-center" width="100%" color="#1d2730">
        <v-card-text class="white--text ">
            <v-btn
            size="small"
            color="#1d2730"
            elevation="0"
            v-for="(icon,i) in icons" :href="icon.to" :key="i" class="mx-4 white--text" icon>
                <v-icon size="25px" >
                    {{ icon.icon }}
                </v-icon>
            </v-btn>
        </v-card-text>

        <v-card-text class="white--text pa-0">

        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text pa-2">
            {{ new Date().getFullYear() }} — <strong> 
                Secretaría Ejecutiva del Sistema Anticorrupción del Estado de Coahuila de Zaragoza  </strong> 
        </v-card-text>

    </v-card>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [{
                    icon: 'mdi-facebook',
                    to: 'https://www.facebook.com/seseacoah'
                },
                {
                    icon: 'mdi-twitter',
                    to: 'https://twitter.com/seseacoah?ref_src=twsrc%5Etfw%7Ctwcamp%5Eembeddedtimeline%7Ctwterm%5Escreen-name%3Aseseacoah%7Ctwcon%5Es2'
                },
                {
                    icon: 'mdi-youtube',
                    to: 'https://www.youtube.com/@sistemaanticorrupciondeles8877'
                }
        ],
    }),
}
</script>