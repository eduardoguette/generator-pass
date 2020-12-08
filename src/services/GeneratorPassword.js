export function getPass(
  serialLength = 10,
  noNumber = true,
  noLetras = true,
  specialC = true
) {
  let especialCharacter = `!"#$%&'()*+,-./:;<=>?@[]^_{|}~`;
  let characters = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ012346789";
  let letras = "abcdefghijkmnpqrtuvwxyzABCDEFGHJKMNPQRTUVWXYZ";
  let numbers = "0123456789";
  let result = "";
  for (let i = 0; i < serialLength; i++) {
    switch (serialLength >= 1) {
      case !noNumber && noLetras && specialC:
        result += letras.charAt(Math.floor(Math.random() * letras.length));
        result += especialCharacter.charAt(Math.floor(Math.random() * 100));
        break;
      case noNumber && !noLetras && specialC:
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        result += especialCharacter.charAt(Math.floor(Math.random() * 100));
        break;
      case !noNumber && !noLetras && specialC:
        result += especialCharacter.charAt(
          Math.floor(Math.random() * especialCharacter.length)
        );
        break;
      case noNumber && noLetras && !specialC:
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        break;
      case !noNumber && noLetras && !specialC:
        result += letras.charAt(Math.floor(Math.random() * letras.length));
        break;
      case noNumber && !noLetras && !specialC:
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        break;

      case noNumber && noLetras && specialC:
        result += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
        result += especialCharacter.charAt(Math.floor(Math.random() * 100));
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        break;
      default:
        result += "";
        break;
    }
  }
  return result.slice(0, serialLength);
}
