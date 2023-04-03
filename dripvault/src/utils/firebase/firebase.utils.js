import { initializeApp } from 'firebase/app'
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth'
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCdeAyqyASrOSUrJXD38xJXX686jCDXPWs",
    authDomain: "drip-vault-db.firebaseapp.com",
    projectId: "drip-vault-db",
    storageBucket: "drip-vault-db.appspot.com",
    messagingSenderId: "648572660310",
    appId: "1:648572660310:web:bfd7c9ce583c16e5dfa9f7"
}

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({ 
    prompt: 'select_account' 
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating the user', error.message)
        }
    }

    return userDocRef
}