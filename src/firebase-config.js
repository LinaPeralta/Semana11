const firebaseConfig = {
    apiKey: "AIzaSyCCFnWl3e2hURh4xgZUZZV-05s8g6qF57M",
    authDomain: "prueba-d3e94.firebaseapp.com",
    projectId: "prueba-d3e94",
    storageBucket: "prueba-d3e94.appspot.com",
    messagingSenderId: "214176159241",
    appId: "1:214176159241:web:8612db941578fbc821cad8"
};

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}
