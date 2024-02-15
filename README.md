# Rapport Webmapping - M2 SIGMA 2023-2024

Le projet web réalisé met en avant un projet précédent en télédétection. Le sujet était de déterminer  si l’inventaire forestier de la base de données IGN (BDForêt_V2.0) pouvait être utilisée comme source d’échantillons de référence pour réaliser une classification supervisée de séries temporelles d’images Sentinel 2. Plusieurs classifications supervisées ont été réalisées pour - entre autres - différents niveaux de nomenclature d’essences forestières (Figure 1.), dont sera évaluée la qualité des cartes produites à travers une validation stratifiée qui prend en compte l'appartenance des pixels à un polygone et qui sera répétée 30 fois avec 5 folds.

## Les cartes interactives web et leurx composantes
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


