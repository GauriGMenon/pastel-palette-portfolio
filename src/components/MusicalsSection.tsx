const MusicalsSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-6 bg-background">
      <div className="max-w-6xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold text-center mb-16 text-gradient">
          Musicals
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Video 1 */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl border-4 border-primary/50 shadow-lg hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Musical Performance 1"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-foreground">Featured Performance</h3>
              <p className="text-muted-foreground mt-2">A special rendition from last season</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl border-4 border-secondary/50 shadow-lg hover:border-secondary transition-all duration-300 hover:shadow-2xl hover:shadow-secondary/20">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/9bZkp7q19f0"
                  title="Musical Performance 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-foreground">Behind the Scenes</h3>
              <p className="text-muted-foreground mt-2">Rehearsal highlights and bloopers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicalsSection;
