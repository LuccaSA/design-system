# Positionnement des champs par rapport aux libellés

- Relier visuellement le libellé au champ associé
- Être cohérent au sein d'un même formulaire dans le positionnement du libellé par rapport au champ associé

![à faire](guidelines/general/form/images/form-layout-do.png " ") ![à éviter](guidelines/general/form/images/form-layout-dont-1.png "La mauvaise gestion des espaces entre les différents groupes (libellé + champ associé) complique la lecture") ![à éviter](guidelines/general/form/images/form-layout-dont-2.png "La variété dans le positionnement libellé/champ empêche l'utilisateur de scanner rapidement le formulaire")

 # Regroupements logiques

Sur des formulaires longs, créer des sections pour regrouper les champs liés logiquement :

![à faire](guidelines/general/form/images/form-group-do.png " ") ![à éviter](guidelines/general/form/images/form-group-dont.png "L'absence de regroupement créé un formulaire indigeste et potentiellement décourageant pour l'utilisateur")

De la même façon, afin de ne pas décourager l'utilisateur, on peut découper le formulaire en plusieurs étapes :

- En regroupant les champs obligatoires dans une première étape
- En reléguant en 2e étape les champs facultatifs  

# Guider l'utilisateur tout au long du processus de complétion du formulaire

1. indiquer clairement **les champs obligatoires** (si on opte pour l'indicateur conventionnel, une astérisque, il n'est pas nécessaire d'y associer une légende)
2. mettre en valeur le champ sur lequel est l'utilisateur par un **état focus visible**
3. gestion des erreurs :
   1. si la valeur saisie par l'utilisateur est erronée, **l'avertir dès qu'il quitte le champ et dans un langage compréhensible.**
   2. **Ne pas faire apparaître d'erreur tant que l'utilisateur n'a pas interagi avec les champs.**
   3. Quand l'utilisateur vient corriger une valeur erronée, faire disparaître l'indicateur d'erreur dès que possible (champ obligatoire sans contrainte de format : dès que l'utilisateur a saisi un caractère ; champ obligatoire avec contrainte de format : dès que le format est valide)
4. si on attend un format spécifique, **donner l'indication** (pour les contraintes sur les mots de passe par exemple)
5. utiliser des inputs adaptés à la valeur attendue :
   - date > *datepicker*
   - montant, quantité > input number
   - peu de caractères (code postal, par exemple) > champ moins long
   - *select* si la valeur attendue doit être conforme à une liste existante (entité légale, département…)

![à faire](guidelines/general/form/images/form-guide-do.gif) ![à éviter](guidelines/general/form/images/form-guide-dont.gif)

# À propos des inputs adaptés au contexte, comment choisir entre radio buttons et select ?

- **Cas N° 1** : il n'y a que 2 options possibles : radio buttons

![Radio](guidelines/general/form/images/case-1.png)

- **Cas N° 2** : y a entre 3 et 6 options possibles : groupe de boutons
  ![Goupe de boutons](guidelines/general/form/images/case-2.png)

- **Cas N° 3** : il y a plus de 6 options : select (avec un champ de recherche pour filtrer les options s'il y en a plus de 10)
  ![Select](guidelines/general/form/images/case-3.png)

Pourquoi différencier les 2 premiers cas ? On a remarqué qu'il n'était pas évident d'identifier le bouton sélectionné quand on n'en a que 2 (parce qu'on n'a pas tous la même idée de l'aspect que doit avoir un bouton sélectionné). Quand on a 3 options, le problème est résolu du lui-même puisque le bouton sélectionné est forcément celui différent des 2 autres.

# Switch ou cases à cocher ?

On utilise un switch pour :

- L'activation/désactivation
- Tout changement d'état immédiat, indépendant d'un bouton « enregistrer »

Dans les autres cas, on privilégiera l'utilisation de cases à cocher.

![Radio](guidelines/general/form/images/toggles.png)

![Radio](guidelines/general/form/images/toggles-multiple.png)

cf. <https://www.nngroup.com/videos/checkboxes-vs-switches-forms/?lm=visual-indicators-differentiators&pt=article>  

# Champs compact ou material ?

On privilégie les champs type « material » pour les interfaces manipulées par le end-user et/ou des formulaires courts.

Pour les interfaces d'admin et les formulaires longs, on mise plutôt sur les formulaires compact qui permettent de visualiser plus de champs simultanément.
