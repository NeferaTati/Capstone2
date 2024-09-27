import React from 'react';
import './Home.css'; // Ensure this path is correct

function HomeBdy() {
  return (
    <div className="home-body">
      <style src="/src/components/typing.css"></style>
      <main className="home-content">
        <div className="photo-section">
          <div className="photo">
            <img src="https://res.cloudinary.com/dvvin6oes/image/upload/v1726763407/Neuroscience_Brain_Art_Digital_Download_Prints_-_Brain_Computer_Interface_AI_prompt_wall_art_Artificial_Intelligence_futuristic_art_hgsgwb.jpg" alt="Description 1" />
            <h2 className="typing-effect">Title 1</h2>
            <p className="typing-effect">Short description for photo 1.</p>
          </div>
          <div className="photo-item">
            <img src="https://res.cloudinary.com/dvvin6oes/image/upload/v1726763547/Neon_Vaporwave_Cyberpunk_Girl_Sticker_dmvzy9.jpg" alt="Description 2" />
            <h2 className="typing-effect">Title 2</h2>
            <p className="typing-effect">Short description for photo 2.</p>
          </div>
          <div className="photo-item">
            <img src="https://res.cloudinary.com/dvvin6oes/image/upload/v1726763504/art_zl61mh.jpg" alt="Description 3" />
            <h2 className="typing-effect">Title 3</h2>
            <p className="typing-effect">Short description for photo 3.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomeBdy;