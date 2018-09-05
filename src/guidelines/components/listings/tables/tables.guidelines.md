# Guidelines

> L'ensemble des bonnes pratiques préconisées ci-après s'appliquent aux tableaux présentant des données dédiées aux utilisateurs, mais pas nécessairement aux tableaux de reporting : les tableaux de reporting sont en effet principalement dédiés à être exportés pour être ensuite manipulés via Excel, et donc ne présentent pas les mêmes exigences de lisibilité.

## Aspect
### Marges et bordures
Les marges internes (padding) des cellules doivent être suffisamment grandes pour garantir la lisibilité du tableau sans avoir à l'alourdir avec l'ajout de bordures verticales.

Selon la largeur du tableau et la densité du contenu, on peut conserver les bordures horizontales à condition d'utiliser une couleur offrant un faible contraste afin de ne pas surcharger.

On conserve les bordures pour séparer l'en-tête (thead) et l'éventuel pied (tfoot) du corps du tableau (tbody).

![A faire](/guidelines/components/listings/tables/images/table-borders-do-1.png) ![A faire](/guidelines/components/listings/tables/images/table-borders-do-2.png) ![A éviter](/guidelines/components/listings/tables/images/table-borders-dont.png)

Si le tableau est compris dans un bloc matérialisé (ex. : dans une carte), on considère que les bordures du bloc fusionnent avec les bordures du tableau : cela implique de faire courir les éventuelles bordures horizontales jusqu'aux bords latéraux du bloc parent, et de ne pas matérialiser les bordures extérieures du tableau.

![A faire](/guidelines/components/listings/tables/images/table-card-do.png) ![A éviter](/guidelines/components/listings/tables/images/table-card-dont.png)

La largeur des colonnes devrait toujours s'adapter à son contenu, pour éviter d'avoir des marges trop importantes entre les données, qui compliquent la lecture d'une ligne dans son ensemble.

### Alignements
Les titres de colonnes sont alignés avec les données associées :
- les textes sont en fer à gauche
- les nombres en fer à droite, alignés sur la virgule

![A faire](/guidelines/components/listings/tables/images/table-alignment-do.png) ![A éviter](/guidelines/components/listings/tables/images/table-alignment-dont.png)


Concernant l'alignement vertical, il dépend du contexte :
- si le principal usage est de scanner rapidement un des attributs des objets, on centre les données sur les lignes
- si le principal usage est d'avoir une vision globale de chaque objet, on aligne les données sur le haut

En cas de doute, on privilégie l'alignement sur le haut.

## Comportement Standard
### Survol d'une ligne
Si le clic sur la ligne donne accès à des informations supplémentaires, un changement de la couleur de fond de la ligne permettent la mise en évidence de cette possibilité.

![A faire](/guidelines/components/listings/tables/images/table-hover.png)

### Sélection d'une ligne
Quand on peut agir « en masse » sur les lignes d'un tableau, on insère dans une colonne sur la gauche du tableau une checkbox par ligne
On met en évidence la ou les ligne(s) sélectionnée(s) par une couleur de fond
Dans l'entête de cette colonne, on trouve un select proposant des raccourcis de sélection rapide.

![A faire](/guidelines/components/listings/tables/images/table-select.gif)

### Tri
Les données sont triables sur tous les attributs pertinents. Le tri par défaut est indiqué par une flèche (ascendante si on est par ordre croissant, descendante si on est par ordre décroissant) au niveau du titre de la colonne. Au survol d'une autre colonne sur laquelle le tri peut être fait, une flèche apparaît également

![A faire](/guidelines/components/listings/tables/images/table-sort.gif)

### Gestion du texte
Dans le cas où l'espace disponible n'est pas suffisant pour afficher l'intégralité du texte, deux choix sont possibles :
- si le texte est primordial à la compréhension du tableau, on l'affiche en intégralité, quitte à passer sur plusieurs lignes
- si le tableau peut être compris sans avoir l'intégralité du texte, on ellipse le texte en excès (text-overflow: ellipsis) et on propose l'intégralité du texte dans un tooltip lorsque le texte éludé est survolé

### Edition
Si le tableau expose l'intégralité des attributs des objets exposés, on peut envisager de proposer de l'édition en contexte : un clic sur une donnée permet de modifier le contenu de la cellule. Selon le type de donnée, la modification en contexte peut prendre plusieurs formes :
- Texte d'une seule ligne (ou nombre) : _edit-in-place_ si la donnée est de type texte d'une seule ligne (ou un nombre)
- Date, période : affichage d'un popover présentant un calendrier permettant de saisir la date ou la période. Un clic en dehors du popover valide la nouvelle sélection.
- Option parmi un nombre fini de possibilités : select

Si le tableau n'expose qu'une synthèse des attributs des objets exposés, un clic sur une ligne ouvre le détail de l'objet dans un side-panel, dans lequel s'effectuera la modification (cf. [Modales, side-panels](https://luccasoftware.atlassian.net/wiki/spaces/UXUI/pages/242549547/Modales%2C+side-panels))

### Comportement Responsive
L'affichage d'un tableau sur mobile ou sur de petites résolutions doit être intelligent :
- On n'affiche pas plus de 3 colonnes, pour limiter le risque d'avoir les données tronquées, et donc un tableau illisible
- S'il est nécessaire d'afficher plus de 3 attributs, on peut envisager d'abandonner la présentation en tableau pour réordonner les attributs au sein d'une liste de cartes
- Une cellule qui expose un utilisateur (photo, nom et prénom de l'utilisateur) peut être rétrécie en ne gardant que la photo
- Quelque soit le choix retenu, il doit être pensé dès la conception du tableau.

### Scrolls et pagination
Si le nombre de données exposées impose l'emploi d'un tableau de dimensions supérieures à celles de l'espace disponible, on donne la possibilité de scroller :

- Verticalement en gardant l'entête toujours visible. On limite néanmoins le nombre de lignes affichées pour éviter un temps de chargement trop long, et on privilégie une pagination dès qu'on a plus de 50 lignes à afficher. En dehors de cas spécifiques tels que les modules de reporting qui doivent être exhaustifs, un tableau de 50 lignes n'est pas facilement manipulable, il faut envisager l'emploi de filtres pour limiter le nombre de lignes affichées simultanément.
- Horizontalement en gardant la ou les premières colonnes visibles : la juxtaposition de plusieurs scrolls rendant la lecture du tableau difficile, ils ne sont tolérés que sur certains modules spécifiques (type reporting) ayant vocation à exposer l'exhaustivité des données sans « opinion » sur leur importance.

## Actions
### Action principale
- Si l'action principale consiste à créer un nouvel objet qui ira s'ajouter à ceux déjà présentés dans le tableau, on positionne le bouton au dessus du tableau.
- Si l'action principale consiste à valider les données du tableau pour passer à une étape suivante dans le workflow, on le met plutôt en dessous. Selon l'importance de l'action, on peut décider de le positionner en fixe en bas de page, dans un bandeau qui se superpose au tableau lui-même.

### Actions récurrentes
- Si les actions récurrentes sont accessoires (ex. : modifier/supprimer une donnée), on ne fait apparaître les boutons/liens/icônes déclenchant l'action qu'au survol de la ligne
- Si les actions récurrentes sont principales (ex. : valider une absence dans un tableau présentant l'ensemble des absences à valider), on affiche les boutons/liens/icônes en permanence.
