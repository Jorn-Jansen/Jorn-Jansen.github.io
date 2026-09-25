import { ref } from 'vue'
import { supabase } from './supabase'

export const session = ref(null)

supabase.auth.getSession().then(({ data }) => {
  session.value = data.session
})

supabase.auth.onAuthStateChange((_event, newSession) => {
  session.value = newSession
})
