export function KickstarterVideo() {
  return (
    <section className="video inverse">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          title="Chromatron Kickstarter video"
          src="https://www.youtube-nocookie.com/embed/TyCFVRvAzqU?rel=0&showinfo=0"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </section>
  );
}
