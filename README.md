# JolAdniJo - Frontend web alkalmazás

Ez a https://joladnijo.jmsz.hu adományozási információkat segítő oldalnak a látogatókat kiszolgáló webapp frontendje. (Az adminisztrációs felület backoffice frontendje ettől külön van.) This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

[Projektünk](https://github.com/orgs/joladnijo/projects/1/) működéséről, az issue-k feldolgozásának módjáról, és a bekapcsolódási lehetőségekről lásd a [központi README](https://github.com/joladnijo/joladnijo-docs/blob/main/README.md#hogyan-seg%C3%ADthetsz---m%C5%B1k%C3%B6d%C3%A9s%C3%BCnk)-t.


## Fejlesztés
Ez a web alkalmazás a következő tech stacken fut:
- Node.js v16 runtime
- [Next.js web application framework](https://nextjs.org/)

### Előfeltételek


#### Node.js telepítése Linux/macOS alatt 

Érdemes a [Node Version Manager-t](https://github.com/nvm-sh/nvm#installing-and-updating) használni.
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
Ha ez lefutott, akkor telepítsük a runtime-ot:
```sh
nvm install lts/gallium
```
Majd állítsuk be a használni kívánt runtime-nak:
```sh
nvm use
```
Ez utóbbi parancs a root directory-ban található `.nvmrc` file alapján állítja be a runtime-ot.


#### Node.js telepítése Windows alatt:

[Közvetlen link a letöltéshez](https://nodejs.org/dist/v16.14.2/node-v16.14.2-x64.msi)

Vagy wingettel:
```powershell
winget install OpenJS.NodeJS.LTS --version 16.14.2
```

### Lokális futtatás
Restore packages
```sh
npm ci
```
majd
```sh
npm run dev
```
Ez development módban futtatja majd a webalkalmazást, és a lokálisan futtatott backendhez próbál majd csatlakozni, ami a http://localhost:8000 címen fut alapértelmezetten. A backend futtatásához bővebb információk a [backend repository](https://github.com/joladnijo/joladnijo-backend) oldalán található.
