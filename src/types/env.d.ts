/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL?: string
  readonly VITE_USE_MOCK_API?: string
  readonly VITE_AUTH_TOKEN_KEY?: string
  readonly VITE_REFRESH_TOKEN_KEY?: string
  readonly VITE_APP_NAME?: string
  readonly VITE_SUPPORT_EMAIL?: string
  readonly VITE_SUPPORT_PHONE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
