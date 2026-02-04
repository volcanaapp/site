import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Define a função para criar um cliente Supabase do lado do cliente (browser).
  // Ele usa as variáveis de ambiente que você configurou para se conectar
  // ao seu projeto Supabase de forma segura.
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}