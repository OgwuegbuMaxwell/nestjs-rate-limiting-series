# NestJS Rate Limiting Series


Educational project demonstrating how to implement and extend API rate limiting in a NestJS app using the official @nestjs/throttler package.


## What we’ve built so far (Part 1)

**Global rate limiting applied to all routes**
  - We set up ThrottlerModule.forRoot() to apply a default rate limit across our entire API.

**Configured basic limit settings**
  - Each client can make up to 3 requests per 30 seconds (customize in app.module.ts).
  - Exceeding the limit on one route doesn’t affect access to other routes — limits are applied per route by default.

**Enabled trust proxy**
  - Ensures rate limiting works correctly behind proxies (e.g., Railway, Heroku).

**Test endpoints using request.http**

  - GET / → Welcome message
  - GET /products → Example data route
  - POST /auth/login → Simulates login request

**Rate limit headers and error example**
  - Successful requests show X-RateLimit-* headers.

  - Exceeding the limit returns:

```json
{
  "statusCode": 429,
  "message": "ThrottlerException: Too Many Requests"
}
```


## How to run this project


```bash
git clone https://github.com/OgwuegbuMaxwell/nestjs-rate-limiting-series.git
cd nestjs-rate-limiting-series

```

**Install dependencies:**

```bash
npm install

```

**Run the app:**

```bash
npm run start:dev

```

Test using request.http in VS Code (REST Client extension required).


## What’s coming next (Part 2)

✅ Override limits per route using @Throttle() and @SkipThrottle()
✅ Apply stricter limits on sensitive endpoints (e.g., login)
✅ Explore custom global limit strategies


## Project structure



**Run the app:**

```ruby
src/
├── app.controller.ts    # Test endpoints
├── app.module.ts        # ThrottlerModule config
├── main.ts              # main
request.http             # Test requests

```


## Current packages

```json
{
  "dependencies": {
    "@nestjs/core": "^10.x",
    "@nestjs/throttler": "^6.4.0"
  }
}
```
