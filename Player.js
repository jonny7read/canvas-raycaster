class Player {
  constructor(s) {
    this.health = 100;
    this.speed = {
      forward: s,
      backward: .8 * s,
      turn: 5 * s
    };
  }
}