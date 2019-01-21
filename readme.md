# CTEC3905 Assignment
This assignment is centred around a Single Page Application and aims to act as a portfolio where I can showcase my skills and experience. Initial code for the website was taken from the boilerplate code that was already generated.

# Notes
* Slight issue with the branching early on (the branch was displayed as merging in correctly) meant I had to revert to an early working state using `git reset --hard 0c9a77d`
* The function `SetSkillBar()` was mainly used to display proficiency and avoid writing unmaintainable css for each div
* Navbar doesn't need to be sticky because there's a scroll to top button that appears when navbar is gone.

#### Usage of ul and li within nav
* I believe this is something that can be argued as acceptable. By using ul and li I was provided with greater control over my bar nav. Further justification can be found [on this stackover flow page](https://stackoverflow.com/questions/9600357/should-i-be-using-nav-or-ul)

#### Fake projects
 * Only real project i have worked on is the iSAMS project. The rest are just placeholders and included for the purpose of this assignment.

#### Div usage for skill bars
* Attempted to use `<progress>` tags for the skill bars however some issues were being caused with webkit therefore this couldn't be used for the purpose of this assignment

#### Const usage
* I general always use `const` instead of `let` for variable declarations I feel the variable needs to change. This is also practiced in industry.

# Bugs
#### Stylesheet not appearing (Only occurred once)
* An issue arose on GitHub Pages and local instance following `commit 4361730 (Merge branch 'feature/navigation')`. It would appear as the previous stylesheet was being cached. This can be resolved by the following :
  1. Open up Dev Tools
  2. Navigation to Application tab
  3. Click Clear Storage on the left hand side
  4. Scroll down and click Clear site data
  5. Refresh browser
![Stylesheet issue fix](https://i.imgur.com/TeXNm9Y.png "Steps to fix stylesheet issue")
### Snap scrolling bug on iPhone 6s Chrome
* Removed snap scrolling for now due to causing a negative impact on user experience

# References
* Body Grid layout for overall webpage was adapted from my Lab 6 work
* Projects layout was adapted from [here](https://getflywheel.com/layout/card-layout-css-grid-layout-how-to/)
* Navbar was inspired through watching this [video](https://www.youtube.com/watch?v=gXkqy0b4M5g). The burger bar animation was derived entirely from "Dev Ed" however some prior knowledge was also used to for the JS toggle. Some inspiration was also though of from here [here](https://codepen.io/designcouch/pen/Atyop)
* Scroll to top button was inspired via [this](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_scroll_to_top)
* The helper function for css styles was inspired from as I wasn't aware  Object.Assign could be used to set styles.[here](https://stackoverflow.com/questions/3968593/how-can-i-set-multiple-css-styles-in-javascript)
* Localstorage was implemented with some help from [Daves solution](https://github.com/CTEC3905/js-local-storage-form/)
* Fortnite API was implemented myself using the API doc from [here](https://fortniteapi.com/)
* Regex for isValid functions were generated [online](https://regexr.com/) and pasted in
* Fade in on load section of Javascript was adapted from [Stack Overflow](https://stackoverflow.com/questions/46437376/element-fade-in-on-scroll-pure-vanilla-javascript)
* Box-shadow was taken from material design [codepen](https://codepen.io/sdthornton/pen/wBZdXq)