# Notes

Simple web app to hold notes with social login.

## Used technologies 🛠️:

1. React.js
2. Next.js
3. Typescript
4. Tailwind CSS
5. Prisma
6. Postgresql (Supabase)
7. next-auth
8. TanStack Query

## Installation 👷

Required: node.js v18 and docker with `docker compose` command.


1. Clone this repository:

```
git clone https://github.com/grzegorzpokorski/notes.git
```

2. Install dependencies:

```
pnpm install
```

3. Setup environment variables:

To run it in local environment firstly you should prepare `.env` file with required enviroment variables - example file is in the project (`.env-local`).

4. Run project:

```
docker compose up
npx prisma migrate dev
npx prisma generate
pnpm dev
```

## Live 🌐

[https://notes-nine-navy.vercel.app/](https://notes-nine-navy.vercel.app/)

<!--
## Some screenshots:

![](/mockups/start.png?raw=true "Home page")

![](/mockups/page.png?raw=true "Single page")

![](/mockups/blog.png?raw=true "Blog archive")

![](/mockups/pricing.png?raw=true "Pricing page")

![](/mockups/offer.png?raw=true "Offer page")

![](/mockups/single.png?raw=true "Single article page") -->

## Contributing

If you find any bug, have suggestion how to improve this project feel free to tell about it in [issues](https://github.com/grzegorzpokorski/grzegorzpokorski.pl/issues) tab. Pull requests also are welcoming.
