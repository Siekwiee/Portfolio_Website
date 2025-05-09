import { createFileRoute } from '@tanstack/react-router'
import '../App.css'
import Navbar from '../components/navbar'
import ProfilePicture from '../components/ProfilePicture'
import { FaGithub, FaLinkedin, FaDiscord, FaChevronDown } from 'react-icons/fa'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const scrollToNextSection = (currentSection: string) => {
    const sections = {
      'hero': 'about',
      'about': 'blog'
    };
    
    const nextSection = document.querySelector(`.${sections[currentSection as keyof typeof sections]}-section`);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App gradient-wave">
      <Navbar />
      
      {/* Hero Section with Photo and Intro */}
      <section className="hero-section">
        <div className="profile-container">
          <div className="profile-photo">
            <ProfilePicture size={300} name="J" />
          </div>
          <div className="intro-text">
            <h1>Hi, I'm Jannik / Siekwie</h1>
            <p className="tagline">Tech Enthusiast</p>
            <p className="brief-intro">
               A versatile Full stack software Developer with a unique blend of expertise.
            </p>
            <div className="social-links">
              <a href="https://github.com/siekwiee" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaGithub />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/jannik-wiest" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaLinkedin />
                <span>LinkedIn</span>
              </a>
              <a href="https://discord.com/users/siekwie" target="_blank" rel="noopener noreferrer" className="social-link">
                <FaDiscord />
                <span>Discord</span>
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToNextSection('hero')}>
          <FaChevronDown />
        </div>
      </section>

      {/* About Me Section */}
      <section className="about-section">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
            Hello! I'm a dedicated Fullstack Software Developer who recently completed a three-year apprenticeship as a Fachinformatiker für Anwendungsentwicklung, equipping me with the skills to build innovative and efficient software solutions. 
            </p>
            <p>
            With a strong foundation in both software and systems, I approach projects with a practical, end-to-end perspective. Whether it's crafting clean code, optimizing systems, or solving complex problems, I'm excited to bring ideas to life. Let's create something extraordinary together!
            </p>
          </div>
          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skill-tags">
              <span className="skill-tag">React</span>
              <span className="skill-tag">TypeScript</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Golang</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Lua</span>
              <span className="skill-tag">C#</span>
              {/* Add more skills as needed */}
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => scrollToNextSection('about')}>
          <FaChevronDown />
        </div>
      </section>

      {/* Recent Blog Posts Section */}
      <section className="blog-section">
        <h2>Recent Blog Posts(coming soon)</h2>
        <div className="blog-grid">
          <article className="blog-card">
            <h3>Lorem Ipsum</h3>
            <p className="blog-date">March 15, 2024</p>
            <p className="blog-excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="read-more">Read More →</a>
          </article>
          <article className="blog-card">
            <h3>Lorem Ipsum</h3>
            <p className="blog-date">March 10, 2024</p>
            <p className="blog-excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="read-more">Read More →</a>
          </article>
          <article className="blog-card">
            <h3>Lorem Ipsum</h3>
            <p className="blog-date">March 5, 2024</p>
            <p className="blog-excerpt">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <a href="#" className="read-more">Read More →</a>
          </article>
        </div>
      </section>
    </div>
  )
}

export default App;
