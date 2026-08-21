
export const getImageUrl = (person: { imageId: string }, size = "s"): string => {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
};
