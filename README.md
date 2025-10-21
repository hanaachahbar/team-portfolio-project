# Team Portfolio Project

##  Team Members
- Hanaa Chahbar — [@hanaachahbar](https://github.com/hanaachahbar)
- Hamdat Ilafe Namra— [@ilafe30](https://github.com/ilafe30)
- Aya Mouffok — [@Aya-Mouff](https://github.com/Aya-Mouff)
- Danil ouakili — [@danil-okl](https://github.com/danil-okl)
- Mohamed Al Amin Saàd — [@Saad-Mohamed-Al-Amine](https://github.com/Saad-Mohamed-Al-Amine)
- Aymen Zahzouh -[@Aymenzh](https://github.com/Aymenzh)

##  Deployed Website
🔗 [Visit our Team Portfolio](https://hanaachahbar.github.io/team-portfolio-project/)

##  Project Overview
This project is a collaborative Team Portfolio Website built using React framework.  
Each member created their own profile page and added a link to it on the main index page.  
The project demonstrates effective Git collaboration using feature branching, pull requests, and peer review.

## Team Retrospective Analysis
#  1. The Story Behind Our Collaboration
At the beginning of the project, our team was excited to start building our Team Portfolio App. Each member was responsible for creating their own profile page — which made it easy to work independently most of the time.
However, the Home page was a shared space that required collaboration from everyone. This page linked all our profiles together and contained the main layout of the website.
Because several of us were editing it at the same time — adding our profile links, images, and sections — it quickly became the main source of merge conflicts.
# 2. The First Challenges: Merge Conflicts on the Home Page
One of the earliest problems we faced was when multiple members updated the Home.jsx file simultaneously.
For example, one member added a new section with their image and link, while another changed the overall layout or styling. When we later tried to merge our branches, Git showed multiple conflicts — especially around the profile cards and navigation.
Another common issue happened when Aymen’s image link was incorrect in one version of the file.
While Aymen fixed it in his branch, another teammate had already made additional edits to the same section. When both versions were merged, Git flagged it as a conflict between Aymen’s corrected code and the older version — forcing us to review and choose the right one manually.
These conflicts often caused confusion about which version was the most recent or correct, especially when several teammates pushed updates around the same time.

# 3. How We Solved It Together
To handle these conflicts, we decided to organize our workflow more clearly and improve communication.
Before making new changes, each member started to:
Pull the latest updates from the develop branch:
git pull origin develop
Work in their own feature branch, named clearly (for example:
feature/implement-hanaa-chahbar-profile)
Push their updates only after confirming there were no new conflicts.
When a conflict did occur, the first person who noticed it (usually the one merging) would:
Open the file with the conflict (marked by <<<<<<<, =======, >>>>>>>).
Review each section carefully to understand what was changed by whom.
Discuss it with the rest of the team if needed.
Manually fix the conflict so both sides’ edits were kept correctly.
Commit the fix with a clear message such as:
fix: resolve merge conflict in Home.jsx
Once the conflict was solved and the page worked correctly, the team member would approve the merge request.
# 4. What We Learned From This Experience
Through these challenges, our team learned a lot about:
The importance of coordination and communication before pushing new code.
How Git branching and merging really works in practice.
How to resolve merge conflicts manually without losing anyone’s work.
The value of clear commit messages and peer review to maintain a clean project history.
By the end of the project, our workflow was much smoother.
Everyone was more confident using Git, we merged branches with fewer issues, and our final Team Portfolio App looked polished and consistent.
This experience taught us that teamwork in software development isn’t just about writing code it’s about collaboration, communication.
team-portfolio-project/
## Repository Structure

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
