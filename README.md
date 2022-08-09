# Wish

Share your wishlist with your loved ones to help them communicate, and keep their claims a surprise to you.

Wish users create their own wish list and share it with their loved ones, who can then mark wished for items as claimed. Other loved ones can view that an item has been claimed, but that claim remains a surprise to the user who wished for it.

## Features

- A new user can sign up with email and password, optionally including a group code to join an existing group.
- A user can add gifts to their wish list, optionally including a description and url.
- A user can invite other users to join their group by sharing their group code.
- A user can view the wish lists of the other people belonging to the user's groups and mark gifts as claimed.
- Claim status is visible to other users, but not the user who wished for the gift.

## Design

Designed using [figma](https://figma.com); view the design file [here](https://www.figma.com/file/1JnxKYqqK2hl6OQv1Fn3ZK/Wish-Mobile-Design-1?node-id=0%3A1).

- Color palette: [materialDesign](https://material.io/design/color/the-color-system.html#tools-for-picking-colors)
  - yellow 300: ![#fff176](https://via.placeholder.com/15/fff176/000000?text=+) `#fff176`
  - yellow 600: ![#fdd835](https://via.placeholder.com/15/fdd835/000000?text=+) `#fdd835`
  - yellow 900: ![#f57f16](https://via.placeholder.com/15/f57f16/000000?text=+) `#f57f16`
  - blue 200: ![#8a9bee](https://via.placeholder.com/15/8a9bee/000000?text=+) `#8a9bee`
  - blue 400: ![#2c57d2](https://via.placeholder.com/15/2c57d2/000000?text=+) `#2c57d2`
  - blue 900: ![#000989](https://via.placeholder.com/15/000989/000000?text=+) `#000989`
- Placeholder images for this README: [placeholder](https://placeholder.com/)
- Illustrations: [unDraw](https://undraw.co)
- UI elements: [materialUi](https://mui.com)

## Database

[MongoDB](https://www.mongodb.com/)

![Screen Shot 2022-04-02 at 8 35 20 PM](https://user-images.githubusercontent.com/79616733/161410240-bc0d4bc3-0876-42ef-9e7a-7cec93fe2d16.png)

### Users

| Field            | Data Type             | Constraints               |
| ---------------- | --------------------- | ------------------------- |
| `id`             | `string`              | `not null`, `primary key` |
| `name`           | `string`              | `not null`                |
| `email`          | `string`              | `not null`                |
| `hashedPassword` | `string`              | `not null`                |
| `avatar`         | `string`              |
| `groups`         | `array: [ ObjectId ]` | `not null`                |

### Groups

| Field   | Data Type             | Constraints               |
| ------- | --------------------- | ------------------------- |
| `id`    | `string`              | `not null`, `primary key` |
| `name`  | `string`              |
| `users` | `array: [ ObjectId ]` | `not null`                |

### Gifts

| Field         | Data Type  | Constraints                   |
| ------------- | ---------- | ----------------------------- |
| `id`          | `string`   | `not null`, `primary key`     |
| `name`        | `string`   | `not null`                    |
| `description` | `string`   |
| `wishedBy`    | `objectId` | `not null`                    |
| `isClaimed`   | `boolean`  | `not null`, `default = false` |
| `claimedBy`   | `objectId` |
| `url`         | `string`   |

## Frontend Routes

### `/`

Renders a link to the wish list for each person in the user's active groups.

### `/:userId`

Renders all of the items wished for by the user whose id appears in the url parameters.

## API Routes

### Session Routes

#### `GET /api/auth`

Returns the user object if the user ID stored in the session is valid. Otherwise, it returns a 401 with a message of `Unauthorized`.

#### `POST /api/auth`

Returns the user object if the user provided credentials that match a user in the database.

#### `GET /api/auth/logout`

Returns a message of `User logged out` on successful logout.

#### `POST /api/auth/signup`

Returns the new user object if the user provided all of the information required to create a new user account.

### User Routes

#### `PUT /api/users/<int:user_id>`

Returns the updated user object if the form was successfully validated.

### Wish Routes

#### `GET /api/gifts`

Returns all of the gifts associated with the user's group IDs.

#### `POST /api/gifts/<int:gift_id>`

Returns the newly created gift object if the form was successfully validated.

#### `PUT /api/gifts/<int:gift_id>`

Returns the updated gift object if the form was successfully validated.

#### `DELETE /api/gifts/<int:gift_id>`

Returns a message of `Delete successful` if the specified gift was successfully removed from the database.
