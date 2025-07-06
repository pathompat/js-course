<script setup>
  import { ref, onMounted } from 'vue';
  import { useRouter } from 'vue-router';
  import { useUser } from '@/composables/useUser';

  const router = useRouter();
  const usernameInput = ref('');
  const divLoginRef = ref(null); // div login ref
  const password = ref('');
  const user = useUser();

  const handleLogin = () => {
    if (usernameInput.value && password.value) {
      user.value = usernameInput.value;
      router.push('/');
    } else {
      alert('กรุณากรอกข้อมูลให้ครบ');
      // focusUsernameInput();
    }
  }

  onMounted(() => {
    console.log(divLoginRef);
    console.log(divLoginRef.value.offsetHeight);
  });
</script>

<template>
  <div ref="divLoginRef">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card>
            <v-card-title class="text-h5">Login</v-card-title>
            <v-card-text>
              <v-text-field
                v-model="usernameInput"
                label="Username"
                ref="usernameInputRef"
              />
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                ref="passwordInputRef"
              />
            </v-card-text>
            <v-card-actions :style="{ justifyContent: 'right' }">
              <v-btn color="primary" @click="handleLogin">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>