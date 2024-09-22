<template>
  <div class="flex flex-row space-x-4 p-4">
    <div class="size-min rounded p-2 ring-2 ring-gray-950">
      <p
        v-for="subscriber in subscribers[0].emails"
        :key="subscriber"
      >
        {{ subscriber }}
      </p>
    </div>
    <div class="space-y-2">
      <p>
        Total Subscribers: {{ subscribers[0].emails.length }}
      </p>
      <UButton
        @click="copyEmails"
      >
        Copy Emails
      </UButton>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useFirestore } from 'vuefire';
import { collection } from 'firebase/firestore';

const db = useFirestore();
const subscriptions = collection(db, 'subscriptions');
const subscribers = useCollection(subscriptions);
const toast = useToast();

function copyEmails() {
  const emails = subscribers.value[0].emails.join('\n');
  navigator.clipboard.writeText(emails);
  toast.add({
    title: 'Copied',
    description: 'Emails copied to clipboard',
  });
}

definePageMeta({
  layout: false,
});
</script>
