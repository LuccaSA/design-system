# Guidelines

Bonnes pratiques :
- Indiquer/symboliser le(s) objet(s) qui devrai(en)t se trouver là
- Indiquer pourquoi rien n'est affiché
- Proposer, quand c'est pertinent, une action à entreprendre pour afficher des objets

## Blank state en cas d'erreur technique
<div class="markdown-dual-display">
<div class="markdown-block positive">

### Recommendation
- Un message « humain » qui donne les raisons de l'erreur, quand l'information est disponible.
- Les power-users qui pourraient être intéressés par du vocabulaire technique obtenir plus de détails en dépliant la zone inférieure, donnant plus de détails.
- On donne à l'utilisateur des indications lui permettant de sortir de l'impasse : un lien vers une autre page, l'information que l'erreur a été loguée.

![À faire](guidelines/components/layout/empty-states/images/empty-tech-do.png)
</div>
<div class="markdown-block negative">

### À éviter
- Un message généré automatiquement par une API : ça n'aide pas l'utilisateur.
- On ne donne aucune indication à l'utilisateur de l'action à entreprendre pour « sortir » de cette impasse.

![À faire](guidelines/components/layout/empty-states/images/empty-tech-dont.png)
</div>
</div>

## Blank state unique
<div class="markdown-dual-display">
<div class="markdown-block positive">

### Recommandation
- **Une illustration un peu décalée** (l'utilisateur ne devrait la voir qu'une fois, le risque de lassitude est moindre)
- **Un texte explicatif**
- **Si pertinent, un bouton d'action permettant de créer un premier objet**

Exemples:

![À faire](guidelines/components/layout/empty-states/images/empty-unique-do-1.png) ![À faire](guidelines/components/layout/empty-states/images/empty-unique-do-2.png) ![À faire](guidelines/components/layout/empty-states/images/empty-unique-do-3.png) ![À faire](guidelines/components/layout/empty-states/images/empty-unique-do-4.png) ![À faire](guidelines/components/layout/empty-states/images/empty-unique-do-5.png)
</div>
<div class="markdown-block negative">

### À éviter
S'il s'agit dans un blank state unique qui sera vu et revu par nos consultants (à la création d'une instance, par exemple), on les traite comme des blank states récurrents (cf. section suivante)
</div>
</div>

## Blank state récurrent
<div class="markdown-dual-display">
<div class="markdown-block positive">

### Recommandation

- Un picto ou une illustration simple, épurée
- Un texte explicatif
- Si pertinent, un bouton d'action permettant de créer un premier objet

Exemples :

![À faire](guidelines/components/layout/empty-states/images/empty-rec-do-1.png) ![À faire](guidelines/components/layout/empty-states/images/empty-rec-do-2.png)

</div>
<div class="markdown-block negative">

### À éviter
Une illustration trop anecdotique et/ou chargée qui, au bout de plusieurs fois, va lasser voire agacer l'utilisateur.
</div>
</div>
