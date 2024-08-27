# Guide de Contribution (Versioning) v1.0

Version du 27.08.2024
Rédigé par Kydo

Merci de considérer le versioning pour ce projet ! Ce document décrit le processus et les meilleures pratiques à suivre pour contribuer lors de l'utilisation de Git/GitHub.

## Table des Matières
1. [Stratégie de Branches](#stratégie-de-branches)
2. [Messages de Commit](#messages-de-commit)
3. [Création d'une Pull Request (PR)](#création-dune-pull-request-pr)
4. [Synchronisation avec la Branche `main`](#synchronisation-avec-la-branche-main)
5. [Gestion des Conflits de Merge](#gestion-des-conflits-de-merge)
6. [Processus de Revue](#processus-de-revue)

---

## Stratégie de Branches

- **Branche Main** : La branche `main` doit toujours être stable et prête pour le déploiement. Les commits directs sur `main` sont restreints.
- **Branches de Fonctionnalités** : Pour chaque nouvelle fonctionnalité ou correction de bug, créez une nouvelle branche à partir de `main`. Utilisez les conventions de nommage suivantes :
  - `feature/nom-de-votre-fonctionnalité`
  - `fix/description-du-bug`
- **Branches de Hotfix** : Pour des corrections urgentes en production, créez une branche à partir de `main` et nommez-la comme suit :
  - `hotfix/description-du-bug-critique`

### Exemple de Création de Branche

```bash
git checkout main
git pull origin main
git checkout -b feature/nom-de-votre-fonctionnalité
```

## Messages de Commit
Écrivez des messages de commit clairs et concis. Cela aide à suivre les modifications et comprendre l'historique du projet.

### Structure du Message de Commit
Type : Indique la nature du commit (par exemple, feat, fix, docs, style, refactor, test, chore).
Sujet : Un résumé court des changements (50 caractères ou moins).
Corps (optionnel) : Une explication détaillée des changements, si nécessaire.

### Exemple de Message de Commit

``` bash
feat: ajouter le flux d'authentification

Implémentation de l'authentification utilisateur avec JWT. Mise à jour des composants de connexion et d'inscription et ajout de tests unitaires.
```

## Création d'une Pull Request (PR)
Lorsque votre fonctionnalité ou correction est prête, créez une Pull Request pour fusionner vos modifications dans la branche main.

### Liste de Contrôle pour la Pull Request
Assurez-vous que votre branche est à jour avec main.
Testez soigneusement votre code.
Écrivez une description claire des modifications dans la PR.
Demandez des revues à au moins un membre de l'équipe.

## Processus de Pull Request
Poussez votre branche de fonctionnalité vers le dépôt :
```bash
git push origin feature/nom-de-votre-fonctionnalité
``` 

Accédez au dépôt GitHub et ouvrez une Pull Request.
Liez les problèmes connexes et demandez des revues.
Attendez l'approbation et assurez-vous que tous les contrôles passent avant de fusionner.

## Synchronisation avec la Branche main
Synchronisez régulièrement votre branche avec main pour minimiser les conflits de merge.

### Synchronisation de Votre Branche
``` bash
git checkout main
git pull origin main
git checkout feature/nom-de-votre-fonctionnalité
git merge main
```
 
## Gestion des Conflits de Merge

Si vous rencontrez des conflits de merge lors de la fusion, résolvez-les avec soin.

### Étapes pour Résoudre les Conflits
Identifiez les fichiers conflictuels via Git.
Ouvrez et résolvez les conflits dans chaque fichier.
Marquez les conflits comme résolus :
```bash
git add fichier-résolu.js
```

Terminez le merge :

``` bash
git merge --continue   # pour merge
```

## Processus de Revue
Toutes les modifications de code doivent être examinées par au moins un membre de l'équipe avant d'être fusionnées dans main.

## Directives pour la Revue de Code
Examinez le code pour sa lisibilité, sa maintenabilité et ses performances.
Assurez-vous que tout nouveau code est correctement testé.
Fournissez des retours constructifs et des suggestions d'amélioration.
Merci de suivre ces directives pour maintenir un projet propre, stable et efficace !



### Explication
Ce fichier `CONTRIBUTING.md` en français fournit des instructions sur les meilleures pratiques pour le versioning et la gestion des contributions. Il est conçu pour aider les membres de l'équipe à comprendre comment gérer les branches, rédiger des messages de commit clairs, créer des pull requests, synchroniser avec la branche `main`, résoudre les conflits de merge, et suivre le processus de revue de code. 