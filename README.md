# Hypnose Malika

Site vitrine de Malika Amari, praticienne en hypnose quantique, spirituelle et énergétique.
Site statique [Astro](https://astro.build), déployé sur Vercel à chaque push sur `main`.

## Commandes

| Commande          | Action                                        |
| :---------------- | :-------------------------------------------- |
| `npm install`     | Installe les dépendances (Node 22.12 minimum) |
| `npm run dev`     | Serveur local sur `localhost:4321`            |
| `npm run build`   | Build de production dans `./dist/`            |
| `npm run preview` | Aperçu local du build                         |
| `npm run check`   | Lint et format (Biome)                        |
| `npm run fix`     | Corrige le format et le lint                  |

## Structure

- `src/pages/` : l'accueil, les deux pages légales, la page 404 et `robots.txt`
- `src/components/` : une section de l'accueil par composant, plus le header et le footer
- `src/layouts/Layout.astro` : balises `<head>` (titre, description, partage) communes aux pages
- `src/styles/global.css` : palette, polices et styles communs
- `src/assets/` : images optimisées au build ; `public/` : fichiers servis tels quels

## À savoir

- **Couleurs et polices** : tout se règle dans les variables en tête de `src/styles/global.css`.
- **Nom de domaine** : l'adresse du site est déclarée dans `astro.config.mjs` (`site`). Elle sert au
  sitemap, aux liens canoniques et aux images de partage, donc à mettre à jour si le domaine change.
- **Formulaire de contact** : envoyé via Formspree, l'identifiant est dans `src/components/Contact.astro`.
