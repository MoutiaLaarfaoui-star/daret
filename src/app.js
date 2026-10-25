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
const calendrier = document.getElementById('calendrier');
const corps = document.getElementById('calendrier-corps');
const compteur = document.getElementById('participants-compteur')


nomCercle.addEventListener('input', ()=> {
    if (nomCercle.value === "" || nomCercle.value.length > 40 || nomCercle.value.length < 3) {
        nomCercleErreur.textContent = "nom entre 3-40 latter !!!"
        nomCercleErreur.classList.remove('hidden')
    } else {
        nomCercleErreur.classList.add('hidden')
    }
})

cotisation.addEventListener('input', ()=> {
    if (cotisation.value === "" || cotisation.value > 50000 || cotisation.value < 100) {
        cotisationErreur.textContent = "cotisation entre 100-50.000 MAD !!!"
        cotisationErreur.classList.remove('hidden')
    } else {
        cotisationErreur.classList.add('hidden')
    }
})


   const today = new Date();
   const yyyy = today.getFullYear();
   const mm = String(today.getMonth() + 1).padStart(2, '0');
   const dd = String(today.getDate()).padStart(2, '0'); 

    const todayDate = `${yyyy}-${mm}-${dd}`;

dateDebut.addEventListener('input', ()=> {
    if (dateDebut.value < todayDate || dateDebut.value === "") {
        dateDebutErreur.textContent = "La date doit être aujourd'hui ou ultérieure !!"
        dateDebutErreur.classList.remove('hidden')
    } else {
        dateDebutErreur.classList.add('hidden')
    }
})


ajouterBtn.addEventListener('click', function () {

    hasError = false;
    
    const inputs = participantsListe.querySelectorAll('input');
    const dernierInput = inputs[inputs.length - 1];
    if (inputs.length > 0) {

        if (dernierInput.value.trim() === "" || dernierInput.value.length < 3 || dernierInput.value.length > 30) {
            participantsErreur.textContent = "nom de  participant !!!!";
            participantsErreur.classList.remove('hidden');
            hasError = true;
        } else {
            participantsErreur.classList.add('hidden');
        }
    }

    if (hasError) return;
    
    const newInput = document.createElement('input');
    newInput.type = "text";
    newInput.name = "participant";
    newInput.placeholder = "Prénom du participant";
    newInput.className = "w-full rounded border border-daret-bordure px-3 py-2 focus:outline-2 focus:outline-offset-2 focus:outline-daret-vert";
    
    const deleteBtn = document.createElement('button');
    deleteBtn.type = "button";
    deleteBtn.textContent = "✕";
    deleteBtn.className = "rounded bg-red-100 px-3 py-2 text-red-600 hover:bg-red-200";
    
    const lis = document.querySelectorAll('input');
    if (lis.length < 20) {
        const li = document.createElement('li');
            li.className = "flex items-center gap-2";
    
            li.appendChild(newInput);
            li.appendChild(deleteBtn);
            participantsListe.appendChild(li); 
    
                 deleteBtn.addEventListener('click', function() {
                   li.remove();
                   newInput.remove();
                    participantsErreur.classList.add('hidden');
                     for (let i = 0; i < lis.length; i++) {
                        compteur.textContent = i-2 + "  participant";
                     }
                });
        
    }

    for (let i = 0; i < lis.length; i++) {
        compteur.textContent = i-1 + "  participant";
    }
    


    generer.addEventListener('click', function() {
        erreur = false;
    
         if (nomCercle.value === "" || nomCercle.value.length > 40 || nomCercle.value.length < 3) {
            nomCercleErreur.textContent = "nom entre 3-40 latter !!!"
            nomCercleErreur.classList.remove('hidden')
            erreur = true;
        } else {
            nomCercleErreur.classList.add('hidden')
        }
    
           if (cotisation.value === "" || cotisation.value > 50000 || cotisation.value < 100) {
            cotisationErreur.textContent = "cotisation entre 100-50.000 MAD !!!"
            cotisationErreur.classList.remove('hidden')
            erreur = true
        } else {
            cotisationErreur.classList.add('hidden')
        }
    
        if (dateDebut.value < todayDate || dateDebut.value === "") {
            dateDebutErreur.textContent = "La date doit être aujourd'hui ou ultérieure !!"
            dateDebutErreur.classList.remove('hidden')
            erreur = true
        } else {
            dateDebutErreur.classList.add('hidden')
        }
    
        
       ereur = false;
        
       const inputr = document.querySelectorAll('input');

       if (inputr[inputr.length -1].value === "") {
        ereur = true;
       }
       const h = (inputr.length -3) * cotisation.value;

           let userDate = new Date(dateDebut.value);
           let userDate2 = new Date(dateDebut.value)

            const options = { day: 'numeric', month: 'long', year: 'numeric' };

            
            
            
            if (erreur === false && inputr.length - 3 > 1 && ereur === false) {
                contenu.classList.remove('hidden');
                 participantsErreur.classList.add('hidden');
                resume.textContent = h;
                resumeNb.textContent = inputr.length - 3;
                resumeTotal.textContent = cotisation.value;
                
                if (periodicite.value === 'mensuelle') {
                    userDate.setDate(userDate.getDate() + (30 * (inputr.length - 4)));

                    resumeDates.textContent = userDate2.toLocaleDateString("fr-FR", options) + " / " + userDate.toLocaleDateString("fr-FR", options);
                } else if (periodicite.value === 'quinzaine') {
                    userDate.setDate(userDate.getDate() + (15 * (inputr.length - 4)));

                    resumeDates.textContent = userDate2.toLocaleDateString("fr-FR", options) + " / " + userDate.toLocaleDateString("fr-FR", options);
                } else {
                    userDate.setDate(userDate.getDate() + (7 * (inputr.length - 4)));

                    resumeDates.textContent = userDate2.toLocaleDateString("fr-FR", options) + " / " + userDate.toLocaleDateString("fr-FR", options);
                }
                
            if (corps) {
                corps.innerHTML = '';
                
                for (let i = 0; i < inputr.length - 3; i++) {

                    const tr = document.createElement('tr');
                    
                    
                    const nb = document.createElement('th');
                    nb.className = "p-8 py-4 text-daret-vert"
                    nb.textContent = i +1;
                 
                const date = document.createElement('th');
            if (periodicite.value === 'mensuelle') {
                let userDate = new Date(dateDebut.value);
                userDate.setDate(userDate.getDate() + (30 * i));


                const options = { day: 'numeric', month: 'long', year: 'numeric' };


                date.textContent = userDate.toLocaleDateString("fr-FR", options);
            } else if (periodicite.value === 'quinzaine') {
                let userDate = new Date(dateDebut.value);
                userDate.setDate(userDate.getDate() + (15 * i));


                const options = { day: 'numeric', month: 'long', year: 'numeric' };


                date.textContent = userDate.toLocaleDateString("fr-FR", options);
            } else {
             let userDate = new Date(dateDebut.value);
                userDate.setDate(userDate.getDate() + (7 * i));


                const options = { day: 'numeric', month: 'long', year: 'numeric' };


                date.textContent = userDate.toLocaleDateString("fr-FR", options);
            }
                const nom = document.createElement('th')
                nom.className = "px-4"
                nom.textContent = inputr[i +3].value;

                const mont = document.createElement('th');
                mont.className = "text-daret-vert"
                mont.textContent = h + "MAD";

                const status = document.createElement('button')
                status.textContent = 'À venir';
                status.className = "px-3 mt-3 mx-3 border";

                status.addEventListener('click', () => {

                    if (status.textContent === 'À venir') {
                        status.textContent = 'Terminé';
                        
                        status.classList.add('bg-daret-vert', 'text-white');
                        status.classList.remove('hover:bg-daret-fond');
                    } else {
                        status.textContent = 'À venir';
                        status.classList.remove('bg-daret-vert', 'text-white');
                        status.classList.add('hover:bg-daret-fond');
                    }
                })
        
                    tr.appendChild(nb);
                    tr.appendChild(date);
                    tr.appendChild(nom);
                    tr.appendChild(mont);
                    tr.appendChild(status);
                    corps.appendChild(tr);
                }
                
                
                
            }
            
        } else {
            contenu.classList.add('hidden');
            participantsErreur.textContent = "nom des participant entre 3 - 30 latter !!!"
            participantsErreur.classList.remove('hidden');
        }
    })

})





// Le HTML (index.html) est déjà intégré : lis-le, repère les id et les data-*, puis fais-le vivre.
