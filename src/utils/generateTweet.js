import {faker} from "@faker-js/faker";

export function generateFakeTweet() {
  const avatar = faker.image.avatar();
  const name = faker.name.fullName();
  const username = faker.internet.userName();
  const text = faker.lorem.sentences(faker.datatype.number({min: 10, max: 24}));
  const createdAt = faker.date.between(
    new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    new Date(Date.now() - 1 * 60 * 1000),
  );

  return {
    avatar,
    name,
    username,
    text,
    createdAt,
  };
}
