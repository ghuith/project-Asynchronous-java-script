// Tâche 1: Itérer avec Async/Await
async function iterateWithAsyncAwait(array) {
    try {
        for (const value of array) {
            // Attendre 1 seconde
            await new Promise(resolve => setTimeout(resolve, 1000));
            console.log(`Valeur enregistrée: ${value}`);
        }
        console.log("Itération terminée");
    } catch (error) {
        console.error("Erreur lors de l'itération:", error);
    }
}

// Tâche 2: Attendre un appel
async function awaitCall() {
    try {
        // Simuler un appel API avec un délai aléatoire
        const data = await new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    message: "Données reçues avec succès",
                    timestamp: new Date().toISOString()
                });
            }, 2000);
        });
        
        console.log("Données reçues:", data);
        return data;
    } catch (error) {
        console.error("Erreur lors de l'appel:", error);
        throw error;
    }
}

// Tâche 3: Gérer les erreurs avec Async/Await
async function awaitCallWithErrorHandling() {
    try {
        // Simuler un appel API qui peut échouer aléatoirement
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simuler un échec aléatoire 50% du temps
                if (Math.random() > 0.5) {
                    reject(new Error("Erreur de connexion au serveur"));
                } else {
                    resolve({
                        id: 1,
                        message: "Données reçues avec succès",
                        timestamp: new Date().toISOString()
                    });
                }
            }, 2000);
        });
        
        console.log("Données reçues avec succès:", data);
        return data;
    } catch (error) {
        const messageUtilisateur = "Désolé, nous n'avons pas pu récupérer vos données. " +
            "Veuillez vérifier votre connexion et réessayer.";
        console.error(messageUtilisateur);
        console.error("Détails techniques:", error.message);
        
        // Remonter une erreur plus conviviale
        throw new Error(messageUtilisateur);
    }
}

// Exemples d'utilisation:
async function executeExamples() {
    console.log("--- Test de iterateWithAsyncAwait ---");
    await iterateWithAsyncAwait([1, 2, 3, 4, 5]);

    console.log("\n--- Test de awaitCall ---");
    await awaitCall();

    console.log("\n--- Test de awaitCallWithErrorHandling ---");
    try {
        await awaitCallWithErrorHandling();
    } catch (error) {
    
    }
}

