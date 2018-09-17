Au sein d'une liste, les cartes ont toute la même largeur. Leur hauteur, en revanche, peut varier en fonction du contenu à afficher.

![à faire](guidelines/components/layout/cards/images/cards-layout-do-1.png) ![à éviter](guidelines/components/layout/cards/images/cards-layout-do-2.png) ![à éviter](guidelines/components/layout/cards/images/cards-layout-dont.png)

On peut choisir de donner accès à une ou plusieurs actions récurrentes directement depuis la carte (en faisant apparaître les boutons associés au survol de la carte et/ou en *swipant* la carte).

![à faire](guidelines/components/layout/cards/images/cards-hovered-do.gif) ![à faire](guidelines/components/layout/cards/images/cards-hovered-dont.png)

Comportement :

- Au survol, effet sur la carte indiquant qu'elle est cliquable + apparition des boutons/liens/icônes permettant de déclencher des actions sur les objets
- Au clic, ouverte d'un side-panel présentant l'intégralité des attributs de l'objet et permettant leur modification

Pour continuer à bénéficier des fonctionnalités qu'aurait offert un tableau, une liste de carte est systématiquement accompagnée d'un composant permettant de trier les cartes (c'est au PO de déterminer, selon le contexte, les attributs triables les plus pertinents). On peut également proposer des filtres afin d'affiner la liste de cartes exposées.
