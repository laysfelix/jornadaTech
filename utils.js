export default {
  getDistance(obj1, obj2) {
    // função básica para calcular 2 objetos
    return Math.sqrt(
      Math.abs(obj1.x - obj2.x) ** 2 + Math.abs(obj1.y - obj2.y) ** 2
    );
  },
};
