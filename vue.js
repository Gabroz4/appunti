const Home = {
    data(){
        return {
            Capitoli: [{
                "Titolo":"Cos'è Babylon.js",
                "Testo":"Babylon.js è un potente motore di rendering 3D open-source scritto in JavaScript. È utilizzato per sviluppare applicazioni web interattive e giochi 3D che possono essere eseguiti direttamente nel browser senza richiedere l'installazione di plugin aggiuntivi." +
                    "\n" +
                    "Questo framework offre una vasta gamma di funzionalità per creare esperienze tridimensionali, come rendering realistico, gestione delle luci, fisica, animazioni, supporto per texture e materiali, nonché integrazione con tecnologie come WebGL, WebVR e WebXR per supportare dispositivi di realtà virtuale e aumentata." +
                    "\n" +
                    "Babylon.js è ampiamente utilizzato nella creazione di applicazioni, giochi, simulazioni e progetti di realtà virtuale su piattaforme web. Grazie alla sua natura open-source, la community contribuisce costantemente con nuove funzionalità, correzioni di bug e miglioramenti, rendendolo un'opzione popolare per gli sviluppatori interessati a creare esperienze 3D coinvolgenti sul web."
            }, {
                "Titolo":"babylon.js vs AR.js",
                "Testo":"Babylon.js e AR.js sono due framework che si concentrano su aree diverse della programmazione web. Mentre Babylon.js è specializzato nella creazione di applicazioni 3D interattive, AR.js è incentrato sulla realtà aumentata (AR). Ecco alcune delle principali differenze tra i due framework:\n" +
                    "\n" +
                    "Funzionalità 3D avanzate: Babylon.js è un framework potente per la creazione di applicazioni 3D complesse. Offre un'ampia gamma di funzionalità per la creazione di scenari 3D, come il rendering avanzato, l'illuminazione realistica, le animazioni complesse e la fisica simulata. Queste funzionalità consentono agli sviluppatori di creare esperienze 3D immersive e dettagliate.\n" +
                    "\n" +
                    "Supporto multi-piattaforma: Babylon.js supporta una varietà di piattaforme, inclusi browser desktop, dispositivi mobili e piattaforme di realtà virtuale (VR) come Oculus Rift e HTC Vive. Ciò consente agli sviluppatori di creare applicazioni 3D che possono essere eseguite su diverse piattaforme senza dover scrivere codice specifico per ciascuna.\n" +
                    "\n" +
                    "Compatibilità con i principali motori di gioco: Babylon.js è compatibile con i principali motori di gioco come Unity e Unreal Engine. Ciò consente agli sviluppatori di integrare facilmente le loro creazioni 3D esistenti o di utilizzare asset e risorse provenienti da questi motori all'interno delle applicazioni Babylon.js.\n" +
                    "\n" +
                    "Ampia comunità e supporto: Babylon.js ha una comunità attiva di sviluppatori e offre un'ampia documentazione, tutorial e risorse per supportare gli sviluppatori nella creazione di applicazioni 3D. La comunità Babylon.js è molto attiva e offre supporto agli sviluppatori attraverso forum e altri canali di comunicazione.\n" +
                    "\n" +
                    "Realtà aumentata: AR.js, d'altra parte, si concentra specificamente sulla realtà aumentata. Offre funzionalità per la creazione di esperienze AR utilizzando tecnologie come WebXR, permettendo agli sviluppatori di creare applicazioni che sovrappongono oggetti virtuali al mondo reale attraverso la fotocamera del dispositivo.\n" +
                    "\n" +
                    "È importante notare che Babylon.js e AR.js non sono necessariamente in competizione tra loro, ma possono essere usati insieme per creare esperienze 3D e AR complesse. Ad esempio, è possibile utilizzare Babylon.js per creare gli oggetti 3D e poi integrarli in un'esperienza AR utilizzando AR.js."
            }, {
                "Titolo":"Accessibilità",
                "Testo":"Per quanto riguarda l'accessibilità nel web, Babylon.js si impegna a fornire un'esperienza accessibile agli utenti con disabilità offrendo diverse funzionalità e supporto.\n" +
                    "\n" +
                    "Ecco alcuni modi in cui Babylon.js affronta il tema dell'accessibilità:\n" +
                    "\n" +
                    "Supporto per gli standard web: Babylon.js è costruito utilizzando tecnologie web standard, come HTML5, CSS e JavaScript. Ciò significa che eredita automaticamente le caratteristiche di accessibilità fornite da questi standard, come la possibilità di utilizzare tecnologie assistive come screen reader o tastiere.\n" +
                    "\n" +
                    "Supporto per la navigazione da tastiera: Babylon.js fornisce un supporto completo per la navigazione tramite tastiera. Gli utenti con disabilità motorie o che preferiscono utilizzare solo la tastiera possono interagire con le applicazioni Babylon.js senza problemi.\n" +
                    "\n" +
                    "Contrasti e colori accessibili: Babylon.js offre opzioni per personalizzare i colori degli oggetti 3D e dell'interfaccia utente. Ciò consente agli sviluppatori di creare contrasti adeguati tra i diversi elementi e di scegliere combinazioni di colori accessibili per garantire la leggibilità e la chiarezza per gli utenti con disabilità visive.\n" +
                    "\n" +
                    "Supporto per la descrizione alternativa: Babylon.js consente agli sviluppatori di fornire descrizioni alternative per gli oggetti 3D tramite l'attributo \"aria-label\". Questo consente ai dispositivi assistivi di leggere le descrizioni alternative agli utenti che non possono visualizzare gli oggetti 3D o che preferiscono ricevere una descrizione verbale.\n" +
                    "\n" +
                    "Documentazione e risorse: Babylon.js fornisce una documentazione completa e risorse utili per gli sviluppatori interessati ad affrontare l'accessibilità. Ci sono guide e esempi che illustrano come migliorare l'accessibilità nelle applicazioni Babylon.js e come utilizzare correttamente le funzionalità di accessibilità offerte dal framework.\n" +
                    "\n" +
                    "Tuttavia, è importante sottolineare che l'accessibilità nel web dipende anche dalla progettazione e dall'implementazione delle applicazioni da parte degli sviluppatori. Anche se Babylon.js offre diverse funzionalità per migliorare l'accessibilità, è responsabilità degli sviluppatori utilizzare tali funzionalità in modo adeguato e seguire le linee guida per creare applicazioni web accessibili."
            }]
        }
    },
    template: `
    <h2>Babylon.js</h2>
        <article v-for="capitolo in Capitoli">
        <h3>{{capitolo["Titolo"]}}</h3>
        <p>{{capitolo["Testo"]}}</p>
    </article>
`
}
const Babylon = {
    data() {
        return {
            Capitoli: [{
                "Titolo": "Interfacciarsi con il framework",
                "Testo": "L'utilizzo dell'API di Babylon.js comporta diversi passaggi per creare e gestire una scena 3D interattiva. Ecco una panoramica generale dei principali concetti e delle operazioni coinvolte:\n" +
                    "\n" +
                    "Preparazione dell'ambiente: Per iniziare, è necessario includere la libreria di Babylon.js nel tuo progetto HTML. Puoi scaricare la libreria da babylonjs.com o utilizzare un CDN per accedere alla versione più recente. Assicurati di includere anche il file di stile CSS corrispondente.\n" +
                    "\n" +
                    "Creazione della scena: Puoi iniziare creando una scena 3D utilizzando l'oggetto BABYLON.Scene. Ad esempio:\n" +
                    "\n" +
                    "javascript\n" +
                    "Copy code\n" +
                    "var canvas = document.getElementById(\"renderCanvas\");\n" +
                    "var engine = new BABYLON.Engine(canvas, true);\n" +
                    "var scene = new BABYLON.Scene(engine);\n" +
                    "In questo esempio, viene creato un oggetto Engine per gestire il rendering sulla canvas specificata, e viene istanziato un oggetto Scene.\n" +
                    "\n" +
                    "Creazione di oggetti 3D: Puoi creare oggetti 3D come mesh, luci e telecamere nella scena. Ad esempio, per creare una sfera:\n" +
                    "javascript\n" +
                    "Copy code\n" +
                    "var sphere = BABYLON.MeshBuilder.CreateSphere(\"sphere\", {diameter: 2}, scene);\n" +
                    "In questo caso, viene utilizzato il metodo BABYLON.MeshBuilder.CreateSphere per creare una sfera con il nome \"sphere\" e un diametro di 2 unità. La sfera viene quindi aggiunta alla scena.\n" +
                    "\n" +
                    "Configurazione di materiali e texture: Puoi applicare materiali e texture agli oggetti 3D per definire l'aspetto visivo. Babylon.js offre una varietà di materiali predefiniti, ma è anche possibile creare materiali personalizzati. Ad esempio, per applicare un materiale standard a una sfera:\n" +
                    "javascript\n" +
                    "Copy code\n" +
                    "var material = new BABYLON.StandardMaterial(\"sphereMaterial\", scene);\n" +
                    "material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Colore rosso\n" +
                    "sphere.material = material;\n" +
                    "In questo esempio, viene creato un oggetto StandardMaterial con il nome \"sphereMaterial\" e viene impostato il colore diffuso su rosso. Il materiale viene quindi assegnato alla sfera.\n" +
                    "\n" +
                    "Gestione degli eventi e delle interazioni: Puoi gestire eventi come il clic del mouse o il movimento della telecamera per rendere la scena interattiva. Babylon.js fornisce metodi per l'aggiunta di gestori di eventi. Ad esempio, per gestire il clic del mouse sulla sfera:\n" +
                    "javascript\n" +
                    "Copy code\n" +
                    "sphere.actionManager = new BABYLON.ActionManager(scene);\n" +
                    "sphere.actionManager.registerAction(new BABYLON.ExecuteCodeAction(\n" +
                    "    BABYLON.ActionManager.OnPickTrigger,\n" +
                    "    function (evt) {\n" +
                    "        console.log(\"Cliccato sulla sfera!\");\n" +
                    "    }\n" +
                    "));\n" +
                    "In questo esempio, viene creato un oggetto ActionManager per gestire le azioni e viene registrata un'azione per l'evento \"OnPickTrigger\", che si verifica quando la sfera viene cliccata. L'azione esegue una funzione che visualizza un messaggio nella console.\n" +
                    "\n" +
                    "Avvio del rendering: Infine, devi avviare il rendering della scena utilizzando il motore Babylon.js. Ad esempio:\n" +
                    "javascript\n" +
                    "Copy code\n" +
                    "engine.runRenderLoop(function () {\n" +
                    "    scene.render();\n" +
                    "});\n" +
                    "Questo codice avvia un ciclo di rendering che richiama il metodo render della scena in modo continuo, aggiornando la visualizzazione 3D sulla canvas.\n" +
                    "\n" +
                    "Questi sono solo alcuni degli aspetti di base dell'utilizzo dell'API di Babylon.js. Il framework offre molte altre funzionalità e possibilità per creare scenari 3D complessi e interattivi. Ti consiglio di consultare la documentazione ufficiale di Babylon.js per approfondire gli argomenti specifici e ottenere esempi dettagliati."
            }]
        }
    },
    template: `
    <h2>API</h2>
        <article v-for="capitolo in Capitoli">
        <h3>{{capitolo["Titolo"]}}</h3>
        <p>{{capitolo["Testo"]}}</p>
    </article>
`
    }
const json = {

}
const Lavoraconnoi = {
    template:  `
    <h2>Lavora con noi</h2>
<form>
  <div class="row mb-3">
    <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="inputEmail3">
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="inputPassword3">
    </div>
  </div>
  <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
        <label class="form-check-label" for="gridRadios1">
          First radio
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
          Second radio
        </label>
      </div>
      <div class="form-check disabled">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
        <label class="form-check-label" for="gridRadios3">
          Third disabled radio
        </label>
      </div>
    </div>
  </fieldset>
  <div class="row mb-3">
    <div class="col-sm-10 offset-sm-2">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="gridCheck1">
        <label class="form-check-label" for="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
   `
}
const routes = [
    { path: '/', component: Home },
    { path: '/babylon', component: Babylon },
    { path: '/json', component: json },
    { path: '/lavora', component: Lavoraconnoi }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const app = Vue.createApp({});
app.use(router);
app.mount('#app');