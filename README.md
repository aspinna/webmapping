# Rapport Webmapping - M2 SIGMA 2023-2024

Le projet web réalisé met en avant un projet précédent en télédétection. Le sujet était de déterminer  si l’inventaire forestier de la base de données IGN (BDForêt_V2.0) pouvait être utilisée comme source d’échantillons de référence pour réaliser une classification supervisée de séries temporelles d’images Sentinel 2. Plusieurs classifications supervisées ont été réalisées pour - entre autres - différents niveaux de nomenclature d’essences forestières (Figure 1.), dont sera évaluée la qualité des cartes produites à travers une validation stratifiée qui prend en compte l'appartenance des pixels à un polygone et qui sera répétée 30 fois avec 5 folds.

## Les cartes interactives web et leurs composantes
### Le fond de carte

Les cartes représentées illustrent la répartition d'essences forestières qui sont cartographiées avec des teintes essentiellement vertes, pour certaine nommenclature avec un certain nombre de classe (par exemple le niveau 3 avec 10 classes) des couleurs aléatoires ont été choisie pour distinguer au mieux les essences. Ainsi, pour essayer de visualiser au mieux cette symbologie, j'ai choisi un fond de carte sobre et sombre  : 
<ul> <a href="https://www.arcgis.com/home/item.html?id=a284a9b99b3446a3910d4144a50990f6">World_Dark_Gray_Base</a> de ESRI : Cette couche de carte attire l'attention sur le contenu thématique en fournissant un arrière-plan neutre avec un minimum de couleurs, d'étiquettes et de fonctionnalités. Seules les informations clés sont représentées pour fournir un contexte géographique.</ul>

### Les couches

Trois couches et leur styles respectifs ont été importées sur GeoServer :
<ul>
  <li><b>carte_essences_lvl1</b> : carte de classification basée sur le niveau 1 de nomenclature de la BDForêt (voir tableau sur mon site)</li>
  <li><b>carte_essences_lvl2</b> : carte de classification basée sur le niveau 2 de nomenclature de la BDForêt (voir tableau sur mon site)</li>
  <li><b>carte_essences_lvl3</b> : carte de classification basée sur le niveau 3 de nomenclature de la BDForêt (voir tableau sur mon site)</li>
</ul>

Ces cartes ont été intégrées sous javascript via la librairie **LeafLet** d'après leur URL Goeserver de flux WMS.

## Le code
### Les dépendances

Les cartes intéractives ont été réalisées exclusivement par l'intermédiaire de la librairie Javascript **LeafLet**. Différents modules ont été importés :
<ul>
  <li><a href="https://unpkg.com/leaflet/dist/leaflet.js">leaflet</a> : carte de classification basée sur le niveau 1 de nomenclature de la BDForêt (voir tableau sur mon site)</li>
  <li><a href="https://unpkg.com/leaflet-fullscreen/dist/Leaflet.fullscreen.js">Leaflet.fullscreen</a> : carte de classification basée sur le niveau 2 de nomenclature de la BDForêt (voir tableau sur mon site)</li>
</ul>

## Objectif personnel de représentation Webmapping

L'objectif de ce projet était de **mettre en comparaison** les 3 niveaux de nomenclature obtenus par nos classifications. Pour cela, il m'a paru judicieux de positionner les cartes les unes à côté des autres sous la forme d'un **triptyque** et de **synchroniser** les cartes. Cela pour s'assurer que les interactions de l'utilisateur sur l'une des cartes soient automatiquement reflétées sur les autres. Ainsi l'objectif de comparaison est plus aisé.

## Perspectives d'amélioration

Le rendu obtenu pourrait connaître plusieurs améliorations, la première étant l'ajout d'un réglage dynamique d'opacité et d'une légende dynamique
Sur les cartes présentée, la légende et sa mise en forme est figée. Il s'agit en fait simplement de l'image issue de GeoServer à l'enregistrement des couches de style. Il serait pertinent de pouvoir laisser l'opportunité à l'utilisateur de pouvoir masquer au choix les classes de nomenclature. Plus simplement également, il aurait été intéressant d'avoir pu paramètrer la mise en forme de la légende (distance taille des symboles, symbole-texte etc.). Au format WFS cela aurait été probablement plus aisé.
