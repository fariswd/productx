# Product Database

Product list

## Stack

```
hono
sequelize
mysql
```

## Run?

```
update & rename .env_copy to .env
docker compose up --build
open http://localhost:3000/
```

## Run dev?

```
update docker-compose.yml
api: build: dockerfile: Dockerfile.dev
```

## Endpoint

```
POST v1/product
GET v1/product
DELETE v1/product
```

## Payload

```
POST v1/product
{
    "name": "Rocket Ship",
    "price": 1000,
    "desc": "Rocket Bagus"
}

DELETE v1/product
{
    "pid": "50422966-b048-4338-96e5-ce1b01478237"
}
```

## Sample Response

```
GET v1/product
{
    "status": 200,
    "message": "OK",
    "data": [
        {
            "pid": "50422966-b048-4338-96e5-ce1b01478237",
            "name": "Rocket Ship",
            "price": 1000,
            "desc": "Rocket Bagus",
            "createdAt": "2023-08-06T16:10:11.000Z",
            "updatedAt": "2023-08-06T16:10:11.000Z"
        }
    ]
}

POST v1/product
{
    "status": 200,
    "message": "OK",
    "data": {
        "pid": "50422966-b048-4338-96e5-ce1b01478237",
        "name": "Rocket Ship",
        "price": 1000,
        "desc": "Rocket Bagus",
        "updatedAt": "2023-08-06T16:10:11.817Z",
        "createdAt": "2023-08-06T16:10:11.817Z"
    }
}

DELETE v1/product
{
    "status": 200,
    "message": "OK",
    "data": 1
}
```

fariswd  
2023  
🥲
