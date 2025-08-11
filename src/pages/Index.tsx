import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile-abhas.jpg";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const Index = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP Preloader timeline
    const tl = gsap.timeline();
    tl.to(".progress-inner", {
      width: "100%",
      duration: 2,
      ease: "power2.out",
    }).to(
      ".preloader",
      {
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          const pre = document.querySelector(".preloader") as HTMLElement | null;
          if (pre) pre.style.display = "none";
          gsap.to(".site-content", { opacity: 1, duration: 0.6 });

          // Start Locomotive Scroll after preloader hides
          if (containerRef.current) {
            // eslint-disable-next-line no-new
            new LocomotiveScroll({
              // @ts-expect-error: library types may differ across versions
              element: containerRef.current,
              smooth: true,
            });
          }
        },
      },
      ">"
    );

    // Floating orbs animation
    gsap.to(".glow-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.3,
    });
  }, []);

  const projects = [p1, p2, p3, p4, p5, p6];

  return (
    <div ref={containerRef} data-scroll-container>
      {/* Preloader */}
      <div className="preloader fixed inset-0 z-50 grid place-items-center bg-background">
        <div className="w-[min(560px,90vw)] glass-card shadow-glow rounded-lg p-8 text-center">
          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient mb-6" aria-label="Abhas Paul">
            Abhas Paul
          </div>
          <div className="h-2 w-full rounded-full bg-muted overflow-hidden border border-border">
            <div className="progress-inner h-full w-0 bg-primary" />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">Loading the experience…</p>
        </div>
      </div>

      {/* Main content */}
      <div className="site-content opacity-0">
        <header id="hero" className="relative min-h-[100vh]">
          <nav className="absolute top-0 left-0 right-0 z-20">
            <div className="container mx-auto px-6 py-6 flex items-center justify-between">
              <a href="#hero" className="font-semibold story-link">AP</a>
              <ul className="hidden md:flex items-center gap-8 text-sm">
                <li><a className="story-link" href="#about">About</a></li>
                <li><a className="story-link" href="#projects">Projects</a></li>
                <li><a className="story-link" href="#contact">Contact</a></li>
              </ul>
              <div className="hidden md:block">
                <Button variant="glow" size="sm">Hire Me</Button>
              </div>
              <button className="md:hidden px-3 py-2 border border-border rounded-md" onClick={() => setMenuOpen((v) => !v)} aria-expanded={menuOpen} aria-controls="mobile-nav">
                Menu
              </button>
            </div>
            {menuOpen && (
              <div id="mobile-nav" className="md:hidden px-6">
                <ul className="mt-3 p-4 glass-card rounded-lg shadow-glow space-y-3">
                  <li><a className="story-link" href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                  <li><a className="story-link" href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
                  <li><a className="story-link" href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
                  <li><Button variant="glow" size="sm" onClick={() => setMenuOpen(false)}>Hire Me</Button></li>
                </ul>
              </div>
            )}
          </nav>
          <div className="spline-container">
            <iframe
              src="https://my.spline.design/holoblobs-NS9beW4wTALL8ugBYSIr0r1f/"
              frameBorder="0"
              width="100%"
              height="100%"
              title="Spline 3D Hero"
            />
            <div className="watermark-cover" />
          </div>

          <div className="pointer-events-none absolute inset-0 z-10">
            <div className="glow-orb orb-1" />
            <div className="glow-orb orb-2" />
            <div className="glow-orb orb-3" />
          </div>

          <div className="absolute inset-0 z-20 grid place-items-center px-6">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Hi, I’m <span className="text-gradient">Abhas Paul</span> —
                <span className="block mt-2">Full Stack Web Developer</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground">
                Building immersive, cutting-edge web experiences.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button variant="hero" size="xl" className="hover-scale">Hire Me</Button>
                <a href="#projects" className="story-link">View Projects</a>
              </div>
            </div>
          </div>
        </header>

        <main id="main" role="main">
          {/* About */}
          <section id="about" className="container mx-auto px-6 py-20">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <article className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I craft premium, performant web apps with a focus on motion, interactivity, and clean architecture. I love bringing ideas to life with React, TypeScript, and GSAP.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {['HTML5','CSS3','JavaScript','React','Next.js','GSAP'].map((s) => (
                    <span key={s} className="px-3 py-1 rounded-full text-sm bg-secondary text-secondary-foreground border border-border">
                      {s}
                    </span>
                  ))}
                </div>
              </article>
              <aside className="order-1 md:order-2">
                <figure className="glass-card shadow-glow rounded-xl overflow-hidden">
                  <img src={profileImg} loading="lazy" width={512} height={512} alt="Abhas Paul — Full Stack Web Developer portrait" />
                </figure>
              </aside>
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="container mx-auto px-6 py-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Projects</h2>
            <div className="hidden md:grid grid-cols-12 gap-6">
              {projects.map((src, i) => (
                <article key={i} className={`col-span-12 sm:col-span-6 lg:col-span-4 glass-card rounded-xl overflow-hidden shadow-glow hover-scale`}>
                  <img src={src} loading="lazy" alt={`Project ${i + 1} cover — premium web experience`} className="w-full h-48 object-cover" />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold">Project {i + 1}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">Immersive, performant, and elegant web solution.</p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="px-2 py-0.5 rounded-full bg-secondary">React</span>
                      <span className="px-2 py-0.5 rounded-full bg-secondary">TypeScript</span>
                    </div>
                    <div className="mt-5">
                      <Button variant="glow" size="sm">View Project</Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Mobile slider (simple horizontal scroll) */}
            <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
              {projects.map((src, i) => (
                <article key={i} className="min-w-[85%] snap-center glass-card rounded-xl overflow-hidden shadow-glow">
                  <img src={src} loading="lazy" alt={`Project ${i + 1} cover — premium web experience`} className="w-full h-44 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">Project {i + 1}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">Immersive, performant, elegant.</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="container mx-auto px-6 py-20">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm mb-2">Name</label>
                  <input id="name" name="name" required className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">Email</label>
                  <input id="email" name="email" type="email" required className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm mb-2">Message</label>
                  <textarea id="message" name="message" required className="min-h-[140px] w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <Button type="submit" variant="hero" size="lg" className="hover-scale">Send Message</Button>
              </form>
              <div className="mt-6 flex items-center gap-4">
                <a href="#" aria-label="GitHub" className="story-link">GitHub</a>
                <a href="#" aria-label="Reddit" className="story-link">Reddit</a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-border">
          <div className="container mx-auto px-6 py-10">
            <nav aria-label="Footer">
              <ul className="flex flex-wrap gap-6 text-sm">
                <li><a className="story-link" href="#hero">Home</a></li>
                <li><a className="story-link" href="#about">About</a></li>
                <li><a className="story-link" href="#projects">Projects</a></li>
                <li><a className="story-link" href="#contact">Contact</a></li>
              </ul>
            </nav>
            <p className="mt-6 text-sm text-muted-foreground">© {new Date().getFullYear()} Abhas Paul. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
