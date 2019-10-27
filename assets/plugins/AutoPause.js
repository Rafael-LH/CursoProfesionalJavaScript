class AutoPause {
  constructor() {
    this.threshold = 0.25;
    this.handleIntersection = this.handleIntersection.bind(this);
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
  }

  handleIntersection(entries) {
    const entry = entries[0];

    const isVisible = entry.intersectionRatio >= this.threshold;
    console.log(entry.intersectionRatio); // el Ratio es ese 0.25 que vamos a estar evaluando, cada que el ratio sea mayor o igual a
    // 0.25 vamos a intersectar

    isVisible ? this.player.play() : this.player.pause();
  }
}
export default AutoPause;
