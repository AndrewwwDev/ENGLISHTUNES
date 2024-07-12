document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playPauseButton = document.getElementById('playPause');
    const subtitle1 = document.getElementById('subtitle1');
    const subtitle2 = document.getElementById('subtitle2');

    const subtitles = {
    
        // "00:00": { lang1: "Hola", lang2: "Hello" },
        // "00:05": { lang1: "¿Cómo estás?", lang2: "How are you?" },
        // "00:10": { lang1: "Estoy bien", lang2: "I am fine" },
    
    "00:01": { lang1: "[PHONES RINGING, BACKGROUND DIALOGUE]", lang2: "[TELEFONOS SONANDO, DIALOGO DE FONDO]" },
    "00:05": { lang1: "♪ I WOULD BE COMPLEX ♪", lang2: "♪ SERÍA COMPLEJO ♪" },
    "00:07": { lang1: "♪ I WOULD BE COOL ♪", lang2: "♪ SERÍA COOL ♪" },
    "00:09": { lang1: "♪ THEY'D SAY I PLAYED THE FIELD BEFORE I FOUND SOMEONE TO COMMIT TO ♪", lang2: "♪ DIRÍAN QUE JUGUÉ EN EL CAMPO ANTES DE ENCONTRAR A ALGUIEN CON QUIEN  COMPROMETERME ♪" },
    "00:14": { lang1: "♪ AND THAT WOULD BE OK ♪", lang2: "♪ Y ESO ESTARÍA BIEN ♪" },
    "00:16": { lang1: "♪ FOR ME TO DO ♪", lang2: "♪ QUE LO HAGA ♪" },
    "00:18": { lang1: "♪ EVERY CONQUEST I HAD MADE WOULD MAKE ME MORE OF A BOSS TO YOU ♪", lang2: "♪ CADA CONQUISTA QUE HABÍA HECHO ME HARÍA MÁS JEFE PARA TI ♪" },
    "00:24": { lang1: "♪ I'D BE A FEARLESS LEADER ♪", lang2: "♪ SERÍA UN LIDER SIN MIEDO ♪" },
    "00:26": { lang1: "♪ I'D BE AN ALPHA TYPE ♪", lang2: "♪ SERÍA UN TIPO ALFA ♪" },
    "00:28": { lang1: "♪ WHEN EVERYONE BELIEVES YA ♪", lang2: "♪ CUANDO TODOS TE CREEN ♪" },
    "00:31": { lang1: "♪ WHAT'S THAT LIKE? ♪", lang2: "♪ ¿CÓMO ESD ESO? ♪" },
    "00:32": { lang1: "♪ I'M SO SICK OF RUNNING AS FAST I CAN ♪", lang2: "♪ ESTOY TAN HARTA DE CORRER TAN RÁPIDO COMO PUEDO ♪" },
    "00:36": { lang1: "♪ WONDERING IF I'D GET THERE QUICKER IF I WAS A MAN ♪", lang2: "♪ PREGUNTANDOME SI LLEGARÍA MÁS RÁPIDO SI FUERA UN HGOMBRE ♪" },
    "00:40": { lang1: "♪ AND I'M SO SICK OF THEM COMING AT ME AGAIN ♪", lang2: "♪ Y ESTOY TAN HARTA DE QUE VENGAN A MI OTRA VEZ ♪" },
    "00:44": { lang1: "♪ 'CAUSE IF I WAS A MAN...♪", lang2: "♪ PORQUE SI FUERA UN HOMBRE...♪" },
    "00:47": { lang1: "♪ THEN I'D BE THE MAN ♪", lang2: "♪ ENTONCES SERÍA EL HOMBRE ♪" },
    "00:49": { lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE ♪" },
    "00:53": { lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE ♪" },
    "00:57": { lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE ♪" },
    "01:02": { lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE ♪" },
    "01:08": { lang1: "♪ THEY'D SAY I HUSTLED ♪", lang2: "♪ DIRÍAN QUE ME APRESURÉ ♪" },
    "01:09": { lang1: "♪ PUT IN THE WORK ♪", lang2: "♪ PUSIERON TRABAJO ♪" },
    "01:15": { lang1: "♪ THEY WOULDN'T SHAKE THEIR HEADS AND QUESTION HOW MUCH OF THIS I DESERVE ♪", lang2: "♪ NO SACUDEN LA CABEZA Y PREGUNTARÍAN CUANTO DE ESTO MEREZCO ♪" },
    "01:16": { lang1: "♪ WHAT I WAS WEARING ♪", lang2: "♪ LO QUE LLEVABA PUESTO ♪" },
    "01:18": { lang1: "♪ IF I WAS RUDE ♪", lang2: "♪ SI ERA RUDO ♪" },
    "01:23": { lang1: "♪ COULD ALL BE SEPARATED FROM MY GOOD IDEAS AND POWER MOVES ♪", lang2: "♪ PODRÍA ESTAR TODO SEPARADO DE MIS BUENAS IDEAS Y MOVIMIENTOS DE PODER ♪" },
    "01:27": { lang1: "♪ AND THEY WOULD TOAST TO ME, OH ♪", lang2: "♪ Y BRINDARÍAN POR MI, OH ♪" },
 "01:29": { lang1: "♪ LET THE PLAYERS PLAY ♪", lang2: "♪ DEJEN JUGAR A LOS JUGADORES ♪" },
    "01:31": { lang1: "♪ I'D BE JUST LIKE LEO ♪", lang2: "♪ SERÍA COMO LEO ♪" },
    "01:33": { lang1: "♪ IN SAINT-TROPEZ ♪", lang2: "♪ EN SAINT-TROPEZ ♪" },
    "01:37": { lang1: "♪ I'M SO SICK OF RUNNING AS FAST I CAN ♪", lang2: "♪ ESTOY TAN HARTA DE CORRER LO MÁS RÁPIDO QUE PUEDO ♪" },
    "01:41": { lang1: "♪ WONDERING IF I'D GET THERE QUICKER IF I WAS A MAN ♪", lang2: "♪ PREGUNTANDOME SI LLEGARÍA MÁS RÁPIDO SI FUERA UN HOMBRE ♪" },
    "01:45": { lang1: "♪ AND I'M SO SICK OF THEM COMING AT ME AGAIN ♪", lang2: "♪ Y ESTOY TAN HARTA DE QUE VENGAN A MI OTRA VEZ ♪" },
    "01:46": { lang1: "♪ 'CAUSE IF I WAS A MAN... ♪", lang2: "♪ 'PORQUE SI FUERA UN HOMBRE... ♪" },
    "01:48": { lang1: "♪ THEN I'D BE THE MAN ♪", lang2: "♪ ENTOCES SERÍA EL HOMBREN ♪" },
    "01:50": { lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE ♪" },
    "01:54": { lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE ♪" },
    "01:58": { lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE ♪" },
    "02:02": { lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE ♪" },
    "02:06": { lang1: "♪ WHAT'S IT LIKE TO BRAG ABOUT RAKING IN DOLLARS ♪", lang2: "♪¿COMO ES ALARDEAR DE CUÁNTO DINERO TIENES? ♪" },
    "02:09": { lang1: "♪ AND GETTING BITCHES AND MODELS ♪", lang2: "♪ Y CONSEGUIR PERRAS Y MODELOS  ♪" },
    "02:11": { lang1: "♪ AND IT'S ALL GOOD IF YOU'RE BAD ♪", lang2: "♪ Y TODO ESTÁ BIEN SI ERES MALO ♪" },
    "02:13": { lang1: "♪ AND IT'S OKAY IF YOU'RE MAD IF I WAS OUT FLASHING MY DOLLARS ♪", lang2: "♪ Y ESTÁ BIEN SI ESTÁS ENOJADO SI YO SALIERA MOSTRANDO CUANTO DINERO TENGO ♪" },
    "02:18": { lang1: "♪ I'D BE A BITCH, NOT A BALLER ♪", lang2: "♪ SERÍA UNA PERRA, NO UNA CHICA EXITOSA ♪" },
    "02:21": { lang1: "♪ THEY PAINT ME OUT TO BE BAD ♪", lang2 : "♪ ME PINTARÍAN COMO LA MALA ♪" },
    "02:24": {lang1: "♪ SO IT'S OKAY THAT I'M MAD ♪", lang2: "♪ ASÍ QUE ESTÁ BIEN QUE YO ESTÉ ENOJADA ♪" },
    "02:29": { lang1: "♪ I'M SO SICK OF RUNNING AS FAST AS I CAN ♪", lang2: "♪ ESTOY TAN HARTA DE CORRER TAN RÁPIDO COMO PUEDO ♪" },
    "02:34": { lang1: "♪ WONNDERING IF I'D GET THERE QUICKER IF I WAS A MAN ♪", lang2: "♪ PREGUNTANDOME SI LLEGARÍA MÁS RÁPIDO SI FUERA UN HOMBRE ♪" },
    "02:38": { lang1: "♪ AND I'M SO SICK OF THEN COMING AT ME AGAIN ♪", lang2: "♪ Y ESTOY TAN HARTA DE QUE VENGAN A MI OTRA VEZ" },
    "02:40": { lang1: "♪ 'CAUSE IF I WAS I MAN... ♪", lang2: "♪ PORQUE SI FUERA UN HOMBRE... ♪" },
    "02:43": { lang1: "♪ THEN I'D BE THE MAN ♪", lang2: "♪ ENTONCES SERÍA EL HOMBRE" },
    "02:47": { lang1: "♪ I'M SO SICK OF RUNNING AS FAST AS I CAN ♪", lang2: "♪ ESTOY TAN HARTA DE CORRER TAN RÁPIDO COMO PUEDO"},
    "02:51": { lang1: "♪ WONDERING IF I'D GET THERE QUICKER IF I WAS A MAN", lang2: "♪ PREGUTANDOME SI LLEGARÍA MÁS RÁPIDO SI FUERA UN HOMBRE" },
    "02:55": { lang1: "♪ AND I'M SO SICK OF THEM COMING AT ME AGAIN ♪", lang2: "♪ Y ESTOY TAN HARTA DE QUE VENGAN A MI OTRA VEZ♪" },
    "02:58": {  lang1: "♪ 'CAUSE IF I WAS A MAN ♪", lang2: "♪ PORQUE SI FUERA EL HOMBRE...♪" } ,
    "03:00": {  lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE♪" } ,
    "03:02": {  lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE♪" } ,
    "03:05": {  lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE♪" } ,
    "03:10": {  lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE♪" } ,
    "03:16": {  lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE♪" } ,
    "03:17": {  lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE♪" } ,
    "03:20": {  lang1: "♪ ♪", lang2: "♪ ♪" } ,
    "03:22": {  lang1: "♪ IF I WAS A MAN ♪", lang2: "♪ SI FUESE UN HOMBRE♪" } ,
    "03:24": {  lang1: "♪ [WOMAN'S VOICE] AND CUT [BELLS SOUND] ♪", lang2: "♪ [VOZ DE MUJER] Y CORTA [SONIDOS DE CAMPANA] ♪" } ,
    "03:24": {  lang1: "♪ I'D BE THE MAN ♪", lang2: "♪ SERÍA EL HOMBRE♪" } ,
    "03:37": {  lang1: "♪ [ACTOR] EH, JUST CHECKING WAS THAT LAST TAKE MORE WHAT YOU HAVE IN MIND ", lang2: "♪ [ACTOR] EH, SOLO COMPROBANDO FUE ESO ÚLTIMO TOMA MÁS LO QUE TENÍAS EN MENTE ♪" } ,
    "03:40": {  lang1: "[TAYLOR AS DIRECTOR] PRETTY GOOD, AH COULD YOU TRY TO BE SEXIER?", lang2: "♪ [TAYLOR COMOP DIRECTORA] BASTANTE BIEN, AH ¿PODRÍAS INTENTAR SER MÁS SEXY?" } ,
    "03:43": {  lang1: "MAYBE MORE LIKELABLE THIS TIME", lang2: "QUIZÁS MÁS AGRADABLE ESTA VEZ" } ,
    "03:46": {  lang1: "[ACTOR] OK, OK NO PROBLEM", lang2: "[ACTOR] OK, OK NO HAY PROBLEMA" } ,
    "03:51": {  lang1: "MAYBE MORE LIKELABLE THIS TIME", lang2: "QUIZÁS MÁS AGRADABLE ESTA VEZ" } , 
    "03:43": {  lang1: "MAYBE MORE LIKELABLE THIS TIME", lang2: "QUIZÁS MÁS AGRADABLE ESTA VEZ" } , 
}


    function updateSubtitles(currentTime) {
        const currentTimeFormatted = new Date(currentTime * 1000).toISOString().substr(14, 5);
        const subtitle = subtitles[currentTimeFormatted];
        if (subtitle) {
            subtitle1.textContent = subtitle.lang1;
            subtitle2.textContent = subtitle.lang2;
        }
    }

    function togglePlayPause() {
        if (audio.paused) {
            audio.play();
            playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';  // Cambia el ícono a pausa
            playPauseButton.classList.remove('btn-success');
            playPauseButton.classList.add('btn-warning');
        } else {
            audio.pause();
            playPauseButton.innerHTML = '<i class="fas fa-play"></i>';  // Cambia el ícono a reproducir
            playPauseButton.classList.remove('btn-warning');
            playPauseButton.classList.add('btn-success');
        }
    }

    audio.addEventListener('timeupdate', () => {
        updateSubtitles(audio.currentTime);
    });

    playPauseButton.addEventListener('click', () => {
        togglePlayPause();
    });

    document.getElementById('prev').addEventListener('click', () => {
        audio.currentTime -= 10;
    });

    document.getElementById('next').addEventListener('click', () => {
        audio.currentTime += 10;
    });
});
