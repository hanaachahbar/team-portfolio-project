# Team Portfolio Project

## 👥 Team Members
- Hanaa Chahbar — [@hanaachahbar](https://github.com/hanaachahbar)
- Hamdat Ilafe Namra— [@ilafe30](https://github.com/ilafe30)
- Aya Mouffok — [@Aya-Mouff](https://github.com/Aya-Mouff)
- Danil ouakili — [@danil-okl](https://github.com/danil-okl)
- Mohamed Al Amin Saàd — [@Saad-Mohamed-Al-Amine](https://github.com/Saad-Mohamed-Al-Amine)
- Aymen Zahzouh -[@aymen-zahzouh](https://github.com/aymen-zahzouh)

## 🌐 Deployed Website
🔗 [Visit our Team Portfolio](https://hanaachahbar.github.io/team-portfolio-project/)

## 💻 Project Overview
This project is a collaborative Team Portfolio Website built using React framework.  
Each member created their own profile page and added a link to it on the main index page.  
The project demonstrates effective Git collaboration using feature branching, pull requests, and peer review.

## 🧠 Team Retrospective Analysis
Team Retrospective Analysis
1. Most Significant Technical Challenge

The most significant challenge our team faced during this project was resolving merge conflicts caused by a lack of communication at the beginning of development.
In the early stages, several members worked on the same files — especially the index.html homepage — without properly synchronizing their branches with the latest version of develop. As a result, multiple conflicting edits were introduced to the same sections of the page, including layout adjustments, styling changes, and navigation links. This led to a series of merge conflicts that slowed down our progress and caused confusion about which version was the most up-to-date.

2. Merge Conflict Resolution

To address these issues, we decided to improve our coordination and adopt a clearer workflow. Before making any changes, each member began pulling the latest updates from the develop branch and creating feature branches with descriptive names (for example, feature/implement-hanaa-chahbar-profile).
When conflicts appeared, we followed a consistent resolution process:

Pulled the latest version of develop using git pull origin develop.

Reviewed the conflict markers (<<<<<<<, =======, >>>>>>>) carefully to understand each contributor’s changes.

Discussed the modifications as a team to choose the best combined version.

Committed the resolved file with the message fix: resolve merge conflict in index.html.
This improved communication helped us handle future conflicts much faster and with fewer errors.

3. Evaluation of the Workflow

The pull request and peer review process greatly improved the quality of our final website. Having every branch reviewed before merging prevented new conflicts and ensured consistency across all pages. Although our team initially struggled with coordination, the experience taught us how vital communication and Git discipline are in collaborative projects. By the end, we had a stronger understanding of teamwork, version control, and software development best practices.

team-portfolio-project/
## 🧱 Repository Structure

- team-portfolio-project  
  - src  
    - pages (contains all React components for each team member)  
      - Home.jsx  
      - Danil-ouakli.jsx  
      - Aya-mouffok.jsx  
      - Aymen-zahzouh.jsx  
      - Mohamed-alamin-saad.jsx  
      - Hanaa-chahbar.jsx  
      - Ilafe-namra-hamdat.jsx  

    - assets (contains all images and media files)  
      - danil-Ouakli.jpg  
      - ayamouffok.jpg  
      - aymenzahzouh.jpg  
      - SaadMohamed.jpg  
      - hanaachahbar.jpg  
      - ilafPic.jpg   

    - Styles (contains CSS files for each member’s profile)  
      - DanilOuakli.css  
      - AyaMouffok.css  
      - AymenZahzouh.css  
      - MohamedSaad.css  
      - HanaaChahbar.css  
      - IlafeHamdat.css
      - Home.css

  - public (static files served directly by React)  
    - index.html  
    - favicon.ico  

  - package.json (project dependencies and scripts)  
  - README.md (project documentation)  
  - .gitignore (files and folders to exclude from Git tracking)
