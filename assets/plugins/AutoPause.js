class AutoPause {
  constructor() {
    this.threshold = 0.25; // 0, 0.25, 0.5, 0.75, 1
    this.handleIntersection = this.handleIntersection.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.isVisibleIntersection = '';
  }

  run(player) {
    this.player = player;
    const observer = new IntersectionObserver(this.handleIntersection, {
      threshold: this.threshold,
    });

    observer.observe(this.player.media);
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  handleIntersection(entries) {
    const entry = entries[0];

    this.isVisibleIntersection = entry.intersectionRatio >= this.threshold;
    console.log(entry.intersectionRatio); // el Ratio es ese 0.25 que vamos a estar evaluando, cada que el ratio sea mayor o igual a
    // 0.25 vamos a intersectar

    this.isVisibleIntersection ? this.player.play() : this.player.pause();
  }

  handleVisibilityChange() {
    const isVisible = document.visibilityState === 'visible';
    console.log(document.visibilityState);

    if (isVisible && this.isVisibleIntersection) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }
}
export default AutoPause;
