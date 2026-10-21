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





ajouterBtn.addEventListener('click', function() {
    let hasError = false;

    const today = new Date();
   const yyyy = today.getFullYear();
   const mm = String(today.getMonth() + 1).padStart(2, '0');
   const dd = String(today.getDate()).padStart(2, '0'); 

    const todayDate = `${yyyy}-${mm}-${dd}`;


    if (dateDebut.value < todayDate) {
    dateDebutErreur.textContent = "La date doit être aujourd'hui ou ultérieure !";
    dateDebutErreur.classList.remove('hidden');
    hasError = true;
    } else {
    dateDebutErreur.classList.add('hidden');
    }


    if (nomCercle.value.trim() === "") {
        nomCercleErreur.textContent = "entre cercle name !!!";
        nomCercleErreur.classList.remove('hidden');
        hasError = true;
    } else if(cotisation.value.trim() === "") {
        cotisationErreur.textContent = "entre cotisation (MAD) !!!";
        cotisationErreur.classList.remove('hidden');
        hasError = true;
    } else if(dateDebut.value.trim() === "") {
        dateDebutErreur.textContent = "entre date de debut !!!!";
        dateDebutErreur.classList.remove('hidden');
        hasError = true;
    } else {
        nomCercleErreur.classList.add('hidden');
    }

   



    const inputs = participantsListe.querySelectorAll('input');
    const dernierInput = inputs[inputs.length - 1];
    if (inputs.length > 0) {
        
        if (dernierInput.value.trim() === "") {
            participantsErreur.textContent = "entre nom !!!!";
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

    const limit = document.querySelectorAll('li').length

    
    
         
         const li = document.createElement('li');
         li.className = "flex items-center gap-2";
         
         const newInput = document.createElement('input');
         newInput.type = "text";
         newInput.name = "participant";
         newInput.placeholder = "Prénom du participant";
         newInput.className = "w-full rounded border border-daret-bordure px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-daret-vert";
     
         const deleteBtn = document.createElement('button');
         deleteBtn.type = "button";
         deleteBtn.textContent = "✕";
         deleteBtn.className = "rounded bg-red-100 px-3 py-2 text-red-600 hover:bg-red-200";
         deleteBtn.addEventListener('click', function() {
             li.remove();
             participantsErreur.classList.add('hidden');
         });
     
         li.appendChild(newInput);
         li.appendChild(deleteBtn);
         participantsListe.appendChild(li); 
     
        
         
   
   
        
        if (nomCercle.value.length > 3 && nomCercle.value.length < 40) {
             nomCercleErreur.classList.add('hidden')

            if (cotisation.value >= 100 && cotisation.value <= 50000) {
                
                    generer.addEventListener('click', () => {
                      nomCercleErreur.classList.add('hidden')
                      cotisationErreur.classList.add('hidden')
                     contenu.classList.remove('hidden')
                     
             
                     resume.textContent = cotisation.value * (inputs.length + 1);

                     resumeTotal.textContent = cotisation.value ;
                     
                         nomber = inputs.length;

                     if (periodicite.value === 'hebdomadaire') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (7 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${day}-${month}-${year}`;
                    } if (periodicite.value === 'quinzaine') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (15 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${day}-${month}-${year}`;
                    } if (periodicite.value === 'mensuelle') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (30 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${day}-${month}-${year}`;
                    }


                      deleteBtn.addEventListener('click', function() {
                           resume.textContent = cotisation.value * (inputs.length);
                           resumeNb.textContent = inputs.length;
                            if (inputs.length === 0) {
                             contenu.classList.add('hidden')
                            }

                     nomber = inputs.length - 1;

                     if (periodicite.value === 'hebdomadaire') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (7 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${day}-${month}-${year}`;
                    } if (periodicite.value === 'quinzaine') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (15 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${day}-${month}-${year}`;
                    } if (periodicite.value === 'mensuelle') {
                        let userDate = new Date(dateDebut.value)
                    
                        userDate.setDate(userDate.getDate() + (30 * nomber));

                        const day = userDate.getDate();
                        const month = userDate.getMonth() + 1;
                        const year = userDate.getFullYear();
                    
                        resumeDates.textContent = `${day}-${month}-${year}`;
                    }
                            
                        });

                     if (newInput.value.trim() !== "") {
                       resumeNb.textContent = inputs.length + 1;

                    } else {
                        resumeNb.textContent = inputs.length;
                    }


                   

                    
                    
                    
                     });                  
                


                    
                 
            } else {
                cotisationErreur.textContent = "entre number between 100 and 50.000 MAD !!!";
                cotisationErreur.classList.remove('hidden');
            }
         } else {
             nomCercleErreur.textContent = "entre nom between 3 and 40 caracter !!!";
             nomCercleErreur.classList.remove('hidden');
         }
    
  


});






// Le HTML (index.html) est déjà intégré : lis-le, repère les id et les data-*, puis fais-le vivre.
