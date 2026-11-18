# Briefing de veille — WiFi Sénégal / Cloudflare — 2026-11-17

**Sources scannées** : Cloudflare Blog, Ubiquiti Community, Cloud4Wi, Beambox, Spotipo, Google News (WiFi Sénégal, Telecom Sénégal ARTP)
**Nouveaux items** : 28 | **Items retenus** : 9 (score ≥ 6)

---

## 1. À retenir (3 items, tous agents confondus)

### 🔴 Cloudflare — « See the agents, set the terms: New visibility and control for personal agents »
**Date** : 2026-11-04 | **Score** : 9/10 | **Statut** : ✅ Confirmé
**Lien** : https://blog.cloudflare.com/personal-agents-visibility-control/
Cloudflare lance des contrôles de visibilité et de termes pour les agents personnels. Bot Management appliqué aux agents : qui agit, pour qui, avec quelle identité. **Directement pertinent pour wifi-portal-pro** : un portail captif conçu pour les humains subit du trafic agentique qui ne remplit pas de formulaire. Ce type de contrôle est l'antidote technique à ce problème.

### 🔴 Cloudflare — « Agents aren't humans (but they kinda are) — trusted-agent-delegation »
**Date** : 2026-11-05 | **Score** : 9/10 | **Statut** : ✅ Confirmé
**Lien** : https://blog.cloudflare.com/trusted-agent-delegation/
Délégation d'agents de confiance : identité, permissions, traçabilité des actions agentiques. L'Internet passe d'un trafic humain à un trafic agentique. wifi-portal-pro doit anticiper l'authentification d'agents sur les portails captifs (ou leur blocage sélectif).

### 🔴 Sénégal — ARTP met en garde contre l'usage de Starlink pour la revente d'Internet (WiFi communautaire illégal)
**Date** : 2026-03-31 | **Score** : 8/10 (+2 🎯 Métier WISP) | **Statut** : 🟡 Probable
**Lien** : https://news.google.com/rss/articles/CBMi5AFBVV95cUxPMV9kc3pXUmNURERNcktOclY1djRoM3ZGam5vb19RQ1JUZnpNVEJxQXFMLWJwOWtZQW13N1JPcFU1VGx5aldQalFSeUVmbFoyMDZCOXBVXzFBa3hsSHVieC0yNmRxTEZOZkh4QkFUSUNLVkFIb1Y3YmtqYmRqOGFJT200LXpzWUZmSDlVTmlJZEVSd1dFMnljV0t6bkUzeWdvdWh6SHNsdzlyUnVmZVU2NUU1d0ZMcVItZGJIQlJzajJ3eDA2THlYU1JOb0RDVnp4SEkxTVNTckpYVzczYi1paGZkNVQ/
L'ARTP durcit le cadre du WiFi communautaire et de la revente d'accès Internet au Sénégal. Impact direct sur le modèle économique de wifi-portal-pro : le partage de WiFi est désormais sévèrement encadré, ce qui renforce l'argument de vente d'un portail captif officiel et autorisé (Valcore).

---

## 2. 🎯 IA appliquée à mon métier (WISP / Portails captifs)

- **Cloudflare — Kitesurf open source** (2026-11-03, score 8/10) : projet open source autour des agents, AI, Browser Run, Workers. À surveiller pour l'intégration d'agents sur les portails captifs. Lien : https://blog.cloudflare.com/kitesurf-open-source/
- **Sénégal — Partage de WiFi sévèrement encadré** (2026-04-12, score 8/10) : réglementation sur le partage de WiFi au Sénégal. Renforce l'argument de vente d'un portail légal. Lien : https://news.google.com/rss/articles/CBMi3wFBVV95cUxNTlR1dVJOSkQzMFlpY0RONzlpOTZzdG1zblAycU5SUnN4bTBValZzZE84YjhqRlJOdWUwRTFJY29fNWRJdGl0bzhTMXVOTlRPRmVaUnUydXQtY0VMS0s2RTFpZzFNS1A2cjBpMjU1Tk9yT0VxLWladjhicVdYRlB4VXQ0ZndxTXE5eEh1LU5BdVY3akdhMzI1cENCM3dPa3c1d1N6eS1XWlZXellMYS0wNHMxakpiRl9RcWJZX2NKTDg2aVNVOVFGZ0xrVDY4MGRPYnJEeVQ3THkydlBXc1FZ/
- **Cloudflare — Data Residency / post-quantum geo key management** (2026-10-23, score 7/10) : chiffrement post-quantique et gestion de clés géo-fencée. Angle commercial DER/FJ (souveraineté des données). Lien : https://blog.cloudflare.com/post-quantum-geo-key-manager/

---

## 3. Sections par catégorie

**Modèles & Recherche** : rien de notable.
**Open Source & Outils** : Cloudflare Kitesurf (open source, agents/Workers).
**Infra/Réseau/Hardware** : Cloudflare DDoS Threat Report Q3 2026 (swarms, moins de géants) — trafic automatisé en hausse.
**Concurrence Wi-Fi SaaS** : Cloud4Wi, Beambox, Spotipo — aucun feed accessible (scraper non configuré). À ajouter manuellement.
**Business & Régulation** : Cheikh Tidiane Sarr nommé DG de l'ARTP (2026-09-16) puis V-P du FRATEL (2026-11-03). Changement à la tête du régulateur sénégalais — à surveiller pour les autorisations DER/FJ et JOJ Dakar.

---

## 4. Leaks & à surveiller

- Starlink suspendu au Sénégal (décision Cour suprême, septembre 2026) — impact sur l'offre Internet satellite concurrente.
- Orange lance l'Internet par satellite au Sénégal (décembre 2025) — nouveau concurrent sur le haut débit.
- Aucun feed Ubiquiti/UniFi accessible (erreur 400 sur le RSS communautaire) — couverture partielle.

---

## 5. À tester

- **Cloudflare Bot Management pour portails captifs** : tester si les règles de détection d'agents peuvent protéger wifi-portal-pro du trafic parasite. Difficulté : moyenne (nécessite un domaine Cloudflare devant le portail). Lien : https://blog.cloudflare.com/personal-agents-visibility-control/

---

**Prochaine collecte** : quotidienne (cron). **État** : `state.json` à mettre à jour après publication.
