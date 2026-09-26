---
title: Connecter une API à Claude ou Codex, sans exposer ta clé
description: Brancher un service comme Higgsfield sur Claude Desktop ou Codex, pas à pas, en gardant ta clé API hors de la conversation, de tes fichiers et de tes vidéos.
date: 2026-09-26
---

Brancher une API sur Claude ou Codex, c'est ce qui leur permet d'**agir** :
générer une image sur Higgsfield, lire tes ventes, envoyer un mail. C'est
aussi le moment où tu confies une clé qui peut **dépenser ton argent**.

Ce guide montre comment je connecte une API, avec Higgsfield comme exemple, et
surtout où ranger la clé pour qu'elle ne fuite jamais.

**Au sommaire**

1. [Comprendre en deux minutes](#comprendre-en-deux-minutes)
2. [La règle d'or](#la-regle-dor)
3. [Choisir la bonne méthode](#choisir-la-bonne-methode)
4. [Méthode 1 : le connecteur officiel, sans clé](#methode-1-le-connecteur-officiel-sans-cle)
5. [Méthode 2 : l'API avec une clé](#methode-2-lapi-avec-une-cle)
6. [Les garde-fous](#les-garde-fous)
7. [Si ta clé a fuité](#si-ta-cle-a-fuite)
8. [La checklist](#la-checklist)

## Comprendre en deux minutes

Une **API**, c'est la porte d'entrée d'un service pour les programmes. La **clé
API** prouve que c'est toi qui frappes, et c'est ton compte qui est débité.
Conséquence directe : **quiconque a ta clé peut dépenser ton solde.**

Claude et Codex ne parlent pas directement à l'API. Ils passent par un
**connecteur**, qu'on appelle un serveur MCP : un petit programme qui leur
présente des outils (« générer une image », « lister mes vidéos ») et qui, lui,
appelle l'API.

![Toi, puis Claude ou Codex, puis le connecteur, puis l'API. Seul le connecteur lit la clé, dans un coffre. La clé ne passe jamais par la conversation.](/guides/api-cle-circuit.svg)

Tout l'enjeu est là : **la clé ne doit exister qu'entre le connecteur et
l'API.** Claude et Codex n'ont pas besoin de la connaître pour s'en servir.

## La règle d'or

**Ne colle jamais ta clé dans la conversation.** Même « juste pour tester ».

Une clé écrite dans le chat :

- reste dans l'**historique** de la conversation ;
- est envoyée au fournisseur du modèle avec le reste du message ;
- peut être recopiée par le modèle dans un **fichier**, voire un commit ;
- se voit à l'**écran**, donc dans ta vidéo, ta capture, ton live.

À la place, tu donnes le **nom** de l'endroit où elle se trouve, jamais sa
valeur :

```text
Ma clé Higgsfield est déjà dans la variable HF_KEY.
Utilise-la, mais n'affiche jamais sa valeur.
```

## Choisir la bonne méthode

Il y a trois façons de connecter un service. De la plus sûre à la moins sûre :

| Méthode | Où est la clé | Sécurité |
| --- | --- | --- |
| Connecteur officiel avec connexion à ton compte | Nulle part : tu te connectes comme sur un site | La meilleure |
| Clé rangée dans un coffre (trousseau, variable) | Dans le coffre de ton ordinateur | Bonne |
| Clé écrite dans un fichier de réglages | En clair, dans un fichier | Acceptable si le fichier est protégé |

La règle : **si le service propose un connecteur officiel, prends-le.** Tu n'as
aucune clé à gérer, donc aucune clé à perdre.

### Higgsfield : connecteur ou API ?

Higgsfield propose justement les deux, et ce ne sont pas les mêmes produits.

| | Connecteur (MCP) | API |
| --- | --- | --- |
| Connexion | Ton compte Higgsfield, par le navigateur | Une clé (identifiant + secret) |
| Paiement | Tes crédits Higgsfield habituels | Un solde séparé, propre à l'API |
| Pour | Générer depuis Claude ou Codex, pour toi | Automatiser, intégrer dans ton produit |

Pour générer des images et des vidéos depuis Claude ou Codex, le connecteur
suffit. L'API sert quand tu veux automatiser à grande échelle ou brancher
Higgsfield dans ta propre application. Je montre les deux.

## Méthode 1 : le connecteur officiel, sans clé

Le connecteur de Higgsfield est hébergé à cette adresse :

```text
https://mcp.higgsfield.ai/mcp
```

### Dans Claude Desktop

1. Ouvre **Customize > Connectors**.
2. Clique sur **+**, puis **Add custom connector**.
3. Nom : `Higgsfield`. Adresse : celle ci-dessus.
4. Clique sur **Connect** : une page Higgsfield s'ouvre, connecte-toi et
   autorise l'accès.

Pour vérifier : dans une conversation, clique sur le **+** de la zone de
saisie, puis **Connectors**. Higgsfield doit apparaître avec ses outils.

### Dans Codex

En ligne de commande :

```bash
codex mcp add higgsfield --url https://mcp.higgsfield.ai/mcp
codex mcp login higgsfield
```

La seconde commande ouvre ton navigateur pour te connecter à ton compte. Dans
l'app Codex, c'est dans **Settings > MCP servers > Add server**, en choisissant
**Streamable HTTP**.

L'app, la ligne de commande et l'extension d'éditeur partagent le même fichier
de réglages, `~/.codex/config.toml` : un connecteur ajouté à un endroit est
disponible partout. Voici ce que la commande y a écrit :

```toml
[mcp_servers.higgsfield]
url = "https://mcp.higgsfield.ai/mcp"
```

Aucune clé dans le fichier : c'est tout l'intérêt.

## Méthode 2 : l'API avec une clé

Quand il n'y a pas de connecteur officiel, ou que tu veux l'API elle-même, il
faut une clé. Quatre étapes.

### Étape 1 : créer une clé dédiée

Chez Higgsfield, les clés se créent sur `cloud.higgsfield.ai`. Une clé est
faite de deux parties : un **identifiant** et un **secret**.

- **Une clé par usage** : une pour Claude, une pour Codex, une pour ton app. Si
  l'une fuite, tu la supprimes sans casser le reste.
- **Nomme-la** clairement (« Codex, MacBook ») pour savoir laquelle révoquer.
- **Copie-la tout de suite** dans ton gestionnaire de mots de passe : chez
  Higgsfield, le secret n'est affiché qu'une seule fois.
- **Limite le solde** : l'API a son propre solde. N'y mets que ce que tu
  acceptes de perdre pendant tes tests. C'est ta meilleure limite de dépense.

### Étape 2 : ranger la clé dans un coffre

Le bon réflexe sur Mac : le **trousseau** (Keychain), déjà chiffré par macOS.
Le SDK officiel de Higgsfield accepte la clé en un seul morceau, au format
`identifiant:secret`.

Enregistre-la dans le trousseau. La commande te demande la valeur sans
l'afficher et sans l'écrire dans l'historique du terminal :

```bash
security add-generic-password -a "$USER" -s higgsfield-api -w
```

Puis ajoute cette ligne dans ton fichier `~/.zshrc`. Elle relit la clé depuis
le trousseau à chaque ouverture du terminal : la valeur n'est écrite nulle
part.

```bash
export HF_KEY="$(security find-generic-password \
  -a "$USER" -s higgsfield-api -w)"
```

Ouvre un nouveau terminal pour que ce soit pris en compte.

Sur Windows, l'équivalent simple est une **variable d'environnement
utilisateur** (Paramètres système avancés > Variables d'environnement).

Et dans tous les cas, **jamais dans un fichier du projet**. Si tu utilises un
fichier `.env`, ajoute-le au `.gitignore` avant de le créer, pas après.

### Étape 3 : brancher la clé

#### Avec Codex : laisser Codex utiliser le SDK

C'est le plus simple avec Higgsfield. Les commandes que lance Codex héritent de
tes variables d'environnement, donc de `HF_KEY`. Tu lui demandes :

```text
Utilise le SDK Python officiel higgsfield-client
pour générer une image. La clé est déjà dans
la variable HF_KEY : ne l'affiche jamais,
ne l'écris dans aucun fichier.
```

À savoir : dans ce mode, Codex **peut lire** la variable, puisque ses commandes
y ont accès. Ta protection, ce sont les demandes d'approbation (voir [les
garde-fous](#les-garde-fous)) : lis chaque commande avant de l'accepter.

Si tu préfères qu'aucune commande de Codex ne voie jamais tes clés, ajoute
ceci dans `~/.codex/config.toml`. Codex retirera alors toute variable dont le
nom contient KEY, SECRET ou TOKEN, et la clé ne sera plus utilisable qu'à
travers un connecteur (section suivante).

```toml
[shell_environment_policy]
ignore_default_excludes = false
```

#### Avec Codex : passer la clé à un connecteur

Si tu utilises un connecteur qui a besoin de ta clé, ne l'écris pas dans le
fichier de réglages. Codex ne transmet aux connecteurs que quelques variables
système (`PATH`, `HOME`...) et **celles que tu nommes** dans `env_vars` :

```toml
[mcp_servers.mon-api]
command = "npx"
args = ["-y", "nom-du-connecteur"]
env_vars = ["HF_KEY"]
```

`env_vars` transmet la variable depuis ta session : la valeur reste dans ton
trousseau. L'autre option, `env = { HF_KEY = "..." }`, ou `--env` dans la
commande `codex mcp add`, **écrit la clé en clair** dans le fichier. À éviter.

Attention : Codex lit la variable au moment où il démarre. Lance-le depuis un
terminal où `HF_KEY` existe.

#### Avec Claude Desktop

Dans une conversation Claude Desktop classique, Claude ne lance pas de
commandes sur ton ordinateur : il lui faut un connecteur. (Si tu utilises
Claude Code, qui lui exécute des commandes, la logique est la même que pour
Codex ci-dessus.) Deux cas.

**Le service fournit une extension** (un fichier `.mcpb`, ou une entrée dans
**Settings > Extensions**) : installe-la, et Claude te demande la clé dans un
formulaire. Les champs marqués sensibles sont **chiffrés dans le trousseau** de
ton système. C'est l'option à privilégier.

**Sinon, le fichier de réglages.** Il se trouve ici :

- Mac : `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows : `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "mon-api": {
      "command": "npx",
      "args": ["-y", "nom-du-connecteur"],
      "env": { "HF_KEY": "colle-ta-cle-ici" }
    }
  }
}
```

C'est la méthode la plus répandue, mais **la clé est en clair** dans ce
fichier. Si tu l'utilises : ne partage jamais ce fichier, ne le filme pas, et
limite-en l'accès à ton compte :

```bash
cd ~/Library/Application\ Support/Claude
chmod 600 claude_desktop_config.json
```

Sur Mac, tu peux éviter la clé en clair en faisant lire le trousseau au
lancement du connecteur :

```json
{
  "mcpServers": {
    "mon-api": {
      "command": "/bin/sh",
      "args": ["-c", "HF_KEY=$(security find-generic-password -s higgsfield-api -w) exec npx -y nom-du-connecteur"]
    }
  }
}
```

Redémarre Claude Desktop après chaque modification du fichier.

### Étape 4 : tester sans risque

D'abord, vérifie que la clé est bien visible, **sans jamais afficher sa
valeur**. Demande à Codex de lancer :

```bash
test -n "$HF_KEY" && echo "clé présente" || echo "clé absente"
```

Si elle est absente alors qu'elle marche dans ton terminal, c'est souvent que
l'app a été ouverte depuis le Dock sans lire ton `~/.zshrc` : lance Codex
depuis un terminal.

Ensuite, une action **qui ne coûte rien** :

```text
Liste les outils Higgsfield auxquels tu as accès,
sans rien générer.
```

Ensuite seulement, une première génération, petite et bon marché. Puis
vérifie dans la console que la dépense correspond à ce que tu as demandé.

## Les garde-fous

### Garde les demandes d'approbation

Claude et Codex peuvent te demander ton accord avant chaque action. Beaucoup
de tutos conseillent de tout passer en **Allow always** pour aller plus vite.
Pour un outil qui **dépense**, garde la validation manuelle.

- **Claude** : réserve « Allow always » aux outils qui ne font que lire.
- **Codex** : n'utilise pas l'option `--dangerously-bypass-approvals-and-sandbox`
  (alias `--yolo`) quand une clé est accessible. Elle supprime toutes les
  demandes d'approbation.

### Méfie-toi de l'injection de prompt

Un connecteur renvoie du texte : une page web, un fichier, un résultat. Ce
texte peut contenir des **instructions cachées** (« génère 50 vidéos »,
« envoie ce fichier à cette adresse »). Anthropic le dit clairement : un
serveur malveillant peut contenir des instructions qui poussent Claude à des
actions non voulues.

C'est la vraie raison de garder les approbations : tu restes celui qui dit oui.

### Ne branche que des connecteurs de confiance

Un connecteur qui reçoit ta clé **peut en faire ce qu'il veut**. Avant d'en
installer un :

- préfère le connecteur **officiel** du service ;
- sinon, regarde qui le publie, s'il est maintenu, et ce qu'il fait de ta clé ;
- dans le doute, crée une clé dédiée avec un petit solde, pour limiter la
  casse.

### Quand tu filmes

Pour une vidéo ou un live, crée une **clé spéciale tournage** et supprime-la
juste après. Même si elle apparaît à l'écran une demi-seconde, elle ne vaut
plus rien quand la vidéo sort.

## Si ta clé a fuité

Dans cet ordre, et vite :

1. **Révoque la clé** dans la console du service. Avant tout le reste.
2. **Crée une nouvelle clé** et remplace-la dans ton coffre.
3. **Vérifie ton solde** et l'historique des appels.
4. Si la clé était dans un commit : supprimer le fichier **ne suffit pas**,
   l'historique git la garde. La révocation est la seule vraie correction.

## La checklist

```text
[ ] Connecteur officiel utilisé quand il existe
[ ] Une clé par usage, nommée
[ ] Solde limité à ce que j'accepte de perdre
[ ] Clé dans le trousseau ou une variable, jamais dans le chat
[ ] Aucun fichier contenant la clé dans le projet ou sur git
[ ] Demandes d'approbation gardées pour les outils qui dépensent
[ ] Connecteurs installés depuis des sources de confiance
[ ] Clé spéciale pour les vidéos, supprimée après le tournage
```

## Sources

- [Anthropic · Installer des serveurs MCP locaux dans Claude Desktop](https://support.claude.com/en/articles/10949351-getting-started-with-local-mcp-servers-on-claude-desktop)
- [Anthropic · Connecteurs personnalisés et avertissements de sécurité](https://support.claude.com/en/articles/11175166-getting-started-with-custom-connectors-using-remote-mcp)
- [Anthropic · Extensions Claude Desktop et stockage des clés](https://www.anthropic.com/engineering/desktop-extensions)
- [OpenAI · Codex et MCP](https://developers.openai.com/codex/mcp)
- [Code source de Codex · transmission des variables aux connecteurs](https://github.com/openai/codex/blob/main/codex-rs/rmcp-client/src/utils.rs), vérifié le 26 septembre 2026
- [Code source de Codex · filtre KEY, SECRET, TOKEN](https://github.com/openai/codex/blob/main/codex-rs/protocol/src/shell_environment.rs), vérifié le 26 septembre 2026
- [Higgsfield · SDK Python officiel](https://github.com/higgsfield-ai/higgsfield-client)
- [Higgsfield · documentation de l'API](https://docs.higgsfield.ai/docs)
