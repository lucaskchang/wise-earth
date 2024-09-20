import { useFirestore } from 'vuefire';
import { collection, doc, updateDoc, getDoc } from 'firebase/firestore';

export default async function (email: string) {
  const db = useFirestore();
  const subscriptions = collection(db, 'subscriptions');

  const docRef = doc(subscriptions, 'subscribers');
  const docSnap = await getDoc(docRef);
  if (email === '' || docSnap.data().emails.includes(email)) {
    return;
  }
  updateDoc(doc(subscriptions, 'subscribers'), {
    emails: [...docSnap.data().emails, email],
  });
  const toast = useToast();
  toast.add({
    title: 'Subscribed!',
    description: 'You have successfully subscribed to our newsletter.',
  });
}
