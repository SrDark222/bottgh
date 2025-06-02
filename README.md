# Check User OAuth2 API - Discord

API simples para validar se o token OAuth2 do usuário bate com o user_id passado.

## Uso

- Método: POST
- Endpoint: `/api/checkOAuth?user_id=123456789012345678`
- Body JSON: `{ "oauth_token": "TOKEN_OAUTH2_DO_USER" }`

## Respostas

- `{ status: 1 }` — token válido, user autenticado
- `{ status: 2 }` — token inválido ou user_id não confere

## Deploy

Deploy direto na Vercel.  
Basta rodar:

```bash
vercel
