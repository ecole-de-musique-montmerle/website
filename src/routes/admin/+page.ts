// La page /admin est volontairement :
// - non prérendue (prerender = false) : elle n'est pas générée statiquement
//   et n'apparaît donc pas dans le sitemap implicite du build ;
// - rendue côté client uniquement (ssr = false) : l'auth Firebase dépend
//   d'APIs navigateur (pop-up, localStorage, IndexedDB).
// Aucun lien du site public ne pointe vers /admin : la page est « cachée »,
// accessible uniquement par son URL directe.
export const prerender = false;
export const ssr = false;
