<template>
  <div class="carousel-wrapper py-10 ">
    <v-card 
      v-if="items.length > 0" 
      class="glass-card mx-auto overflow-hidden"
      max-width="1200"
      elevation="0"
    >
      <v-carousel
        height="auto"
        hide-delimiter-background
        show-arrows="hover"
        cycle
        interval="5000"
        class="custom-carousel"
      >
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <div class="carousel-content">
            <a 
              v-if="item.to || item.doc" 
              :href="item.doc ? `/img/banners/${item.doc}` : item.to" 
              target="_blank"
              class="banner-link"
            >
              <v-img 
                :src="item.src.startsWith('http') ? item.src : `/img/banners/${item.src}`"
                cover
                class="banner-img"
                aspect-ratio="16/9"
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey-lighten-5"></v-progress-circular>
                  </v-row>
                </template>
              </v-img>
            </a>
            
            <v-img 
              v-else 
              :src="`/img/banners/${item.src}`" 
              cover
              aspect-ratio="16/9"
            ></v-img>
          </div>
        </v-carousel-item>
      </v-carousel>
    </v-card>
  </div>
</template>

<style scoped>
/* Estilos para lograr el diseño más elaborado */

.carousel-wrapper {
  /* Fondo sutil para que el vidrio resalte */
  background: radial-gradient(circle at top right, rgba(var(--v-theme-accent), 0.05), transparent);
}

.glass-card {
  /* Efecto de Vidrio */
  background: rgba(255, 255, 255, 0.4) !important;
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-radius: 24px !important;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.15) !important;
  padding: 12px; /* Espacio para que se vea el borde de vidrio */
}

/* Transición suave para la imagen */
.banner-img {
  transition: transform 0.6s cubic-bezier(0.25, 1, 0.5, 1);
  border-radius: 16px;
}

.banner-link:hover .banner-img {
  transform: scale(1.02); /* Efecto de zoom ligero al pasar el mouse */
}

/* Personalización de los botones del carrusel */
:deep(.v-window__controls) {
  padding: 0 20px;
}

:deep(.v-btn--icon.v-btn--density-default) {
  background: rgba(255, 255, 255, 0.2) !important;
  backdrop-filter: blur(4px);
  color: rgb(39, 45, 58) !important;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Estilo para los indicadores (bolitas) de abajo */
:deep(.v-carousel__controls .v-btn) {
  color: rgb(var(--v-theme-accent)) !important;
  opacity: 0.5;
}

:deep(.v-carousel__controls .v-btn--active) {
  opacity: 1;
  transform: scale(1.2);
}
</style>

<script>
export default {
    data() {
        return {
            items: [

                // {
                //     src: "banner_unodc.png",
                //     doc: "calendario-ipo-sea-coahuila-2018.pdf"
                // },

                // {
                //     src: "banner_unodc.png",
                //     to: "https://www.google.com/"
                // },

                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanners%20p%C3%A1gina%20web%20(12).png?alt=media&token=58896c00-c693-4992-92cf-584acd3ec141",
                    to: "https://www.comisionseacoahuila.mx/procesos/2025/"
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanners%20p%C3%A1gina%20web%20(10).png?alt=media&token=941fdbfd-1df3-4e5d-8f83-f920b4b9900e",
                    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FfhAGuLD6a522k8FYDufB%2Finforme%20sistema%20DIGITAL.pdf?alt=media&token=c9bc8294-d764-4c58-ad2a-467cadf4c032"
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanners%20p%C3%A1gina%20web%20(4).png?alt=media&token=c8b01e99-8283-4718-8341-9fafa144fe4a",
                    to: "https://paa.sesna.gob.mx/"
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanners%20p%C3%A1gina%20web%20(2).png?alt=media&token=8d0209a8-5175-49d1-a310-d42a40757a52",
                    to: "https://www.seacoahuila.org.mx/publicaciones/nota/?id=20240009"
                },

                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanners%20p%C3%A1gina%20web%20(1)%20(1).png?alt=media&token=774cd029-8001-4457-a005-d2b205f0bbae",
                    to: "publicaciones/dibuja-tus-valores-6"
                },
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FBanner%20Programa%20Anual%20de%20Trabajo%20del%20CC%202024%20(1).png?alt=media&token=090078f0-c088-49eb-b32a-574c81c99b2f",
                    to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FONP1aDRsiTSul2p1sFZi%2FPrograma%20Anual%20de%20Trabajo%20del%20CC%202024%20-%202025%20....pdf?alt=media&token=4ab8a15e-8647-4201-841f-36d3f4aa0b45"
                },
                //{
                //    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/I7kmevbBVPO8yR9G0mK9%2FGtaPvRPfu8Kt2ycffOHw%2FWhatsApp%20Image%202024-04-30%20at%2010.08.48.jpeg?alt=media&token=8c4ebaf9-716d-462f-85db-6cc7550e9716",
                //    to: "https://monitorcpc.ccilaguna.org.mx/"
                //},
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FGira%20de%20capacitaci%C3%B3n%20(1).png?alt=media&token=9002d1fc-32b1-45c0-b72c-0d8ae2a19134",
                    to: "publicaciones/capacitacion-municipios"
                },
                //{
                    //src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/STATIC%2FBanner%20Programa%20Anual%20de%20Trabajo%20del%20CC%202024.png?alt=media&token=6cfbbf1b-6caa-4f91-92f3-26bad312033d",
                    //to: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/InformesCC%2FPROGRAMA%20CC.pdf?alt=media&token=640d3267-ab3a-4b6b-8c1d-94ac9d9f9c8e"
                //},
              
                {
                    src: "https://firebasestorage.googleapis.com/v0/b/transparenciaseac.appspot.com/o/pagina_web%2Fgira-municipios-2023.png?alt=media&token=5a4dedfc-1696-49ac-a898-2115c028ff7e",
                    to: "https://seacoahuila.github.io/comunicados/2023-03-13-capacitacion-municipios/"
                },

            ],
        }
    },
}
</script>