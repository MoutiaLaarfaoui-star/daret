// Daret — simulateur. Ton code commence ici.
const ajouterBtn = document.getElementById('ajouter-participant');
const participantsListe = document.getElementById('participants-liste');
const participantsErreur = document.getElementById('participants-erreur');
const nomCercle = document.getElementById('nom-cercle');
const nomCercleErreur = document.getElementById('nom-cercle-erreur');
const cotisationErreur = document.getElementById('cotisation-erreur');
const cotisation = document.getElementById('cotisation');
const periodiciteErreur = document.getElementById('periodicite-erreur');
const periodicite = document.getElementById('periodicite');
const dateDebut = document.getElementById('date-debut');
const dateDebutErreur = document.getElementById('date-debut-erreur');
const generer = document.getElementById('generer');
const contenu = document.getElementById('contenu-resultat');
const resume = document.getElementById('resume-cagnotte');
const resumeTotal = document.getElementById('resume-total-cycle');
const resumeNb = document.getElementById('resume-nb-tours');
const resumeDates = document.getElementById('resume-dates');
const maxInput = 20;
const calendrier = document.getElementById('calendrier');
const corps = document.getElementById('calendrier-corps')




ajouterBtn.addEventListener('click', function() {
    let hasError = false;

    const today = new Date();
   const yyyy = today.getFullYear();
   const mm = String(today.getMonth() + 1).padStart(2, '0');
   const dd = String(today.getDate()).padStart(2, '0'); 

    const todayDate = `${yyyy}-${mm}-${dd}`;
     
    const nom = nomCercle.value.length;

    if (dateDebut.value < todayDate) {
    dateDebutErreur.textContent = "La date doit être aujourd'hui ou ultérieure !";
    dateDebutErreur.classList.remove('hidden');
    hasError = true;
    } else {
    dateDebutErreur.classList.add('hidden');
    } 


    if (nomCercle.value.trim() === "" || nom > 40 || nom < 3) {
        nomCercleErreur.textContent = "Nom du cercle entre  3-40 letter !!!";
        nomCercleErreur.classList.remove('hidden');
        hasError = true;
    } else if(cotisation.value.trim() === "" || cotisation.value > 50000 || cotisation.value < 100) {
        cotisationErreur.textContent = "cotisation entre 100-50.000 (MAD) !!!";
        cotisationErreur.classList.remove('hidden');
        hasError = true;
    } else if(dateDebut.value.trim() === "") {
        dateDebutErreur.textContent = " date de debut doit être aujourd'hui ou ultérieure ! !!!!";
        dateDebutErreur.classList.remove('hidden');
        hasError = true;
    } else {
        nomCercleErreur.classList.add('hidden');
    }

   



    const inputs = participantsListe.querySelectorAll('input');
    const dernierInput = inputs[inputs.length - 1];
    if (inputs.length > 0) {
        
        if (dernierInput.value.trim() === "" || dernierInput.value.length < 3 || dernierInput.value.length > 30) {
            participantsErreur.textContent = "nom de  participant !!!!";
            participantsErreur.classList.remove('hidden');
            hasError = true;
        }
    }
    
  
    
    if (hasError) return;

    if (hasError = true) {
        cotisationErreur.classList.add('hidden');
        dateDebutErreur.classList.add('hidden');
    }

    participantsErreur.classList.add('hidden');

    
    
    
    
    
    const newInput = document.createElement('input');
    newInput.type = "text";
    newInput.name = "participant";
    newInput.placeholder = "Prénom du participant";
    newInput.className = "w-full rounded border border-daret-bordure px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-daret-vert";
    
    
    
    const deleteBtn = document.createElement('button');
    deleteBtn.type = "button";
    deleteBtn.textContent = "✕";
    deleteBtn.className = "rounded bg-red-100 px-3 py-2 text-red-600 hover:bg-red-200 hidden";
   

    
    if (inputs.length > 0) {
        deleteBtn.classList.remove('hidden')
    }
    
    if (inputs.length < 20) {
        
        const li = document.createElement('li');
        li.className = "flex items-center gap-2";

        li.appendChild(newInput);
        li.appendChild(deleteBtn);
        participantsListe.appendChild(li); 

             deleteBtn.addEventListener('click', function() {
               li.remove();
                participantsErreur.classList.add('hidden');
            });
    }
       

     

    const  resum =  (inputs.length + 1) * cotisation.value;

    
    generer.addEventListener('click', () => {
        if (inputs.length > 2) {
            contenu.classList.remove('hidden')
            calendrier.classList.remove

            resume.textContent = resum;

            resumeTotal.textContent = cotisation.value;

            resumeNb.textContent = inputs.length + 1;

            
                    nomber = inputs.length;

                     if (periodicite.value === 'hebdomadaire') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (7 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${dateDebut.value} => ${year}-${month}-${day}`;
                    } if (periodicite.value === 'quinzaine') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (15 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${dateDebut.value} => ${year}-${month}-${day}`;
                    } if (periodicite.value === 'mensuelle') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (30 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${dateDebut.value} => ${year}-${month}-${day}`;
                    }
                
                    for (let i = 0; i < inputs.length; i++) {
                        
                        
                    }

        } 

        deleteBtn.addEventListener('click', function () {
            resume.textContent = cotisation.value * inputs.length;

            resumeNb.textContent = inputs.length;

              nomber = inputs.length - 1;

                     if (periodicite.value === 'hebdomadaire') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (7 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${dateDebut.value} => ${year}-${month}-${day}`;
                    } if (periodicite.value === 'quinzaine') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (15 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${dateDebut.value} => ${year}-${month}-${day}`;
                    } if (periodicite.value === 'mensuelle') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (30 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${dateDebut.value} => ${year}-${month}-${day}`;
                    }

                    if (inputs.length < 2) {
                        contenu.classList.add('hidden')
                    }
        })
    })
  
   
         
   
   
           
    
  


});




// Le HTML (index.html) est déjà intégré : lis-le, repère les id et les data-*, puis fais-le vivre.
