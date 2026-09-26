---
title: Connecter une API à Claude ou Codex, sans exposer ta clé
description: Deux méthodes pour brancher n'importe quel service sur Claude ou Codex, le connecteur MCP et l'API, en gardant ta clé en sécurité. Exemple avec Higgsfield.
date: 2026-09-26
---

Brancher un service sur Claude ou Codex, c'est ce qui leur permet d'**agir** :
générer des images, lire tes ventes, envoyer un mail. Il y a deux façons de le
faire : le **MCP** et l'**API**. La seconde demande une **clé qui peut
dépenser ton argent ou toucher à tes données** : ce guide montre comment
l'utiliser sans qu'elle fuite.

Les étapes valent pour n'importe quel service. J'utilise **Higgsfield** comme
exemple tout au long du guide.

**Au sommaire**

1. [MCP ou API : laquelle choisir](#mcp-ou-api-laquelle-choisir)
2. [La règle d'or](#la-regle-dor)
3. [Méthode 1 : le MCP](#methode-1-le-mcp)
4. [Méthode 2 : l'API, avec une clé](#methode-2-lapi-avec-une-cle)
5. [Si ta clé a fuité](#si-ta-cle-a-fuite)
6. [La checklist](#la-checklist)

## MCP ou API : laquelle choisir

Claude et Codex ne parlent pas directement au service. Il leur faut un
intermédiaire :

- le **MCP**, un connecteur fourni par le service, qui présente ses outils à
  l'IA (« générer une image », « lister mes ventes ») ;
- ou un **script** qui appelle l'**API** du service avec une clé.

![Toi, puis Claude ou Codex, puis l'intermédiaire (connecteur ou script), puis l'API. Seul l'intermédiaire lit la clé. La clé ne passe jamais par la conversation.](/guides/api-cle-circuit.svg)

| | Méthode 1 : MCP | Méthode 2 : API |
| --- | --- | --- |
| Mise en place | Quelques clics | Un fichier et un script |
| Connexion | Le plus souvent, ton compte | Une clé |
| Clé à protéger | Souvent aucune | Oui |
| Pour | Utiliser le service depuis l'IA | Automatiser, tout ce que le MCP ne fait pas |

**Si le service propose un MCP officiel et qu'il fait ce dont tu as besoin,
prends-le.** Sinon, passe par l'API.

> **Exemple, Higgsfield.** Il propose les deux. Le MCP se connecte à ton
> compte et consomme tes crédits habituels. L'API a sa propre clé et son
> propre solde, séparé de tes crédits.

## La règle d'or

**Ne colle jamais une clé dans la conversation.** Même « juste pour tester ».

Une clé écrite dans le chat :

- reste dans l'**historique** de la conversation ;
- est envoyée au fournisseur du modèle avec le reste du message ;
- peut être recopiée par l'IA dans un **fichier**, voire un commit ;
- se voit à l'**écran**, donc dans ta vidéo, ta capture, ton live.

Et **quiconque a ta clé peut agir à ta place** : dépenser ton solde, lire ou
modifier tes données.

## Méthode 1 : le MCP

Cherche dans la documentation du service une page « MCP », « connecteur » ou
« intégration Claude ». Elle te donne l'**adresse du connecteur**, du type
`https://mcp.nom-du-service.com/mcp`.

> **Exemple, Higgsfield.** L'adresse est `https://mcp.higgsfield.ai/mcp`.

### Dans Claude Desktop

1. Ouvre **Customize > Connectors**.
2. Clique sur **+**, puis **Add custom connector**.
3. Donne-lui un nom, et colle l'adresse du connecteur.
4. Clique sur **Connect** : une page du service s'ouvre, connecte-toi et
   autorise l'accès.

Pour vérifier : dans une conversation, clique sur le **+** de la zone de
saisie, puis **Connectors**. Le service doit apparaître.

### Dans Codex

Remplace le nom et l'adresse par ceux de ton service :

```bash
codex mcp add higgsfield --url https://mcp.higgsfield.ai/mcp
```

Si le connecteur fonctionne avec ton compte, Codex ouvre ton navigateur pour
te connecter. Si ce n'est pas le cas, ou pour te reconnecter plus tard :
`codex mcp login higgsfield`.

Dans l'app Codex, c'est aussi possible dans **Settings > MCP servers > Add
server**, en choisissant **Streamable HTTP**.

### Deux réflexes de sécurité

**Garde la validation.** Claude et Codex te demandent ton accord avant
d'utiliser un outil. Beaucoup de tutos conseillent de tout autoriser d'office
(**Allow always**). Pour tout ce qui dépense ou modifie quelque chose, **garde
la validation** : une instruction cachée dans une page ou un fichier lu par
l'IA pourrait sinon agir sans toi. Réserve « Allow always » aux outils qui ne
font que lire.

**N'utilise que des connecteurs officiels**, publiés par le service lui-même.
Un connecteur fait par un inconnu voit tout ce qui passe par lui.

Si un connecteur te demande une **clé** au lieu de te connecter à ton compte,
applique à cette clé les règles de la méthode 2 : dédiée, avec les droits
minimum, plafonnée, jamais dans le chat.

## Méthode 2 : l'API, avec une clé

L'IA écrit un petit script qui appelle l'API, et le lance sur ton ordinateur.
Il faut donc un outil qui lance des commandes :

- **Codex** ;
- **Claude Code** : dans Claude Desktop, l'onglet **Code**, en haut au centre,
  en session **Local**.

La clé sera rangée dans un fichier `.env`, la méthode la plus simple. Cinq
étapes.

### Étape 1 : créer une clé dédiée, limitée et plafonnée

Les clés se créent dans la console ou le tableau de bord du service, souvent
dans une rubrique « API keys » ou « Développeurs ».

- **Une clé par usage**, que tu nommes clairement (« Codex, MacBook ») : si
  elle fuite, tu la supprimes sans casser le reste.
- **Les droits minimum** : si le service permet de restreindre une clé
  (lecture seule, un seul projet, certaines actions), ne donne que ce dont le
  script a besoin.
- **Un plafond de dépense** : si le service propose une limite mensuelle ou un
  solde prépayé, règle-le au plus bas. Même volée, la clé ne pourra pas
  dépenser plus.
- **Copie-la tout de suite** dans ton gestionnaire de mots de passe : beaucoup
  de services ne l'affichent qu'une seule fois.

> **Exemple, Higgsfield.** Les clés se créent sur `open.higgsfield.ai`. Elles
> ont deux parties, un identifiant et un secret, et le secret n'est affiché
> qu'une fois. L'API a son propre solde : n'y mets que ce que tu acceptes de
> perdre.

### Étape 2 : créer le fichier .env

**D'abord, protège-le de git.** Dans le dossier du projet :

```bash
echo ".env" >> .gitignore
```

Dans cet ordre : un `.env` créé avant d'être ignoré peut partir dans un
commit.

**Ensuite, crée le fichier** `.env` avec ton éditeur. Une ligne par clé, sous
la forme `NOM=valeur`. Choisis un nom clair, en majuscules, souvent celui
qu'indique la documentation du service :

```text
NOM_DU_SERVICE_API_KEY=ta-cle-ici
```

> **Exemple, Higgsfield.** Son SDK officiel lit la clé dans `HF_KEY`, au format
> `identifiant:secret` :
>
> ```text
> HF_KEY=identifiant:secret
> ```

Pas pendant un tournage : la clé est visible pendant que tu la colles.

**Enfin, réserve-le à ton compte :**

```bash
chmod 600 .env
```

### Étape 3 : empêcher l'IA d'ouvrir le .env

L'IA n'a pas besoin de lire ce fichier : c'est le script qui le charge.

**Avec Claude Code**, interdis-lui de l'ouvrir. Ajoute ceci dans
`~/.claude/settings.json` (ou complète la section `permissions` si elle
existe déjà). Ça vaut pour tous tes projets :

```json
{
  "permissions": {
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)"
    ]
  }
}
```

Claude Code ne pourra plus l'ouvrir, ni avec son outil de lecture, ni avec
`cat`, `head` ou `tail`. Une recherche du type `grep -r` passe encore : garde
l'oeil sur les commandes (étape 4).

**Avec Codex**, pas de réglage équivalent aussi simple : il peut lire les
fichiers du projet. Ce sont les limites de l'étape 1 qui te protègent.

### Étape 4 : demander l'appel

Tu donnes la tâche et l'**endroit** où est la clé, jamais sa valeur. Remplace
ce qui est entre crochets :

```text
Écris un script qui appelle l'API [service]
pour [la tâche]. La clé est dans le fichier .env,
sous le nom [NOM_DE_LA_VARIABLE] : charge-la depuis
ce fichier au démarrage du script.
N'ouvre jamais le fichier .env toi-même
et n'affiche jamais la clé.
```

> **Exemple, Higgsfield.**
>
> ```text
> Écris un script generer.py qui utilise le SDK Python
> officiel higgsfield-client pour générer une image.
> Charge la clé avec python-dotenv : elle est dans .env,
> sous le nom HF_KEY. N'ouvre jamais le fichier .env
> toi-même et n'affiche jamais la clé.
> ```

Le script charge le `.env` au démarrage : il ne contient lui-même **aucune
clé**.

**Avec Codex**, attends-toi à une demande d'autorisation : il coupe par défaut
l'accès à Internet des commandes qu'il lance, et te proposera de lancer le
script hors de son bac à sable. Vérifie que c'est bien ton script, puis
accepte.

**Avec Claude Code**, il te demande ton accord avant de lancer une commande.

Dans les deux cas, **lis la commande** avant d'accepter. Refuse celle qui
ouvre le `.env` (`cat .env`, `grep`), affiche l'environnement (`env`,
`printenv`, `echo $NOM`) ou envoie quelque chose ailleurs qu'au service. Et
n'active jamais le mode qui saute toutes les autorisations (`--yolo` dans
Codex, `--dangerously-skip-permissions` dans Claude Code).

### Étape 5 : vérifier

**Avant le premier appel**, vérifie que la clé est bien là, **sans
l'afficher** : cette commande compte les lignes qui commencent par ce nom, et
doit répondre `1`.

```bash
grep -c '^NOM_DU_SERVICE_API_KEY=' .env
```

**Après un premier appel**, petit et bon marché :

- ouvre le script et vérifie qu'il ne contient **aucune clé** ;
- regarde la consommation dans le tableau de bord du service : elle doit
  correspondre à ce que tu as demandé ;
- avant chaque commit, un coup d'oeil à `git status` : le `.env` ne doit
  jamais y apparaître.

### Quand tu filmes

Crée une **clé spéciale tournage**, avec le plus petit plafond possible, et
supprime-la juste après. Même si elle apparaît à l'écran une demi-seconde,
elle ne vaut plus rien quand la vidéo sort. Et ne filme jamais le `.env`
ouvert.

## Si ta clé a fuité

Dans cet ordre, et vite :

1. **Révoque la clé** dans la console du service. Avant tout le reste.
2. **Crée une nouvelle clé** et remplace l'ancienne dans le `.env`.
3. **Vérifie ta consommation** et l'historique des appels.
4. Si la clé était dans un commit : supprimer le fichier **ne suffit pas**,
   l'historique git la garde. La révocation est la seule vraie correction.

## La checklist

```text
MCP
[ ] Connecteur officiel, publié par le service
[ ] Validation gardée pour ce qui dépense ou modifie

API
[ ] Clé dédiée, nommée, avec les droits minimum
[ ] Plafond de dépense réglé au plus bas
[ ] .env ajouté au .gitignore avant d'être créé
[ ] .env en chmod 600, interdit à Claude Code
[ ] Clé jamais collée dans le chat, jamais à l'écran
[ ] Chaque commande lue avant de l'accepter
[ ] Script vérifié : aucune clé écrite dedans
[ ] Clé de tournage supprimée après la vidéo
[ ] Je sais où la révoquer en une minute
```

## Sources

- [Anthropic · Connecteurs personnalisés et avertissements de sécurité](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp)
- [Anthropic · Claude Code dans l'app de bureau](https://code.claude.com/docs/en/desktop)
- [Anthropic · Claude Code, interdire la lecture du .env](https://code.claude.com/docs/en/settings)
- [Anthropic · Claude Code, portée des règles de permission](https://code.claude.com/docs/en/permissions)
- [OpenAI · Codex et MCP](https://developers.openai.com/codex/mcp)
- [Higgsfield · générer depuis Claude avec le connecteur MCP](https://higgsfield.ai/blog/Generate-AI-Videos-From-Claude-with-Higgsfield-MCP)
- [Higgsfield · SDK Python officiel](https://github.com/higgsfield-ai/higgsfield-client)
- [Higgsfield · documentation de l'API](https://docs.higgsfield.ai/docs)
