# Plan de trabajo web EIMA

Fecha: 2026-04-17

Objetivo de este documento: tener un mapa claro de la web actual, decidir cambios por partes y evitar rehacer la misma conversacion una y otra vez.

## Reglas de trabajo

- No tocar toda la web a la vez.
- Trabajar por pagina y por seccion.
- Separar contenido, imagenes, diseno, animaciones y parte tecnica.
- Cada cambio debe quedar aprobado visualmente antes de pasar al siguiente bloque grande.
- Este documento es la referencia principal: si una idea queda aqui, no hace falta repetirla en cada conversacion.

## Formato recomendado para pedir cambios

```text
Pagina:
Seccion:
Que esta mal:
Que quiero:
Prioridad:
Referencia:
```

Ejemplo:

```text
Pagina: Inicio
Seccion: Hero
Que esta mal: la imagen no representa el servicio y el texto no acaba de sonar nuestro.
Que quiero: algo mas cercano, claro y emocional, manteniendo fisioterapia a domicilio en Mallorca.
Prioridad: Alta
Referencia: la web original, pero mas elegante y menos generica.
```

## Prioridades

- P0: bloquea lanzar o puede dar mala imagen importante.
- P1: muy visible, conviene resolver pronto.
- P2: mejora importante, pero puede esperar.
- P3: detalle fino o pulido final.

## Estado tecnico actual

- Proyecto local: `C:\Users\usuario\Documents\Codex\eima`
- Servidor local: `http://127.0.0.1:5173/`
- Stack: SvelteKit, Svelte, Tailwind, MDSvex, Nodemailer, Vercel.
- Dependencias instaladas.
- La web se puede ver en local.
- `npm run check` falla por errores de tipos en varios archivos JavaScript/Svelte. No bloquea revisar el diseno, pero conviene arreglar antes de cerrar el proyecto.
- `npm run build` compila casi todo, pero en Windows falla al final con un enlace simbolico del adaptador de Vercel. Puede ser problema de permisos/modo desarrollador de Windows. Revisar antes de desplegar.
- `npm audit` avisa de 3 vulnerabilidades. Revisar mas adelante, no mezclar con contenido/diseno.

## Inventario general

### Layout global

Archivos principales:

- `src/routes/+layout.svelte`
- `src/lib/components/Header.svelte`
- `src/lib/components/MobileMenu.svelte`
- `src/lib/components/Footer.svelte`

Secciones:

- Cabecera con logo, menu principal y boton "Llamanos".
- Menu movil.
- Pie con logo, enlaces, contacto, Instagram y legales.

Problemas visibles:

- P1: revisar si los enlaces del menu coinciden con la estructura final que quieres.
- Hecho: el menu de escritorio ya incluye Blog.
- P1: tono y textos del footer parecen provisionales: "Hablemos", "Creado con amor en Mallorca".
- P2: revisar si los botones redondos y microinteracciones encajan con la identidad final.
- P2: confirmar telefono, email e Instagram definitivos.

### Inicio `/`

Archivo:

- `src/routes/+page.svelte`

Secciones actuales:

- Hero.
- Para quien es.
- Beneficios / propuesta de valor.
- Proceso de trabajo.
- Zona de cobertura.
- Franja "salud y tiempo".
- Equipo.
- Formulario de contacto.
- Preguntas frecuentes.

Problemas visibles:

- P0: validar textos. Hay contenido que puede sonar inventado o demasiado cerrado sin confirmacion profesional.
- P1: se repite la misma imagen `hero.jpg` en hero, proceso, paginas internas y franja visual.
- P1: faltan imagenes reales o intencionales para equipo, proceso, ubicacion y servicio.
- P1: la seccion de equipo usa iconos placeholder en lugar de fotos.
- P1: la zona de cobertura usa un icono de mapa placeholder, no un mapa o recurso visual propio.
- P1: las animaciones actuales son minimas: hover en botones/tarjetas y acordeon FAQ con slide.
- P1: revisar diferencia con la home original: la original incluye algunas ideas que aqui no estan, como "Nos adaptamos a ti, no al reves" y una CTA de "Quiero estar informado".
- P2: revisar orden de secciones. La home local esta completa, pero puede no coincidir con el flujo emocional que tienes en la cabeza.
- P2: revisar si el bloque "salud y tiempo" debe ser protagonista, separador o desaparecer.
- P2: revisar si las FAQs deben ser tan largas, mas visuales o estar divididas por temas.

### Hero de inicio

Archivo:

- `src/lib/components/sections/HeroSection.svelte`

Contenido actual:

- Mensaje principal: "Menos limitaciones. Mejor vida. Desde casa."
- Servicio: ejercicio y fisioterapia a domicilio en Mallorca para personas con cancer y dolor cronico.
- CTAs: "Cuentanos tu caso" y WhatsApp.
- Fondo: `static/hero.jpg`.

Problemas visibles:

- P1: confirmar si la imagen representa de verdad EIMA.
- P1: revisar el tono: es claro, pero puede ser demasiado parecido a una landing generica.
- P1: falta una animacion de entrada si quieres una experiencia mas cuidada.
- P2: decidir si el hero debe parecerse mas a la web original o tomar una direccion nueva.

### Para quien es

Archivos:

- `src/lib/components/sections/AudienceSection.svelte`
- `src/lib/data/audience.ts`

Contenido actual:

- Tres situaciones: empiezo desde cero, quiero hacerlo bien, quiero moverme pero algo me frena.
- Tarjetas con letras A/B/C, frase entrecomillada, linea separadora, texto final y CTA "Ver si es para mi".
- Entrada de tarjetas al hacer scroll con desvanecido y pequeno retraso de izquierda a derecha.
- Hover de tarjeta con escala, marco azul claro y animacion del CTA.
- Frase final: "3 situaciones diferentes. Pero un objetivo en comun: Recuperar su autonomia."

Problemas visibles:

- P1: validar si estos tres perfiles son los definitivos.
- P1: revisar frases en primera persona. Pueden funcionar, pero conviene que salgan de vuestra voz real.
- P2: comprobar visualmente en movil cuando toque pulido responsive.
- P2: revisar si el CTA debe ir a Contacto o directamente a WhatsApp.

### Beneficios / propuesta de valor

Archivos:

- `src/lib/components/sections/ValuePropsSection.svelte`
- `src/lib/data/audience.ts`

Contenido actual:

- Titulo: "Si ahora mismo te pasa algo de esto".
- Tarjeta lateral azul clara con el mensaje de contexto sobre que esto pasa a muchas personas durante y despues del tratamiento.
- Tres filas horizontales con icono a la izquierda y una tarjeta blanca ancha con el texto al lado.
- Frase final: "Por eso, no se trata de moverte sin mas, sino de hacerlo de una forma que te ayude de verdad en tu dia a dia."

Problemas visibles:

- P1: revisar visualmente si los iconos elegidos encajan del todo con la marca final.
- P1: comprobar en movil si las frases mantienen la lectura en dos lineas aproximadas sin verse apelotonadas.
- P2: valorar si el mensaje final necesita mas presencia o si asi ya basta.

### Proceso

Archivos:

- `src/lib/components/sections/ProcessSection.svelte`
- `src/lib/data/process.ts`

Contenido actual:

- Cuatro pasos con botones interactivos.
- Cada paso reutiliza `hero.jpg`.

Problemas visibles:

- P1: las imagenes de los pasos son placeholders repetidos.
- P1: validar los cuatro pasos y sus nombres.
- P1: en la web original el paso 2 era mas concreto sobre valorar entorno y rutina; aqui dice "Valoramos como te mueves en casa".
- P2: buena candidata para animacion: cambio de paso mas suave, imagenes reales, iconos o microinteraccion.
- P2: revisar si el usuario entiende que puede clicar los pasos.

### Zona de cobertura

Archivos:

- `src/lib/components/sections/CoverageSection.svelte`
- `src/lib/data/coverage.ts`

Contenido actual:

- Input para municipio o codigo postal.
- Lista de pueblos.
- Icono grande de mapa.

Problemas visibles:

- P1: confirmar pueblos y alcance real.
- P1: el input no envia a contacto ni guarda nada; solo muestra un mensaje local.
- P1: el mapa es placeholder.
- P2: decidir si conviene mapa visual, listado sobrio o CTA directa a WhatsApp.

### Equipo

Archivos:

- `src/lib/components/sections/TeamSection.svelte`
- `src/lib/data/team.ts`

Contenido actual:

- Jaume Sanso Servera.
- Miquel Galmes Vives.
- Roles y bios.
- Iconos placeholder en lugar de fotos.

Problemas visibles:

- P0: validar nombres, acentos, roles, especialidades y bios.
- P1: sustituir placeholders por fotos reales o decidir una direccion visual alternativa.
- P1: confirmar si se debe mencionar hospital, oncologia, dolor cronico/onco, titulaciones o colegiados.
- P2: la seccion podria tener mas confianza: fotos, credenciales, tono mas humano.

### Contacto

Archivos:

- `src/lib/components/sections/ContactFormSection.svelte`
- `src/routes/contacto/+page.svelte`
- `src/routes/contacto/+page.server.ts`
- `.env.example`

Contenido actual:

- Telefono, email y WhatsApp.
- Formulario con nombre, telefono, email y mensaje.
- Texto legal con enlace a privacidad.
- Envio por Nodemailer configurado con variables SMTP.

Problemas visibles:

- P0: para que funcione el formulario real hacen falta credenciales SMTP en `.env` local y en Vercel.
- P0: revisar legalmente si debe haber checkbox obligatorio de privacidad. En la web original aparece una aceptacion explicita.
- P1: confirmar si la primera toma de contacto es gratis y sin compromiso.
- P1: revisar si contacto debe priorizar WhatsApp, llamada o formulario.
- P2: falta mensaje mas claro de que datos se enviaran y como se respondera.

### FAQ

Archivos:

- `src/lib/components/sections/FAQSection.svelte`
- `src/lib/data/faqs.ts`

Contenido actual:

- Acordeon con preguntas frecuentes.
- Temas: beneficios, duracion, precio, zonas, preparacion en casa, experiencia previa, tratamiento oncologico.

Problemas visibles:

- P1: validar precio de 60-80 euros y si se quiere mostrar publicamente.
- P1: validar afirmaciones sanitarias y coordinacion con equipo medico.
- P2: algunas respuestas son mas cortas que en la web original; decidir si queremos version breve o version larga.
- P2: el acordeon tiene animacion, pero podria pulirse visualmente.

## Paginas internas

### Cancer `/cancer`

Archivo:

- `src/routes/cancer/+page.svelte`

Secciones:

- Hero.
- Texto editorial sobre ejercicio durante/despues del cancer.
- Lista de areas de trabajo.
- Proceso.
- FAQ.
- Contacto.

Problemas visibles:

- P0: validar contenido sanitario y claims de evidencia.
- P1: hero reutiliza `hero.jpg`.
- P1: falta imagen o recurso especifico para cancer/oncologia.
- P1: decidir si esta pagina debe ser muy emocional, muy clinica o equilibrada.
- P2: posible exceso de texto sin apoyo visual.

### Que haremos `/que-haremos`

Archivo:

- `src/routes/que-haremos/+page.svelte`

Secciones:

- Hero.
- Texto sobre sesiones a domicilio.
- Trabajo en equipo.
- Proceso.
- Cobertura.
- Contacto.

Problemas visibles:

- P1: hero reutiliza `hero.jpg`.
- P1: contenido todavia general; puede necesitar mas detalle real de sesion, materiales, duracion, preparacion y seguimiento.
- P2: posible solape con la seccion de proceso de la home.

### Quienes somos `/quienes-somos`

Archivo:

- `src/routes/quienes-somos/+page.svelte`

Secciones:

- Hero.
- Forma de trabajar.
- Formacion y experiencia.
- Equipo.
- Contacto.

Problemas visibles:

- P0: validar biografias y credenciales.
- P1: hero reutiliza `hero.jpg`.
- P1: equipo sin fotos reales.
- P1: falta historia propia si quieres que sea mas cercana.

### Centro de Salud Virtual `/centro-salud-virtual`

Estado:

- Retirada. Era una idea fallida.
- Se elimina de menu, footer, sitemap, datos estructurados y ruta publica.

### Casos de exito `/casos-de-exito`

Estado:

- Pagina creada como espacio interno para futuros testimonios en video.
- No aparece en menu, footer ni sitemap.
- Marcada como `noindex, nofollow`.
- Pendiente: definir estructura cuando existan videos de YouTube y autorizaciones de pacientes.

### Contacto `/contacto`

Archivo:

- `src/routes/contacto/+page.svelte`

Secciones:

- Cabecera simple.
- Formulario compartido.

Problemas visibles:

- P0: validar legal y funcionamiento real del formulario.
- P1: la pagina es correcta pero poco diferencial.
- P2: podria incluir mapa/zona, horarios, respuesta esperada o WhatsApp mas destacado.

### Blog `/blog` y articulo

Archivos:

- `src/routes/blog/+page.svelte`
- `src/routes/blog/[slug]/+page.svelte`
- `src/content/blog/ejercicio-durante-tratamiento-cancer.md`

Contenido actual:

- Blog con un articulo.
- Articulo: "Ejercicio durante el tratamiento del cancer: lo que dice la evidencia".

Problemas visibles:

- P0: validar autoria, evidencia y tono sanitario.
- P1: solo hay un articulo.
- P1: imagen del articulo usa `og-image.png`, no una imagen editorial especifica.
- P2: decidir si el blog es prioridad ahora o se deja para despues de la home.

### Legales

Archivos:

- `src/routes/aviso-legal/+page.svelte`
- `src/routes/politica-privacidad/+page.svelte`
- `src/routes/politica-cookies/+page.svelte`
- `src/routes/terminos/+page.svelte`

Problemas visibles:

- P0: revisar textos legales con datos reales de la actividad, responsables, cookies, formulario y tratamiento de datos.
- P1: confirmar si hacen falta banner de cookies o ajustes de analitica.

## Imagenes y recursos

Archivos actuales en `static/`:

- `hero.jpg`
- `og-image.png`
- `eima-logo.png`
- `eima-logo-white.png`
- `favicon.png`
- `robots.txt`

Problemas visibles:

- P1: hay muy pocas imagenes para una web completa.
- P1: `hero.jpg` se usa demasiado.
- P1: faltan fotos de equipo, sesiones, material, domicilio, proceso o recursos propios.
- P2: revisar si `og-image.png` representa bien la marca al compartir enlaces.

## Animaciones actuales

Actual:

- Hover/scale en botones.
- Transiciones de color.
- Menu movil con transformaciones.
- FAQ con slide.
- Proceso interactivo por click, pero sin transicion visual fuerte.

Oportunidades:

- P1: animacion de entrada para hero y secciones clave.
- P1: proceso con transicion suave entre pasos.
- P2: aparicion progresiva de tarjetas al hacer scroll.
- P2: microinteracciones en CTAs sin perder seriedad sanitaria.
- P3: detalles finos en menu, botones y FAQ.

## Comparacion rapida con la home original

Referencia usada: `https://eimafisioterapia.es/`

Diferencias detectadas:

- La version local se parece bastante al contenido original de la home, pero no es identica.
- La original incluye algunos textos y CTAs que aqui no aparecen o cambiaron.
- La original tenia un bloque mas orientado a "avisar cuando abramos agenda"; la local parece mas orientada a contacto directo.
- La original muestra una aceptacion explicita de politica de privacidad en el formulario; la local solo muestra texto con enlace.
- La local estructura mejor algunas partes como componentes, pero visualmente depende demasiado de una sola imagen.

Pendiente:

- Hacer comparacion visual con capturas de la web original si quieres recuperar partes concretas.
- Decidir que cosas de la original son "mantener", "mejorar" o "descartar".

## Orden recomendado de trabajo

1. Home: decidir estructura final y tono general.
2. Home: sustituir placeholders e imagenes repetidas.
3. Home: ajustar textos principales.
4. Home: definir animaciones base.
5. Contacto: validar formulario, privacidad y canales.
6. Quienes somos: fotos, bios y confianza.
7. Cancer y Que haremos: contenido sanitario y explicacion del servicio.
8. Casos de exito: mantener oculto hasta tener testimonios y autorizaciones.
9. Blog: validar articulo y decidir calendario.
10. Legales, SEO, build y despliegue.

## Proxima decision recomendada

Empezar por la home, sin tocar todavia paginas internas.

Primera tarea concreta sugerida:

```text
Pagina: Inicio
Seccion: Hero
Que esta mal:
Que quiero:
Prioridad: Alta
Referencia:
```

Cuando el hero este aprobado, seguir con:

1. Para quien es.
2. Beneficios.
3. Proceso.
4. Equipo.
5. Contacto.

## Decisiones tomadas

### 2026-04-17 - Inicio / Hero

- Se cambia la frase superior de "Ejercicio y fisioterapia a domicilio en Mallorca para personas con cancer y dolor cronico" a "Ejercicio y fisioterapia a domicilio en Mallorca para personas con cancer".
- Esa frase pasa a tener menos peso visual: letra mas pequena y opacidad baja, pero sigue siendo visible.
- El H1 incluye la frase SEO y el mensaje emocional completo: "Ejercicio y fisioterapia a domicilio en Mallorca para personas con cancer. Menos limitaciones. Mejor vida. Desde casa."
- Visualmente sigue mandando "Menos limitaciones. Mejor vida. Desde casa.", pero semanticamente el H1 contiene tambien la busqueda real.
- Se actualizan tambien las descripciones SEO/sociales de la home para quitar "dolor cronico" de esa frase principal.
- Se sustituye el fondo estatico del hero por el video `static/videos/hero.mp4`.
- Se mantiene `static/hero.jpg` como imagen de respaldo/poster, que es la imagen de la playa.
- Se conserva la capa oscura/azulada encima del video para que las letras sigan teniendo buena lectura.
- Pendiente: optimizar el peso del video para web. El archivo actual pesa aproximadamente 18 MB.
- Se oscurece mas la capa sobre el video para priorizar la lectura del texto.
- Se reduce aun mas la opacidad de la frase SEO superior y se baja su tamano.
- Se reduce el espacio superior entre el header y el contenido del hero.
- Se vuelve a reducir el espacio superior del hero para acercar mas la frase SEO al header.
- Se deja un solo CTA en el hero.
- El CTA usa el estilo del boton secundario anterior, pero el texto pasa a ser "Cuentanos tu caso".
- El CTA del hero enlaza directamente a WhatsApp con el numero de empresa `+34 604 52 97 31`.
- Se cambia el telefono antiguo `+34 658 52 10 77` por `+34 604 52 97 31` en los enlaces, textos visibles y datos estructurados de la web.
- Se elimina el icono del CTA del hero.
- El texto del CTA pasa a ser "Cuentanos tu caso aqui".
- El CTA queda centrado y con ancho compacto tambien en movil.
- Header: se corrige la logica de logos. Arriba del todo usa el logo blanco sobre el video oscuro; al hacer scroll usa el logo oscuro sobre fondo claro.
- Header: los enlaces del menu de escritorio ahora pasan a negrita en hover y dibujan una linea inferior del color actual con transicion de 0.3s ease-out.
- CTAs: dejan de estar en negrita por defecto y pasan a negrita en hover.
- CTAs: se mantiene el pequeno efecto de escala/sobresalto en hover; se anade tambien al CTA del hero.
- Hero: se sustituye la frase estatica "Mejor vida" por una animacion tipo maquina de escribir con las frases completas "Mas energia", "Mas salud" y "Mas vida.".
- Hero: se elimina el guion bajo. "Mas energia" y "Mas salud" no llevan punto; "Mas vida." lleva punto para cerrar el bucle.

### 2026-04-23 - Inicio / Hero

- Se actualiza el parrafo principal para introducir el acompanamiento de 12 semanas adaptado a cada persona.
- El texto queda dividido en dos parrafos: primero la propuesta principal y despues la barrera de dolor, fatiga o miedo tras los tratamientos.
- Se anade una frase bajo el CTA: "Valoraremos tu caso, resolveremos tus dudas y te diremos si este acompanamiento encaja contigo."
- La frase bajo el CTA queda con letra mas pequena, centrada y ancho limitado para que funcione tambien en movil.

### 2026-04-23 - Estructura global / Navegacion

- Se define la estructura publica principal: Inicio, Como funciona, Quienes somos, Contacto y Blog.
- Se elimina Cancer como pagina publica independiente: la ruta `/cancer` queda fuera de la navegacion y devuelve 404.
- Se renombra la pagina `/que-haremos` a `/como-funciona`.
- Se elimina `/que-haremos` de navegacion y sitemap; la ruta antigua devuelve 404.
- Se renombra la pagina oculta `/casos-de-exito` a `/testimonios`.
- Testimonios queda oculta: no aparece en menus ni sitemap y mantiene `noindex, nofollow`.
- El CTA principal del header y del menu movil cambia de llamada telefonica a WhatsApp.
- El texto del CTA pasa de "Llamanos" a "Contactanos".
- El icono del CTA pasa a ser un icono de WhatsApp en `currentColor`, para que tenga el mismo color que el texto.
- Al hacer scroll, el header usa fondo solido `#F8F4F0` y se elimina la sombra/blur para que se mimetice con el fondo de la seccion siguiente.

### 2026-04-23 - Inicio / Para quien es

- Se sustituye el bloque "Para quien es" por una seccion inspirada en la referencia visual enviada.
- El titulo cambia a "Te ves reflejado en alguna de estas situaciones?" con Noto Serif y color oscuro.
- Se crean tres tarjetas A/B/C con circulo azul claro, etiqueta centrada en mayusculas, frase entrecomillada, linea separadora y texto final en tres lineas.
- Se actualizan las situaciones:
  - A: "Empiezo desde cero".
  - B: "Quiero hacerlo bien".
  - C: "Quiero moverme, pero algo me frena".
- Se anade sombreado base a las tarjetas para que destaquen sobre el fondo claro.
- Al pasar el raton por la tarjeta, esta crece ligeramente, aparece un marco azul claro y se activa la animacion del CTA.
- El CTA mantiene el texto "Ver si es para mi" y usa el mismo color azul claro que los circulos A/B/C.
- Al bajar haciendo scroll, las tarjetas aparecen con desvanecido y un retraso corto de izquierda a derecha.
- La frase inferior pasa a: "3 situaciones diferentes. Pero un objetivo en comun: Recuperar su autonomia."
- Se compacta toda la seccion: titulo, subtitulo, tarjetas, textos y CTA bajan de tamano para que en escritorio se pueda ver el bloque mucho mejor de un solo vistazo y en movil no resulte tan largo.
- Cada CTA de tarjeta enlaza ya directamente a WhatsApp con un mensaje precargado distinto segun el perfil A, B o C.
- La tarjeta C cambia su frase a: "Se que moverme me puede ayudar, pero el dolor o la fatiga me frenan."
- Se reajustan las lineas de texto encima del CTA para que las tres tarjetas queden mejor alineadas visualmente.
- La frase final deja Noto Serif y pasa a Inter, con "autonomia" en negrita.
- Se reduce aun mas el tamano del titulo y del subtitulo para que la seccion no domine tanto la pantalla.
- Las tarjetas se compactan mas: menos margen interior, menos altura visual y composicion mas cuadrada.
- Las frases entre comillas se acercan mas a los bordes y se reducen para ocupar aproximadamente tres lineas.
- El texto final de apoyo de las tarjetas A, B y C pasa a dos lineas para reducir altura y mejorar el equilibrio visual.
- El titulo gana un poco mas de peso para mantener presencia aun siendo mas pequeno.
- Se elimina la mini linea de texto en mayusculas bajo cada circulo A/B/C para acortar las tarjetas.
- Las comillas se hacen mas grandes y se ajustan mas a los bordes para que lean en torno a tres lineas.
- La linea separadora azul clara pasa a ser mas larga y mas fina.
- El texto encima del CTA vuelve a trabajarse en tres lineas controladas para evitar saltos feos.
- Se baja de nuevo el peso del titulo porque habia quedado demasiado grueso.
- Se reduce casi a la mitad el espacio superior entre el hero/video y esta seccion.
- Las tarjetas se estrechan y se aumenta el espacio horizontal entre ellas.
- La frase de la tarjeta C cambia a: "Se que moverme me puede ayudar, pero tengo dolor o fatiga."
- Los textos de apoyo bajo la linea vuelven a dos lineas, con letra mas pequena para que no rompan raro en movil.
- Se ajusta el reparto vertical interno: mas aire entre comillas y texto de apoyo, y menos hueco muerto bajo el CTA.
- En escritorio, el titulo de la seccion se ajusta a 40 px.
- Los textos de apoyo bajo la linea pasan a leerse como en la referencia: tres lineas por tarjeta, sin emoticono.
- Se elimina el empuje automatico del CTA al fondo de la tarjeta para controlar mejor la distancia entre texto explicativo y boton en desktop y movil.
- La frase final inferior mantiene dos lineas y la primera frase se hace mas pequena.
- Las tarjetas se afinan un poco mas en escritorio sin tocar el bloque principal entre comillas.
- Las subfrases bajo la linea pasan a 14 px.
- Se anade una flecha curva entre "3 situaciones diferentes..." y "Recuperar su autonomia." como detalle visual.
- La siguiente seccion de beneficios pasa tambien a fondo `#F8F4F0` para eliminar el salto de color.
- La flecha decorativa se sustituye por el PNG elegido por el usuario, invertido para que tenga sentido descendente.
- Finalmente se reemplaza por una flecha vertical descendente mas simple elegida por el usuario.

### 2026-04-24 - Inicio / Bloque de situaciones frecuentes

- Se sustituye el anterior bloque de beneficios/timeline por un bloque nuevo basado en la referencia enviada.
- El titulo pasa a ser "Si ahora mismo te pasa algo de esto" con la misma familia tipografica y tamano que el titulo del bloque anterior.
- El titulo se actualiza a Playfair Display 40 px.
- Se mantienen las comillas/titulos internos en Noto Serif y el texto normal en Inter.
- En el bloque de "Te ves reflejado..." se corrige el centrado visual de las letras A/B/C dentro del circulo y el fondo del circulo pasa a `#8CD0D6`.
- En el bloque nuevo:
  - el titulo queda centrado
  - la tarjeta/esfera informativa va a la derecha
  - el texto de apoyo principal deja de ir debajo del titulo
- Se rehace la parte izquierda como tres barras blancas anchas con el icono dentro del bloque:
  - menos fuerza y menos energia
  - recomendacion del oncologo/a sin saber como adaptarlo
  - miedo a pasarte, agotarte o empeorar sintomas
- Los iconos usan fondo `#8CD0D6` y el icono va en azul fuerte `#233F4E`.
- Los tramos en negrita pedidos por el usuario quedan destacados en cada frase.
- La esfera de la derecha queda con:
  - pequeno circulo superior `#8CD0D6` con letra blanca
  - titulo "No es culpa tuya" en Noto Serif
  - debajo las dos frases explicativas
- Los iconos elegidos son:
  - bateria baja
  - fonendoscopio
  - signo de interrogacion
- El remate inferior pasa a:
  - "Por eso, no se trata de moverte sin mas, sino de hacerlo de una forma que te ayude de verdad en tu dia a dia."
- Todo el bloque mantiene fondo `#F8F4F0` para no romper la continuidad visual con el apartado anterior.
- Correccion posterior: este bloque no debia sobrescribir "Â¿Por que cada vez mas personas eligen la fisioterapia a domicilio?".
- Se crea como seccion nueva e independiente justo debajo de "Â¿Te ves reflejado en alguna de estas situaciones?".
- `ValuePropsSection` vuelve a quedar como bloque separado para trabajarlo despues con su propio contenido.
- Ajuste posterior del bloque:
  - se elimina el circulo grande de la derecha y queda solo el icono de acompanamiento, el titulo y el texto
  - se cambia el icono superior por uno que simboliza acompanamiento
  - el titulo derecho pasa a 30 px y el texto explicativo a 14 px
  - se elimina la linea divisoria bajo el titulo
  - los iconos de las tres barras se hacen mas grandes sin cambiar el tamano del circulo
  - el texto de las tres barras pasa a 16 px
  - cada barra gana hover con borde fino `#8CD0D6`
  - se elimina la flecha del remate inferior
  - se anade un CTA final "Cuentanos que te pasa" en azul claro con hover en `#4083A7`
  - el CTA final pasa a tener texto azul oscuro en reposo y texto blanco en hover
  - ese mismo comportamiento de CTA se aplica a los botones de las tarjetas A/B/C y al CTA del header cuando ya hay scroll
  - los iconos de las barras se afinan visualmente con trazos mas finos
  - el mensaje "No es culpa tuya" pasa a integrarse sobre la imagen aportada por el usuario, con texto blanco y capa oscura para mejorar lectura
  - el mensaje precargado del CTA final cambia a "Hola, quiero saber si podeis ayudarme."
  - se anade el efecto brillante del CTA al boton final del bloque y a los CTA del header y del menu movil
  - el menu movil pasa a usar fondo `#F8F4F0`, CTA coherente con escritorio y enlaces activos en negrita
  - el fonendoscopio se recentra visualmente
  - se elimina el icono sobre la imagen y el titulo cambia a "Tienes que saber que NO es culpa tuya"
  - se anade una linea fina azul y mas separacion entre los dos parrafos del mensaje
  - en escritorio, la altura de la imagen se ajusta para acompasarse con la altura total del bloque de las tres barras
  - se unifica el mensaje de WhatsApp en los CTA de contacto a "Hola, quiero saber si podeis ayudarme."
  - en escritorio, las barras blancas se centran un poco mas y aumenta el espacio entre la columna izquierda y la imagen
  - el titulo sobre la imagen se fuerza a dos lineas con un tamano ligeramente menor
  - el subtitulo de la imagen pasa a tres parrafos separados con la misma distancia vertical
  - la tarjeta con foto mantiene en escritorio un ancho compacto, mas parecido al aspecto visual de movil
  - en el ultimo parrafo del texto sobre la imagen, "necesitas una guia adaptada" pasa a negrita
  - se reduce el espacio vertical entre "Si ahora mismo te pasa algo de esto" y el siguiente bloque de valor

### 2026-04-27 - Inicio / Lo que queremos ayudarte a conseguir

- Se crea una seccion nueva e independiente con el titulo "Lo que queremos ayudarte a conseguir".
- El diseno sigue muy de cerca la referencia enviada: titulo centrado, subtitulo en dos lineas y tres tarjetas blancas con icono circular superior.
- Las tres tarjetas se estructuran en torno a:
  - Reducir
  - Recuperar
  - Retomar
- Se usan subtitulos en azul claro y una linea separadora fina para acercarse al estilo visual de referencia.
- Debajo de las tres tarjetas se anade una animacion de escritura inspirada en el hero con la frase "Las 3R de tu recuperacion".
- El texto "3R" se destaca en `#8CD0D6`.
- En el cierre del bloque anterior, la frase pasa a mostrar "Pero con un objetivo comÃºn:" con mayuscula inicial.
- La seccion se recoloca justo despues de "Si ahora mismo te pasa algo de esto".
- El subtitulo de la seccion adopta el mismo tamano y tono que el subtitulo de "Te ves reflejado en alguna de estas situaciones?".
- Las tarjetas ganan hover con borde fino azul claro.
- La R inicial de Reducir, Recuperar y Retomar pasa a negrita.
- El texto descriptivo inferior de cada tarjeta baja a 14 px para compactar el bloque.
- Se amplian y ajustan los iconos de las tarjetas, con brazo flexionado para Recuperar y monigote en marcha para Retomar.
- Se sustituye el icono medico descentrado del bloque anterior por un simbolo medico centrado.
- Ajuste posterior:
  - vuelve el icono de fonendoscopio en el bloque de situaciones frecuentes
  - en los titulos Reducir, Recuperar y Retomar la inicial pasa a 40 px y el resto de la palabra a 36 px manteniendo Noto Serif
  - se sustituyen los iconos de Reducir, Recuperar y Retomar por los SVG exactos enviados por el usuario
  - el icono de duda del bloque anterior tambien se reemplaza por el SVG enviado por el usuario
  - debajo de las tres tarjetas se anade una animacion al entrar en pantalla: tres flechas se dibujan hacia la frase "Las 3R de tu recuperacion" mientras el texto se escribe como maquina de escribir
- Home: eliminadas las secciones de cobertura, equipo, formulario de contacto y FAQ para dejar la portada mÃ¡s enfocada.
- Home: el bloque "Â¿Por quÃ© nuestro formato encaja mejor contigo?" deja de usar dos versiones separadas para mÃ³vil/escritorio, para evitar el flash en la preview lateral al recargar.
- Nuevo ajuste visual de '¿Por qué nuestro formato encaja mejor contigo?': se eliminan las líneas decorativas, el timeline usa #8CD0D6 en reposo y #245B7D al activarse, las tarjetas se compactan y el cierre inferior pasa a una línea vertical izquierda con CTA a /como-funciona.
- Ajuste adicional en '¿Por qué nuestro formato encaja mejor contigo?': la línea base del timeline pasa a #E8E8F6 y se añade una protección de hidratación para evitar el flash visual de la preview al recargar.
- Ajuste de timeline en '¿Por que nuestro formato encaja mejor contigo?': circulos base y linea base a #E8E8F6, activacion a #245B7D con icono blanco, sin numeracion lateral, texto secundario de tarjeta en #245B7D, cierre inferior con linea vertical mas fina y tipografias diferenciadas, y logica de scroll adaptada del timeline original del CMS.
- Ajuste fino adicional en el timeline: activación un poco más tardía para que el color base del círculo se perciba mejor, línea vertical inferior a 1 px y remate final con 'Por eso lo llamamos' en Inter fina.
- Ajuste de estabilidad en el timeline: las tarjetas quedan visibles por defecto para evitar que la preview lateral las oculte mientras afinamos la animación de entrada.
- Corrección estructural del timeline para móvil y escritorio: línea centrada respecto a los círculos, progreso azul visible, iconos más grandes y centrados, y textos de la sección reescritos con acentos correctos.
- Limpieza de la sección '¿Por qué nuestro formato encaja mejor contigo?': se reescribe el archivo en ASCII seguro con entidades/escapes para evitar texto corrupto, se deja visible el bloque final sin animación obligatoria y se mantiene el progreso de color del timeline como base estable para seguir puliendo.
- Corrección crítica del timeline: se elimina la ocultación por hidratación (isibility: hidden) para que la sección y su texto final no desaparezcan si la preview tarda o falla al montar el JS.
- Se actualiza el contenido del bloque 'Ganas tiempo, sin descuidar tu salud' con nuevo titular, subtítulo, textos de tarjetas, cierre y CTA según el copy definido por el usuario.

- Ajustado cierre de ValueProps a Inter ligera, header con Inicio activo en negrita y difuminado inferior, texto 'Las 3R de tu recuperación' en Inter 25px con 3R en #4083A7, 'Recuperar su autonomía' sin punto y a 25px, y título de Audience en una sola línea en escritorio.

- Revertido el difuminado del header. Ajustada la sección de ValueProps: cierre a 16px con línea izquierda más gruesa, tarjetas con textos centrados y en dos párrafos, y timeline con eje recalculado desde el centro del primer icono hasta el centro del último. Ajustados también los espacios de 'Las 3R de tu recuperación' y el tamaño/punta de las flechas.

- ValueProps: animación de tarjetas más lenta y aplicada también a la primera, más separación entre subtítulo y primera tarjeta, y cierre reescrito con referencia a acompañamiento de 12 semanas, flecha curvada hacia el CTA y énfasis en Empenta.

- ValueProps: quitada la flecha curvada del cierre, CTA solo, línea izquierda del cierre más corta y más gruesa, copy final cambiado a 'Haz clic abajo...' y separación superior reforzada desde el header de la sección.

- Unificada la respiración vertical entre título, subtítulo y contenido en las secciones con subtítulo de la home. En ValueProps se actualiza además el título a 'Ganarás tiempo, sin descuidar tu salud' y la línea vertical del cierre pasa a #8CD0D6.
