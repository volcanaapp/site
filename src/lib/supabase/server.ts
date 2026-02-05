import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

export function createClient() {
  const cookieStore = cookies()

  // Define a função para criar um cliente Supabase do lado do servidor.
  // Ele usa cookies para gerenciar a sessão do usuário de forma segura
  // em Server Components, Server Actions e Route Handlers.
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value, ...options })
          } catch (error) {
            // O método `set` foi chamado a partir de um Server Component.
            // Isso pode ser ignorado se você tiver um middleware
            // atualizando as sessões do usuário.
          }
        },
        remove(name: string, options: CookieOptions) {
          try {
            cookieStore.set({ name, value: '', ...options })
          } catch (error) {
            // O método `remove` foi chamado a partir de um Server Component.
            // Isso pode ser ignorado se você tiver um middleware
            // atualizando as sessões do usuário.
          }
        },
      },
    }
  )
}