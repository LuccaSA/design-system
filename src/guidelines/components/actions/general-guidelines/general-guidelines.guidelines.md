# Aspect

- Bouton : quand l'action reste dans le flow (création d'un objet, changement d'état de l'objet manipulé, etc.)
- Lien : quand l'action est décorrélée du flow (manipulation de l'interface, action secondaire, etc.)
- Icône : quand l'action est répétée (sur les différents éléments d'une liste, par exemple) et que l'espace disponible est réduit. Cf. section sur les icônes

![Importance vs positionnement](guidelines/components/actions/general-guidelines/images/actions.gif)

# Quelle couleur ?

Idéalement, hors contexte particulier de type dashboard, on ne devrait avoir qu'un seul bouton coloré par vue, qui correspond à l'action principale.

*Plus que la couleur du bouton, l'important est de considérer le contraste entre la couleur du bouton et celle de l'arrière plan sur lequel il est positionné. Ainsi, un bouton bleu sera clairement visible sur un fond blanc, mais on préférera un bouton blanc si le fond est coloré.*

![à faire](guidelines/components/actions/general-guidelines/images/actions-color-do.png "La présence d'un seul bouton coloré aide l'utilisateur à identifier immédiatement l'action principale proposée par la page") ![à éviter](guidelines/components/actions/general-guidelines/images/actions-color-dont-1.png "L'absence de bouton coloré empêche l'utilisateur d'identifier clairement l'action principale.") ![à éviter](guidelines/components/actions/general-guidelines/images/actions-color-dont-2.png "La multiplication de boutons colorés empêche l'utilisateur d'identifier clairement l'action principale.")

La zone cliquable doit être facilement accessible :

![à faire](guidelines/components/actions/general-guidelines/images/actions-link-do.png) ![à éviter](guidelines/components/actions/general-guidelines/images/actions-link-dont.png)

# Wording

- On privilégie l'emploi de verbes d'action, employés à l'infinitif.
- On peut s'affranchir du verbe si le libellé reste clair (« nouvel élément variable » pour « créer un nouvel élément variable »).
- On évite les libellés trop vagues (« OK », « Nouveau »)
- On ne conjugue pas les verbes

![à faire](guidelines/components/actions/general-guidelines/images/actions-wording-do.png) ![à éviter](guidelines/components/actions/general-guidelines/images/actions-wording-dont.png)

# Mode d'affichage : quand et où afficher les actions ?

Par convention, chez Lucca, quand on fait cohabiter un bouton principal avec un lien d'annulation, on place le bouton principal à gauche et le lien d'annulation à droite :

![à faire](guidelines/components/actions/general-guidelines/images/actions-layout-do.png) ![à éviter](guidelines/components/actions/general-guidelines/images/actions-layout-dont.png)

## Toujours visible : action principale de la page

Si cette action correspond à la création d'une occurence d'une liste d'objets, on le place plutôt en haut de page

![à faire](guidelines/components/actions/general-guidelines/images/actions-position-do-1.png) ![à éviter](guidelines/components/actions/general-guidelines/images/actions-position-dont-1.png)

Si cette action correspond à la validation/soumission d'un formulaire, on le place en clôture du formulaire en question

![à faire](guidelines/components/actions/general-guidelines/images/actions-position-do-2.png) ![à éviter](guidelines/components/actions/general-guidelines/images/actions-position-dont-2.png)

## Apparition au survol : action facultative ou répétitive

![à faire](guidelines/components/actions/general-guidelines/images/actions-hover-do.gif) ![à éviter](guidelines/components/actions/general-guidelines/images/actions-hover-dont.png)

# Feedbacks

Chaque action doit être immédiatement suivie d'un feedback. Selon le contexte, le feedback peut être de plusieurs natures :

- Si l'action implique un changement de page : dans ce cas, le fait que la page change tient lieu feedback.
- Si l'action génère la création d'un nouvel objet au sein d'une liste : mise en valeur visuelle de l'objet créé (par une couleur de fond différente des autres objets, un contour, une apparition progressive, etc.) -  A contrario, la suppression d'un objet doit être visuellement représentée (fade-out, placeholder temporaire à l'endroit où était visible l'objet, etc.)
- Si l'action entérine un changement d'état de valeur sur un champ/un ensemble de champs : le libellé du bouton est remplacé par un loader suivi d'une icône symbolisant le succès ou l'échec.
- Si l'action donne lieu à un process extérieur au soft/module (envoi de mail), les éléments qui ont permis l'action (textarea, bouton…) disparaissent et sont remplacés (dans le locus of attention, donc) par un message confirmant le lancement du process.

# À propos des icônes

On accompagne **toujours** une icône d'un tooltip explicite, même les icônes qui semblent universelles (ex : Poubelle > *Effacer* - Crayon > *Modifier* - Flèche tournante > *Rafraîchir*, Loupe > *Chercher*, Croix > *Fermer*, etc.)

On limite au maximum l'utilisation des icônes dans les boutons. Le libellé seul devrait toujours suffire à faire comprendre l'action.

Seule exception : dans le cas où on a 2 boutons d'importance équivalente (ex : Valider/Refuser), pour souligner la différence entre les deux.
