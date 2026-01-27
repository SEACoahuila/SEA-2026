<template>
  <v-container class="">
    <TitlePages :color="page.color" :title="page.title" :icon="page.icon" />
   <v-col>

       <NoticiasCard />
   </v-col>
  </v-container>
</template>

<script setup>
import { collection, query, where, orderBy, limit, getDocs, startAfter, doc, getDoc } from 'firebase/firestore';

const { $db } = useNuxtApp();

const page = ref({
  color: '#178c25',
  title: 'Noticias',
  icon: 'mdi-comma-circle-outline'
});

const publicaciones = ref([]);
const lastVisible = ref(null);
const btnShow = ref(false);
const limitCount = 6; // Reducido para mejor impacto visual inicial

const truncate = (text, length) => text.length > length ? text.substring(0, length) + '...' : text;

const processDocs = async (snapshot) => {
  const news = [];
  for (const pubDoc of snapshot.docs) {
    const data = pubDoc.data();
    let autorData = { nombre: 'SEA Coahuila' };
    
    if (data.autor) {
      const autorSnap = await getDoc(doc($db, "autores", data.autor));
      if (autorSnap.exists()) autorData = autorSnap.data();
    }

    news.push({
      titulo: truncate(data.titulo || '', 40),
      excerpt: truncate(data.excerpt || '', 200),
      imagen: data.imagen,
      enlace: data.documento ? data.contenido : `/publicaciones/nota?id=${pubDoc.id}`,
      autor: autorData
    });
  }
  return news;
};

const getPublicaciones = async () => {
  try {
    const q = query(collection($db, "publicaciones"), where("status", "==", "0"), orderBy("publishAt", "desc"), limit(limitCount));
    const snapshot = await getDocs(q);
    if (!snapshot.empty) {
      lastVisible.value = snapshot.docs[snapshot.docs.length - 1];
      publicaciones.value = await processDocs(snapshot);
      btnShow.value = snapshot.docs.length === limitCount;
    }
  } catch (e) { console.error(e); }
};

const nextPage = async () => {
  if (!lastVisible.value) return;
  const q = query(collection($db, "publicaciones"), where("status", "==", "0"), orderBy("publishAt", "desc"), startAfter(lastVisible.value), limit(limitCount));
  const snapshot = await getDocs(q);
  if (!snapshot.empty) {
    lastVisible.value = snapshot.docs[snapshot.docs.length - 1];
    publicaciones.value.push(...(await processDocs(snapshot)));
    btnShow.value = snapshot.docs.length === limitCount;
  } else { btnShow.value = false; }
};

onMounted(() => getPublicaciones());

// El script de POWR se maneja vía nuxt.config o useHead en Nuxt 4
</script>

<style scoped>
.news-card-premium {
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
  border: 1px solid rgba(0,0,0,0.05) !important;
  background: white;
}

.news-title {
  line-height: 1.2;
  letter-spacing: -0.5px;
}

.leading-relaxed {
  line-height: 1.6 !important;
}

.bottom-gradient {
  background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 40%);
  position: absolute;
  width: 100%;
  height: 100%;
}

.glass-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  color: #2c3e50;
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  z-index: 2;
  border: 1px solid rgba(255,255,255,0.3);
}

.translate-x-icon {
  transform: translateX(6px);
}

.duration-500 {
  transition-duration: 0.5s !important;
}

.min-height-vh {
  min-height: 70vh;
}
</style>